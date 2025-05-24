/**
 * Compute the greatest common divisor (GCD) of two integers iteratively.
 * @param a
 * @param b
 * @returns GCD of |a| and |b|
 */
export function gcd(a: number, b: number): number {
  let x = Math.abs(a),
    y = Math.abs(b);
  while (y !== 0) {
    const r = x % y;
    x = y;
    y = r;
  }
  return x;
}
