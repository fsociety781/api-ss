import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  MUSHROOM_PRESETS,
  getMushroomPreset,
  isValidPresetKey,
} from '../../utils/mushroom-presets';

describe('🍄 Mushroom Presets Unit Tests', () => {
  it('harus memuat preset varietas jamur utama', () => {
    assert.ok(MUSHROOM_PRESETS.tiram_putih, 'Preset tiram_putih harus ada');
    assert.ok(MUSHROOM_PRESETS.shiitake, 'Preset shiitake harus ada');
    assert.ok(MUSHROOM_PRESETS.jamur_kuping, 'Preset jamur_kuping harus ada');
    assert.ok(MUSHROOM_PRESETS.kancing, 'Preset kancing harus ada');
  });

  it('setiap preset harus memiliki rentang suhu & kelembaban yang valid secara agronomi', () => {
    for (const [key, preset] of Object.entries(MUSHROOM_PRESETS)) {
      assert.ok(
        preset.minTemperature < preset.maxTemperature,
        `[${key}] minTemperature (${preset.minTemperature}) harus lebih kecil dari maxTemperature (${preset.maxTemperature})`,
      );
      assert.ok(
        preset.minHumidity < preset.maxHumidity,
        `[${key}] minHumidity (${preset.minHumidity}) harus lebih kecil dari maxHumidity (${preset.maxHumidity})`,
      );
      assert.ok(
        preset.minHumidity >= 50 && preset.maxHumidity <= 100,
        `[${key}] Kelembaban harus dalam rentang 50-100%`,
      );
    }
  });

  it('getMushroomPreset harus mengembalikan preset yang sesuai dengan key', () => {
    const preset = getMushroomPreset('tiram_putih');
    assert.strictEqual(preset.id, 'tiram_putih');
    assert.strictEqual(preset.name, 'Jamur Tiram Putih');
  });

  it('getMushroomPreset harus mengembalikan default jika key tidak dikenali', () => {
    const preset = getMushroomPreset('jamur_unknown_xyz');
    assert.ok(preset, 'Harus mengembalikan fallback');
    assert.strictEqual(preset.id, 'tiram_putih');
  });

  it('isValidPresetKey harus memvalidasi key secara akurat', () => {
    assert.strictEqual(isValidPresetKey('shiitake'), true);
    assert.strictEqual(isValidPresetKey('tiram_putih'), true);
    assert.strictEqual(isValidPresetKey('jamur_palsu'), false);
  });
});

