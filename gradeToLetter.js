module.exports = function gradeToLetter(score) {
  // Check for the non-number or NaN (NaN is typeof number so needs explicit check)
  
  if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 100) {
    return 'Invalid input. Please provide a number.';
  }

  if (score >= 90) {
    return "A";
  }
  else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};