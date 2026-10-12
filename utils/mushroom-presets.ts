export interface MushroomPreset {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  minTemperature: number;
  maxTemperature: number;
  minHumidity: number;
  maxHumidity: number;
  timerDurationSeconds: number;
  telemetryIntervalSec: number;
}

export const MUSHROOM_PRESETS: Record<string, MushroomPreset> = {
  tiram_putih: {
    id: 'tiram_putih',
    name: 'Jamur Tiram Putih',
    scientificName: 'Pleurotus ostreatus',
    description:
      'Suhu optimal 24°C - 28°C dengan kelembapan tinggi 80% - 95%. Membutuhkan sirkulasi udara dan pengabutan teratur.',
    minTemperature: 24.0,
    maxTemperature: 28.0,
    minHumidity: 80.0,
    maxHumidity: 95.0,
    timerDurationSeconds: 300, // 5 menit
    telemetryIntervalSec: 60,
  },
  tiram_cokelat: {
    id: 'tiram_cokelat',
    name: 'Jamur Tiram Cokelat',
    scientificName: 'Pleurotus cystidiosus',
    description:
      'Lebih toleran terhadap suhu hangat 26°C - 30°C dengan kelembapan 80% - 90%.',
    minTemperature: 26.0,
    maxTemperature: 30.0,
    minHumidity: 80.0,
    maxHumidity: 90.0,
    timerDurationSeconds: 300,
    telemetryIntervalSec: 60,
  },
  jamur_kuping: {
    id: 'jamur_kuping',
    name: 'Jamur Kuping',
    scientificName: 'Auricularia auricula-judae',
    description:
      'Suhu ideal 26°C - 32°C dengan kelembapan 85% - 95%. Butuh penyiraman lantai dan pengabutan konsisten.',
    minTemperature: 26.0,
    maxTemperature: 32.0,
    minHumidity: 85.0,
    maxHumidity: 95.0,
    timerDurationSeconds: 420, // 7 menit
    telemetryIntervalSec: 60,
  },
  shiitake: {
    id: 'shiitake',
    name: 'Jamur Shiitake',
    scientificName: 'Lentinula edodes',
    description:
      'Membutuhkan suhu sejuk 18°C - 24°C dan kelembapan 80% - 90% pada fase pembentukan badan buah.',
    minTemperature: 18.0,
    maxTemperature: 24.0,
    minHumidity: 80.0,
    maxHumidity: 90.0,
    timerDurationSeconds: 240, // 4 menit
    telemetryIntervalSec: 60,
  },
  kancing: {
    id: 'kancing',
    name: 'Jamur Kancing / Champignon',
    scientificName: 'Agaricus bisporus',
    description:
      'Suhu dingin 16°C - 20°C dengan kelembapan 85% - 92%. Membutuhkan kontrol suhu presisi.',
    minTemperature: 16.0,
    maxTemperature: 20.0,
    minHumidity: 85.0,
    maxHumidity: 92.0,
    timerDurationSeconds: 180, // 3 menit
    telemetryIntervalSec: 60,
  },
};

export function isValidPresetKey(key: string): boolean {
  return key in MUSHROOM_PRESETS;
}

export function getMushroomPreset(key: string): MushroomPreset {
  if (isValidPresetKey(key)) {
    return MUSHROOM_PRESETS[key];
  }
  return MUSHROOM_PRESETS.tiram_putih;
}

