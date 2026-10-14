"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlController = void 0;
const prismaConfig_1 = require("../../bin/prismaConfig");
const mqtt_service_1 = require("../../services/mqtt.service");
const api_response_1 = require("../../utils/api-response");
const find_device_1 = require("../../utils/find-device");
const client_1 = require("../../src/generated/prisma/client");
exports.ControlController = {
    /**
     * POST /api/v1/devices/:deviceId/control/mode
     * 1 = Manual, 2 = Auto, 3 = Hybrid
     */
    changeControlMode: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const modeRaw = req.body.mode;
        let targetMode = client_1.ControlMode.AUTO;
        let numericMode = 2;
        if (modeRaw === 1 || modeRaw === '1' || modeRaw === 'MANUAL') {
            targetMode = client_1.ControlMode.MANUAL;
            numericMode = 1;
        }
        else if (modeRaw === 2 || modeRaw === '2' || modeRaw === 'AUTO') {
            targetMode = client_1.ControlMode.AUTO;
            numericMode = 2;
        }
        else if (modeRaw === 3 || modeRaw === '3' || modeRaw === 'HYBRID') {
            targetMode = client_1.ControlMode.HYBRID;
            numericMode = 3;
        }
        else if (modeRaw === 'SCHEDULE') {
            targetMode = client_1.ControlMode.SCHEDULE;
            numericMode = 4;
        }
        await prismaConfig_1.prisma.device.update({
            where: { id: device.id },
            data: { controlMode: targetMode },
        });
        const topic = `${device.serialNumber}/cmd/control/mode`;
        const payload = { mode: numericMode };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished, mode: targetMode }, mqttPublished
            ? 'Mode kontrol berhasil diubah dan dikirim ke perangkat'
            : 'Mode kontrol disimpan di database (broker MQTT tidak terhubung)');
    },
    /**
     * POST /api/v1/devices/:deviceId/setpoint
     * { MinS, MidS, MinK, MidK }
     */
    updateSetpoint: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const minS = req.body.MinS ?? req.body.minTemperature ?? req.body.minSuhu;
        const midS = req.body.MidS ?? req.body.maxTemperature ?? req.body.midSuhu;
        const minK = req.body.MinK ?? req.body.minHumidity ?? req.body.minKelembaban;
        const midK = req.body.MidK ?? req.body.maxHumidity ?? req.body.midKelembaban;
        const updatedSetting = await prismaConfig_1.prisma.deviceSetting.upsert({
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
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished, setting: updatedSetting }, 'Setpoint berhasil diperbarui');
    },
    /**
     * POST /api/v1/devices/:deviceId/timer
     * { Menit, Detik }
     */
    updateTimer: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const menit = Number(req.body.Menit ?? req.body.minute ?? 0);
        const detik = Number(req.body.Detik ?? req.body.second ?? 0);
        const totalSeconds = menit * 60 + detik;
        await prismaConfig_1.prisma.deviceSetting.upsert({
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
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished }, 'Timer pompa berhasil diperbarui');
    },
    /**
     * POST /api/v1/devices/:deviceId/timer/floor
     * { FlrMenit, FlrDetik }
     */
    updateFloorTimer: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const flrMenit = Number(req.body.FlrMenit ?? req.body.minute ?? 0);
        const flrDetik = Number(req.body.FlrDetik ?? req.body.second ?? 0);
        const topic = `${device.serialNumber}/cmd/timer/floor`;
        const payload = { FlrMenit: flrMenit, FlrDetik: flrDetik };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished }, 'Timer siram lantai berhasil diperbarui');
    },
    /**
     * POST /api/v1/devices/:deviceId/schedule
     * { jam1, menit1, jam2, menit2, jam3, menit3 }
     */
    updateSchedule: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const topic = `${device.serialNumber}/cmd/schedule/update`;
        const payload = req.body;
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished }, 'Jadwal penyiraman berhasil diperbarui');
    },
    /**
     * POST /api/v1/devices/:deviceId/schedule/floor
     * { FlrJam, FlrMenit }
     */
    updateFloorSchedule: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const topic = `${device.serialNumber}/cmd/schedule/floor`;
        const payload = {
            FlrJam: Number(req.body.FlrJam ?? 0),
            FlrMenit: Number(req.body.FlrMenit ?? 0),
        };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished }, 'Jadwal siram lantai berhasil diperbarui');
    },
    /**
     * POST /api/v1/devices/:deviceId/schedule/mode
     * { mode: 1 | 2 | 3 }
     */
    changeScheduleMode: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const topic = `${device.serialNumber}/cmd/schedule/mode`;
        const payload = { mode: Number(req.body.mode ?? 1) };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished }, 'Mode jadwal berhasil diubah');
    },
    /**
     * POST /api/v1/devices/:deviceId/actuator/pump
     * { on: boolean }
     */
    controlPump: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const isOn = req.body.state !== undefined
            ? req.body.state === 'ON' || req.body.state === true || req.body.state === 1
            : Boolean(req.body.on === true || req.body.on === 'true' || req.body.on === 1);
        const pumpActuator = device.actuators.find((a) => a.type === 'PUMP' || a.name.toLowerCase().includes('pump'));
        if (pumpActuator) {
            await prismaConfig_1.prisma.actuator.update({
                where: { id: pumpActuator.id },
                data: {
                    state: isOn ? client_1.ActuatorState.ON : client_1.ActuatorState.OFF,
                    lastChangedAt: new Date(),
                },
            });
            await prismaConfig_1.prisma.controlLog.create({
                data: {
                    deviceId: device.id,
                    actuatorId: pumpActuator.id,
                    userId: req.user?.id ?? null,
                    action: isOn ? client_1.ControlAction.TURN_ON : client_1.ControlAction.TURN_OFF,
                    source: client_1.ControlSource.MOBILE_APP,
                    mode: device.controlMode,
                    success: true,
                    message: `Pompa diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
                },
            });
        }
        const topic = `${device.serialNumber}/cmd/actuator/pump`;
        const payload = { pump: isOn ? 1 : 0, on: isOn, state: isOn ? 'ON' : 'OFF' };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished, status: isOn ? 'ON' : 'OFF' }, `Pompa berhasil diubah menjadi ${isOn ? 'ON' : 'OFF'}`);
    },
    /**
     * POST /api/v1/devices/:deviceId/actuator/fan
     * { on: boolean } or { state: "ON"|"OFF" }
     */
    controlFan: async (req, res) => {
        const { deviceId } = req.params;
        const device = await (0, find_device_1.findDeviceOrFail)(deviceId, {
            userId: req.user?.id,
            userRole: req.user?.role,
        });
        const isOn = req.body.state !== undefined
            ? req.body.state === 'ON' || req.body.state === true || req.body.state === 1
            : Boolean(req.body.on === true || req.body.on === 'true' || req.body.on === 1);
        const fanActuator = device.actuators.find((a) => a.type === 'MISTING' ||
            a.type === 'FLOOR_WATERING' ||
            a.name.toLowerCase().includes('fan') ||
            a.name.toLowerCase().includes('mist'));
        if (fanActuator) {
            await prismaConfig_1.prisma.actuator.update({
                where: { id: fanActuator.id },
                data: {
                    state: isOn ? client_1.ActuatorState.ON : client_1.ActuatorState.OFF,
                    lastChangedAt: new Date(),
                },
            });
            await prismaConfig_1.prisma.controlLog.create({
                data: {
                    deviceId: device.id,
                    actuatorId: fanActuator.id,
                    userId: req.user?.id ?? null,
                    action: isOn ? client_1.ControlAction.TURN_ON : client_1.ControlAction.TURN_OFF,
                    source: client_1.ControlSource.MOBILE_APP,
                    mode: device.controlMode,
                    success: true,
                    message: `Pengabutan/Fan diubah menjadi ${isOn ? 'ON' : 'OFF'}`,
                },
            });
        }
        const topic = `${device.serialNumber}/cmd/actuator/fan`;
        const payload = { fan: isOn ? 1 : 0, on: isOn };
        const mqttPublished = mqtt_service_1.mqttService.publish(topic, payload);
        api_response_1.ApiResponse.success(res, { topic, payload, mqttPublished, status: isOn ? 'ON' : 'OFF' }, `Fan/Pengabutan berhasil diubah menjadi ${isOn ? 'ON' : 'OFF'}`);
    },
};
//# sourceMappingURL=index.js.map