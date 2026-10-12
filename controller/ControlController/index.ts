import { Request, Response } from 'express';
import { prisma } from '../../bin/prismaConfig';
import { mqttService } from '../../services/mqtt.service';
import { ApiResponse } from '../../utils/api-response';
import { NotFoundError } from '../../utils/errors';
import {
  ActuatorState,
  ControlAction,
  ControlMode,
  ControlSource,
} from '../../src/generated/prisma/client';

async function findDevice(deviceId: string) {
  const device = await prisma.device.findFirst({
    where: {
      OR: [{ id: deviceId }, { serialNumber: deviceId }],
    },
    include: {
      setting: true,
      actuators: true,
    },
  });

  if (!device) {
    throw new NotFoundError(`Perangkat "${deviceId}" tidak ditemukan`);
  }

  return device;
}

export const ControlController = {
  /**
   * POST /api/v1/devices/:deviceId/control/mode
   * 1 = Manual, 2 = Auto, 3 = Hybrid
   */
  changeControlMode: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const modeRaw = req.body.mode;
    let targetMode: ControlMode = ControlMode.AUTO;
    let numericMode = 2;

    if (modeRaw === 1 || modeRaw === '1' || modeRaw === 'MANUAL') {
      targetMode = ControlMode.MANUAL;
      numericMode = 1;
    } else if (modeRaw === 2 || modeRaw === '2' || modeRaw === 'AUTO') {
      targetMode = ControlMode.AUTO;
      numericMode = 2;
    } else if (modeRaw === 3 || modeRaw === '3' || modeRaw === 'HYBRID') {
      targetMode = ControlMode.HYBRID;
      numericMode = 3;
    } else if (modeRaw === 'SCHEDULE') {
      targetMode = ControlMode.SCHEDULE;
      numericMode = 4;
    }

    await prisma.device.update({
      where: { id: device.id },
      data: { controlMode: targetMode },
    });

    const topic = `${device.serialNumber}/cmd/control/mode`;
    const payload = { mode: numericMode };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished, mode: targetMode },
      mqttPublished
        ? 'Mode kontrol berhasil diubah dan dikirim ke perangkat'
        : 'Mode kontrol disimpan di database (broker MQTT tidak terhubung)',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/setpoint
   * { MinS, MidS, MinK, MidK }
   */
  updateSetpoint: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const minS = req.body.MinS ?? req.body.minTemperature;
    const midS = req.body.MidS ?? req.body.maxTemperature;
    const minK = req.body.MinK ?? req.body.minHumidity;
    const midK = req.body.MidK ?? req.body.maxHumidity;

    const updatedSetting = await prisma.deviceSetting.upsert({
      where: { deviceId: device.id },
      create: {
        deviceId: device.id,
        minTemperature: minS != null ? Number(minS) : 24.0,
        maxTemperature: midS != null ? Number(midS) : 28.0,
        minHumidity: minK != null ? Number(minK) : 80.0,
        maxHumidity: midK != null ? Number(midK) : 95.0,
      },
      update: {
        ...(minS != null && { minTemperature: Number(minS) }),
        ...(midS != null && { maxTemperature: Number(midS) }),
        ...(minK != null && { minHumidity: Number(minK) }),
        ...(midK != null && { maxHumidity: Number(midK) }),
      },
    });

    const topic = `${device.serialNumber}/cmd/setpoint/auto`;
    const payload = {
      MinS: Number(updatedSetting.minTemperature),
      MidS: Number(updatedSetting.maxTemperature),
      MinK: Number(updatedSetting.minHumidity),
      MidK: Number(updatedSetting.maxHumidity),
    };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished, setting: updatedSetting },
      'Setpoint berhasil diperbarui',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/timer
   * { Menit, Detik }
   */
  updateTimer: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const menit = Number(req.body.Menit ?? req.body.minute ?? 0);
    const detik = Number(req.body.Detik ?? req.body.second ?? 0);
    const totalSeconds = menit * 60 + detik;

    await prisma.deviceSetting.upsert({
      where: { deviceId: device.id },
      create: {
        deviceId: device.id,
        timerDurationSeconds: totalSeconds,
      },
      update: {
        timerDurationSeconds: totalSeconds,
      },
    });

    const topic = `${device.serialNumber}/cmd/timer/auto`;
    const payload = { Menit: menit, Detik: detik };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished },
      'Timer pompa berhasil diperbarui',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/timer/floor
   * { FlrMenit, FlrDetik }
   */
  updateFloorTimer: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const flrMenit = Number(req.body.FlrMenit ?? req.body.minute ?? 0);
    const flrDetik = Number(req.body.FlrDetik ?? req.body.second ?? 0);

    const topic = `${device.serialNumber}/cmd/timer/floor`;
    const payload = { FlrMenit: flrMenit, FlrDetik: flrDetik };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished },
      'Timer siram lantai berhasil diperbarui',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/schedule
   * { jam1, menit1, jam2, menit2, jam3, menit3 }
   */
  updateSchedule: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const topic = `${device.serialNumber}/cmd/schedule/update`;
    const payload = req.body;
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished },
      'Jadwal penyiraman berhasil diperbarui',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/schedule/floor
   * { FlrJam, FlrMenit }
   */
  updateFloorSchedule: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const topic = `${device.serialNumber}/cmd/schedule/floor`;
    const payload = {
      FlrJam: Number(req.body.FlrJam ?? 0),
      FlrMenit: Number(req.body.FlrMenit ?? 0),
    };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished },
      'Jadwal siram lantai berhasil diperbarui',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/schedule/mode
   * { mode: 1 | 2 | 3 }
   */
  changeScheduleMode: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);

    const topic = `${device.serialNumber}/cmd/schedule/mode`;
    const payload = { mode: Number(req.body.mode ?? 1) };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished },
      'Mode jadwal berhasil diubah',
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/actuator/pump
   * { on: boolean }
   */
  controlPump: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);
    const isOn = Boolean(req.body.on);

    const pumpActuator = device.actuators.find(
      (a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'),
    );

    if (pumpActuator) {
      await prisma.actuator.update({
        where: { id: pumpActuator.id },
        data: {
          state: isOn ? ActuatorState.ON : ActuatorState.OFF,
          lastChangedAt: new Date(),
        },
      });

      await prisma.controlLog.create({
        data: {
          deviceId: device.id,
          actuatorId: pumpActuator.id,
          userId: req.user?.id ?? null,
          action: isOn ? ControlAction.TURN_ON : ControlAction.TURN_OFF,
          source: ControlSource.MOBILE_APP,
          mode: device.controlMode,
          success: true,
          message: `Pompa diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
        },
      });
    }

    const topic = `${device.serialNumber}/cmd/actuator/pump`;
    const payload = { pump: isOn ? 1 : 0, on: isOn };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished, status: isOn ? 'ON' : 'OFF' },
      `Pompa berhasil diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
    );
  },

  /**
   * POST /api/v1/devices/:deviceId/actuator/fan
   * { on: boolean }
   */
  controlFan: async (req: Request, res: Response): Promise<void> => {
    const { deviceId } = req.params;
    const device = await findDevice(deviceId);
    const isOn = Boolean(req.body.on);

    const fanActuator = device.actuators.find(
      (a) =>
        a.type === 'MISTING' ||
        a.type === 'FLOOR_WATERING' ||
        a.name.toLowerCase().includes('fan') ||
        a.name.toLowerCase().includes('mist'),
    );

    if (fanActuator) {
      await prisma.actuator.update({
        where: { id: fanActuator.id },
        data: {
          state: isOn ? ActuatorState.ON : ActuatorState.OFF,
          lastChangedAt: new Date(),
        },
      });

      await prisma.controlLog.create({
        data: {
          deviceId: device.id,
          actuatorId: fanActuator.id,
          userId: req.user?.id ?? null,
          action: isOn ? ControlAction.TURN_ON : ControlAction.TURN_OFF,
          source: ControlSource.MOBILE_APP,
          mode: device.controlMode,
          success: true,
          message: `Pengabutan/Fan diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
        },
      });
    }

    const topic = `${device.serialNumber}/cmd/actuator/fan`;
    const payload = { fan: isOn ? 1 : 0, on: isOn };
    const mqttPublished = mqttService.publish(topic, payload);

    ApiResponse.success(
      res,
      { topic, payload, mqttPublished, status: isOn ? 'ON' : 'OFF' },
      `Fan/Pengabutan berhasil diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
    );
  },
};
