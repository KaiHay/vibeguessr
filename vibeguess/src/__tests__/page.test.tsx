import { test, expect } from 'vitest';


import { pointCalc } from "../app/_components/functions/distanceCalcs";

test("Point Calc Test", () => {
  const [close, _] = pointCalc([1, 1], [1.01, 1.01])
  const [med, ___] = pointCalc([1, 1], [2, 2])
  const [far, __] = pointCalc([1, 1], [50, 50])

  expect(close).toBeGreaterThan(med);
  expect(med).toBeGreaterThan(far);
});