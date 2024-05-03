const gradeToLetter = require("./gradeToLetter");

describe("gradeToLetter", () => {
  // Test for valid inputs
  test.each([
    [95, "A"],
    [85, "B"],
    [75, "C"],
    [65, "D"],
    [55, "F"],
    [90, "A"],
    [80, "B"],
    [70, "C"],
    [60, "D"],
    [59, "F"],
    [0, "F"],
    [100, "A"]
  ])('should return %s for a score of %d', (score, expectedGrade) => {
    expect(gradeToLetter(score)).toBe(expectedGrade);
  });

  // Test case for exact boundary values
  test.each([
    [90, "A"],
    [80, "B"],
    [70, "C"],
    [60, "D"]
  ])('should return %s for the exact boundary value %d', (score, expectedGrade) => {
    expect(gradeToLetter(score)).toBe(expectedGrade);
  });

  // Test cases for the invalid inputs
  test.each([
    ["a"],
    [null],
    [undefined],
    [{}],
    [[]],
    [NaN]
  ])('should return an error message for non-numeric input %s', (input) => {
    expect(gradeToLetter(input)).toBe("Invalid input. Please provide a number.");
  });

  // Test cases for out-of-bound numeric inputs
  test.each([
    [-1],
    [101]
  ])('should return an error message for out-of-bound numeric input %d', (input) => {
    expect(gradeToLetter(input)).toBe("Invalid input. Please provide a number.");
  });
});