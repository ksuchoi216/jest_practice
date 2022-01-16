const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesar = require("./caesar");
const analyzeArray = require("./analyzeArray");

// console.log(calculator);
describe("total test", () => {
  test("capitalize word", () => {
    expect(capitalize("apple")).toBe("Apple");
  });

  test("reverse word", () => {
    expect(reverseString("check")).toBe("kcehc");
  });

  test("calculator add", () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  test("calculator subtract", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
  test("calculator divide", () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });
  test("calculator multiply", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test("works with single letters", () => {
    expect(caesar("A", 1)).toBe("B");
  });
  test("works with words", () => {
    expect(caesar("Aaa", 1)).toBe("Bbb");
  });
  test("works with phrases", () => {
    expect(caesar("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });
  test("works with negative shift", () => {
    expect(caesar("Mjqqt, Btwqi!", -5)).toBe("Hello, World!");
  });
  test("wraps", () => {
    expect(caesar("Z", 1)).toBe("A");
  });
  test("works with large shift factors", () => {
    expect(caesar("Hello, World!", 75)).toBe("Ebiil, Tloia!");
  });
  test("works with large negative shift factors", () => {
    expect(caesar("Hello, World!", -29)).toBe("Ebiil, Tloia!");
  });

  test("analyzeArray", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
