"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
(0, node_test_1.describe)('📊 Harvest Analytics & Productivity Calculations', () => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    (0, node_test_1.it)('harus menghitung total bobot, pendapatan, rata-rata, dan hari panen puncak dengan tepat', () => {
        const startedAt = new Date('2026-05-01T00:00:00.000Z');
        const endedAt = new Date('2026-05-21T00:00:00.000Z');
        const baglogCount = 1000;
        const daysRunning = Math.max(1, Math.ceil((endedAt.getTime() - startedAt.getTime()) / MS_PER_DAY));
        strict_1.default.strictEqual(daysRunning, 20);
        const sampleHarvests = [
            {
                harvestedAt: new Date('2026-05-10T08:00:00.000Z'),
                weightKg: 15.5,
                pricePerKg: 18000,
            },
            {
                harvestedAt: new Date('2026-05-15T08:00:00.000Z'),
                weightKg: 25.0,
                pricePerKg: 20000,
            },
            {
                harvestedAt: new Date('2026-05-15T16:00:00.000Z'),
                weightKg: 10.0,
                pricePerKg: 20000,
            },
        ];
        let totalWeight = 0;
        let totalRevenue = 0;
        const dailyMap = new Map();
        for (const h of sampleHarvests) {
            totalWeight += h.weightKg;
            totalRevenue += h.weightKg * h.pricePerKg;
            const dayStr = h.harvestedAt.toISOString().split('T')[0];
            dailyMap.set(dayStr, (dailyMap.get(dayStr) || 0) + h.weightKg);
        }
        strict_1.default.strictEqual(totalWeight, 50.5);
        // 15.5 * 18000 + 25.0 * 20000 + 10.0 * 20000 = 279000 + 500000 + 200000 = 979000
        strict_1.default.strictEqual(totalRevenue, 979000);
        // Peak day calculation
        let peakDay = null;
        for (const [day, weight] of dailyMap.entries()) {
            if (!peakDay || weight > peakDay.weightKg) {
                peakDay = { date: day, weightKg: +weight.toFixed(2) };
            }
        }
        strict_1.default.ok(peakDay);
        strict_1.default.strictEqual(peakDay.date, '2026-05-15');
        strict_1.default.strictEqual(peakDay.weightKg, 35.0);
        // Productivity yield per baglog
        const yieldPerBaglog = +(totalWeight / baglogCount).toFixed(4);
        strict_1.default.strictEqual(yieldPerBaglog, 0.0505); // 50.5 gram per baglog
    });
});
//# sourceMappingURL=harvest-analytics.test.js.map