import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('📊 Harvest Analytics & Productivity Calculations', () => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  it('harus menghitung total bobot, pendapatan, rata-rata, dan hari panen puncak dengan tepat', () => {
    const startedAt = new Date('2026-05-01T00:00:00.000Z');
    const endedAt = new Date('2026-05-21T00:00:00.000Z');
    const baglogCount = 1000;

    const daysRunning = Math.max(
      1,
      Math.ceil((endedAt.getTime() - startedAt.getTime()) / MS_PER_DAY),
    );
    assert.strictEqual(daysRunning, 20);

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
    const dailyMap = new Map<string, number>();

    for (const h of sampleHarvests) {
      totalWeight += h.weightKg;
      totalRevenue += h.weightKg * h.pricePerKg;

      const dayStr = h.harvestedAt.toISOString().split('T')[0];
      dailyMap.set(dayStr, (dailyMap.get(dayStr) || 0) + h.weightKg);
    }

    assert.strictEqual(totalWeight, 50.5);
    // 15.5 * 18000 + 25.0 * 20000 + 10.0 * 20000 = 279000 + 500000 + 200000 = 979000
    assert.strictEqual(totalRevenue, 979000);

    // Peak day calculation
    let peakDay: { date: string; weightKg: number } | null = null;
    for (const [day, weight] of dailyMap.entries()) {
      if (!peakDay || weight > peakDay.weightKg) {
        peakDay = { date: day, weightKg: +weight.toFixed(2) };
      }
    }

    assert.ok(peakDay);
    assert.strictEqual(peakDay.date, '2026-05-15');
    assert.strictEqual(peakDay.weightKg, 35.0);

    // Productivity yield per baglog
    const yieldPerBaglog = +(totalWeight / baglogCount).toFixed(4);
    assert.strictEqual(yieldPerBaglog, 0.0505); // 50.5 gram per baglog
  });
});

