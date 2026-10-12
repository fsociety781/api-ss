"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapApp = bootstrapApp;
const prismaConfig_1 = require("../bin/prismaConfig");
const ensure_default_technician_1 = require("./ensure-default-technician");
const mqtt_service_1 = require("../services/mqtt.service");
async function bootstrapApp() {
    await prismaConfig_1.prisma.$connect();
    await (0, ensure_default_technician_1.ensureDefaultTechnician)();
    mqtt_service_1.mqttService.initialize();
}
//# sourceMappingURL=bootstrap-app.js.map