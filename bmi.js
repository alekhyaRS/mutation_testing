function bmi(w_lbs, h_foot, h_inches) {
  // convert w to kg
  if (typeof w_lbs === 'number' && typeof h_foot === 'number' && typeof h_inches === 'number') {
    const w_kg = parseFloat(w_lbs / 2.205);
    const h_meter = ((h_foot * 12 + h_inches) * 2.54) / 100;
    // infeasible decision point
    if (w_kg <= 0 || h_meter <= 0 ) { 
      return -2;
    }
    return parseFloat((w_kg / (h_meter * h_meter)).toFixed(2));
  } else {
    return -1;
  }
}

module.exports = bmi;