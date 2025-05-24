// Кеш для массивов допустимых знаменателей
const denominatorsCache = new Map<number, number[]>();

/**
 * Возвращает отсортированный список знаменателей вида 2^k и 3·2^k для k=0..nMax.
 */
function getDenominators(nMax: number = 5): number[] {
  if (denominatorsCache.has(nMax)) {
    return denominatorsCache.get(nMax)!;
  }
  const set = new Set<number>();
  for (let k = 0; k <= nMax; k++) {
    set.add(1 << k); // 2^k
    set.add((1 << k) * 3); // 3·2^k
  }
  const arr = Array.from(set).sort((a, b) => a - b);
  denominatorsCache.set(nMax, arr);
  return arr;
}

/**
 * Квантует x до ближайшего допустимого значения вида j/b, где
 * b ∈ {2^k, 3·2^k} for k=0..nMax, j = round(x * b).
 *
 * @param x значение >= 0
 * @param nMax максимальный показатель k (по умолчанию 5)
 * @returns ближайшее к x квантованное значение
 */
export function quantizeNearest(x: number, nMax: number = 5): number {
  const dens = getDenominators(nMax);
  let best = 0;
  let bestErr = Infinity;

  for (const b of dens) {
    const j = Math.round(x * b);
    const y = j / b;
    const err = Math.abs(x - y);
    if (err < bestErr) {
      bestErr = err;
      best = y;
      if (err === 0) break; // точное совпадение
    }
  }

  return best;
}
