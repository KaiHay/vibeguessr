import { test, expect } from 'vitest';


import { render, screen, within } from "@testing-library/react";
import { pointCalc } from "../app/_components/functions/distanceCalcs";

test("Point Calc Test", () => {
  const close = pointCalc([1, 1], [1.01, 1.01])
  const med = pointCalc([1, 1], [2, 2])
  const far = pointCalc([1, 1], [50, 50])

  expect(close).toBeGreaterThan(med);
  expect(med).toBeGreaterThan(far);
});