import { describe, expect, it } from "vitest";
import calculateTax from "./tax-calculator";

describe("tax to pay for income", () => {
  it("10000 to be 1050", () => {
    expect(calculateTax(10000)).toBe(1050);
  });
  it("35000 to be 5033", () => {
    expect(calculateTax(35000)).toBe(5033);
  });
  it("100000 to be 22877.50", () => {
    expect(calculateTax(100000)).toBe(22877.5);
  });
  it("220000 to be 64877.50", () => {
    expect(calculateTax(220000)).toBe(64877.5);
  });
});
