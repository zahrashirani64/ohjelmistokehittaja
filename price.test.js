// price.test.js
import { calculateDiscountedPrice } from "./price.js";
  
describe("calculateDiscountedPrice", () => {
  test("calculates a 20 percent discount from a price of 100 euros", () => {
    const result = calculateDiscountedPrice(100, 20);

    expect(result).toBe(80);
  });

  test("returns the original price when the discount is 0 percent", () => {
    const result = calculateDiscountedPrice(49.9, 0);

    expect(result).toBe(49.9);
  });

  test("returns zero when the discount is 100 percent", () => {
    const result = calculateDiscountedPrice(25, 100);

    expect(result).toBe(0);
  });
});