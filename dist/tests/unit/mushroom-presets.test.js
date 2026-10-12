"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const mushroom_presets_1 = require("../../utils/mushroom-presets");
(0, node_test_1.describe)('🍄 Mushroom Presets Unit Tests', () => {
    (0, node_test_1.it)('harus memuat preset varietas jamur utama', () => {
        strict_1.default.ok(mushroom_presets_1.MUSHROOM_PRESETS.tiram_putih, 'Preset tiram_putih harus ada');
        strict_1.default.ok(mushroom_presets_1.MUSHROOM_PRESETS.shiitake, 'Preset shiitake harus ada');
        strict_1.default.ok(mushroom_presets_1.MUSHROOM_PRESETS.jamur_kuping, 'Preset jamur_kuping harus ada');
        strict_1.default.ok(mushroom_presets_1.MUSHROOM_PRESETS.kancing, 'Preset kancing harus ada');
    });
    (0, node_test_1.it)('setiap preset harus memiliki rentang suhu & kelembaban yang valid secara agronomi', () => {
        for (const [key, preset] of Object.entries(mushroom_presets_1.MUSHROOM_PRESETS)) {
            strict_1.default.ok(preset.minTemperature < preset.maxTemperature, `[${key}] minTemperature (${preset.minTemperature}) harus lebih kecil dari maxTemperature (${preset.maxTemperature})`);
            strict_1.default.ok(preset.minHumidity < preset.maxHumidity, `[${key}] minHumidity (${preset.minHumidity}) harus lebih kecil dari maxHumidity (${preset.maxHumidity})`);
            strict_1.default.ok(preset.minHumidity >= 50 && preset.maxHumidity <= 100, `[${key}] Kelembaban harus dalam rentang 50-100%`);
        }
    });
    (0, node_test_1.it)('getMushroomPreset harus mengembalikan preset yang sesuai dengan key', () => {
        const preset = (0, mushroom_presets_1.getMushroomPreset)('tiram_putih');
        strict_1.default.strictEqual(preset.id, 'tiram_putih');
        strict_1.default.strictEqual(preset.name, 'Jamur Tiram Putih');
    });
    (0, node_test_1.it)('getMushroomPreset harus mengembalikan default jika key tidak dikenali', () => {
        const preset = (0, mushroom_presets_1.getMushroomPreset)('jamur_unknown_xyz');
        strict_1.default.ok(preset, 'Harus mengembalikan fallback');
        strict_1.default.strictEqual(preset.id, 'tiram_putih');
    });
    (0, node_test_1.it)('isValidPresetKey harus memvalidasi key secara akurat', () => {
        strict_1.default.strictEqual((0, mushroom_presets_1.isValidPresetKey)('shiitake'), true);
        strict_1.default.strictEqual((0, mushroom_presets_1.isValidPresetKey)('tiram_putih'), true);
        strict_1.default.strictEqual((0, mushroom_presets_1.isValidPresetKey)('jamur_palsu'), false);
    });
});
//# sourceMappingURL=mushroom-presets.test.js.map