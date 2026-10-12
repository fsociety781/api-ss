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
export declare const MUSHROOM_PRESETS: Record<string, MushroomPreset>;
export declare function isValidPresetKey(key: string): boolean;
export declare function getMushroomPreset(key: string): MushroomPreset;
//# sourceMappingURL=mushroom-presets.d.ts.map