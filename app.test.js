const { add, subtract, multiply, divide } = require("./app");

test("addition", () => expect(add(2, 3)).toBe(5));
test("soustraction", () => expect(subtract(10, 4)).toBe(6));
test("multiplication", () => expect(multiply(3, 4)).toBe(12));
test("division", () => expect(divide(10, 2)).toBe(5));
test("division par zero", () =>
  expect(() => divide(5, 0)).toThrow("Division par zéro"));
