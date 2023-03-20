  const annualIncome = 100000;
  const monthlyDebts = 1000;
  const downPayment = 50000;
  const interestRate = 0.06409;
  const loanTermInMonths = 360;
  const propertyTaxRate = 0.012;
  const homeInsurance = 800;
  const hoaDues = 0;
  const monthlyPayment = 1982;
  
function monthlyPayForHouse(annualIncome: number, dti: number, ...monthlyDebs: number[]) {
    return (annualIncome / 12)*dti/100 - monthlyDebs.reduce((acc,curr)=>acc+curr);
}

function totalPayment(monthlyPayForHouse: number, amortizationConstant:number) {
    return (amortizationConstant) * monthlyPayForHouse;
}

function amortizationConstant(interestRate:number,loanTermInMonths:number) {
    return (1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate/100);
}

function taxPaymentForMounth(totalPayment: number, propertyTaxRate: number, downPayment: number) {
  return (totalPayment + downPayment) * (propertyTaxRate / 1200);
}

function canAfford(totalPayment:number,taxPaymentForMounth:number,downPayment:number,loanTermInMonths:number) {
  return totalPayment + downPayment - taxPaymentForMounth*loanTermInMonths ;
}

canAfford(totalPayment(monthlyPayForHouse(annualIncome, monthlyDebts, homeInsurance / 12, hoaDues),
  amortizationConstant(interestRate, loanTermInMonths)),
  taxPaymentForMounth(totalPayment(monthlyPayForHouse(annualIncome, monthlyDebts, homeInsurance / 12, hoaDues),
      amortizationConstant(interestRate, loanTermInMonths)), propertyTaxRate, downPayment),
  
  downPayment,loanTermInMonths);


function calculatAffordability() {
  // Input parameters
  const annualIncome = 100000;
  const monthlyDebts = 1000;
  const downPayment = 50000;
  const interestRate = 0.06409;
  const loanTermInMonths = 360;
  const propertyTaxRate = 0.012;
  const homeInsurance = 800;
  const hoaDues = 0;
  const monthlyPayment = 1982;

  const monthlyIncome = annualIncome / 12;
  // const monthlyDebtToIncomeRatio = (monthlyDebts / monthlyIncome) * 100;
  const maximumAllowedDebtToIncomeRatio = 43;
  const maximumMonthlyPayment =
    monthlyIncome * (maximumAllowedDebtToIncomeRatio / 100) - monthlyDebts;

  const monthlyInterestRate = interestRate / 12;
  const propertyPrice =
    (downPayment +
      (monthlyPayment -
        (propertyTaxRate * downPayment) / 12 -
        homeInsurance -
        hoaDues)*(1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate/100) 
    )
       
  const propertyTax = (propertyTaxRate * propertyPrice) / 12;
  // const totalMonthlyPayment =
  //   monthlyPayment + propertyTax + homeInsurance + hoaDues;
  const maximumAffordablePrice =
    (maximumMonthlyPayment - propertyTax - homeInsurance - hoaDues) /
      (monthlyInterestRate *
        (1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate/100))+
    downPayment;

  console.log('Maximum affordable price:', maximumAffordablePrice.toFixed(2));
}

console.log(calculateAffordability());