function presentValue(pmt, r, n, fv = 0) {
  /**
   * Calculate the present value of an investment with periodic payments.
   *
   * pmt: Payment amount made each period
   * r: Interest rate per period
   * n: Total number of periods
   * fv: (Optional) Future value of the investment (default = 0)
   */
  let pv = pmt * ((1 - Math.pow(1 + r, -n)) / r) - fv / Math.pow(1 + r, n);
  return pv;
}

// so basically when the user inputs income and expenses You have to do income - expenses to find the pmt


//the r = interest that the user puts in. We can put some default value if they dont put in anything if we want

//the n = years


// 60000 annual income
// 1500 debts
// 4.5%
// 30 years

// amnd the number shoudl be $690,764