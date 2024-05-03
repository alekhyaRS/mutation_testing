const bmi = require('./bmi');

// Test cases for valid inputs
describe('BMI Calculator', () => {
  // Test case for valid inputs
  test('Calculates BMI correctly for valid inputs', () => {
    // Test with weight in pounds, height in feet and inches
    expect(bmi(150, 5, 9)).toEqual(22.15); // Expected BMI: 22.15
  });

  // Test cases for invalid inputs
  test('Returns -1 for invalid input types', () => {
    // Test with invalid input types (string instead of number)
    expect(bmi('not a number', 5, 9)).toEqual(-1);
    // Test with invalid input types (string instead of number)
    expect(bmi(150, 'not a number', 9)).toEqual(-1);
    // Test with invalid input types (string instead of number)
    expect(bmi(150, 5, 'not a number')).toEqual(-1);
  });

  // 0 infeasible decision point
  test('Returns -2 for invalid input types', () => {
    
    expect(bmi(0, 5, 6)).toEqual(-2);
    
    expect(bmi(160, 0, 0)).toEqual(-2);
    
  });

  test('Returns -2 for infeasible decision point (negative weight in pounds)', () => {
    // Test with negative weight in pounds
    expect(bmi(-150, 5, 9)).toEqual(-2);
  });
});