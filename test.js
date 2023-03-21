<<<<<<< HEAD
export function testSample() {
  return 'Walter White';
}

const annualIncome = 100000;
const monthlyDebts = 1000;
const downPayment = 50000;
const interestRate = 0.06409;
const loanTermInMonths = 360;
const propertyTaxRate = 0.012;
const homeInsurance = 800;
const hoaDues = 0;
const monthlyPayment = 1982;

function monthlyPayForHouse(annualIncome, dti, ...monthlyDebs) {
  return (
    ((annualIncome / 12) * dti) / 100 -
    monthlyDebs.reduce((acc, curr) => acc + curr)
  );
}

function totalPayment(monthlyPayForHouse, amortizationConstant) {
  return amortizationConstant * monthlyPayForHouse;
}

function amortizationConstant(interestRate, loanTermInMonths) {
  return (
    (1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate / 100)
  );
=======
  const annualIncome = 100000;
  const monthlyDebts = 250;
  const downPayment = 20000;
  const dti = 36;
  const interestRate = 0.01;
  const loanTermInMonths = 360;
  const propertyTaxRate = 0.012;
  const homeInsurance = 800;
  const hoaDues = 0;
  const monthlyPayment = 1982;
  
function monthlyPayForHouse(annualIncome, dti, ...monthlyDebs) {
    return (annualIncome / 12)*dti/100// - monthlyDebs.reduce((acc,curr)=>acc+curr);
}
console.log(monthlyPayForHouse(annualIncome, dti, monthlyDebts, homeInsurance / 12, hoaDues))
function amortizationConstant(interestRate,loanTermInMonths) {
    return  interestRate*Math.pow(1 + interestRate, loanTermInMonths)/(Math.pow(1 + interestRate, loanTermInMonths)-1) ;
>>>>>>> refs/remotes/origin/main
}

console.log(amortizationConstant(interestRate, loanTermInMonths))

function debtInterestTotal(monthlyPayForHouse, amortizationConstant) {
    return monthlyPayForHouse/(amortizationConstant);
}
console.log(debtInterestTotal(monthlyPayForHouse(annualIncome, dti, monthlyDebts, homeInsurance / 12, hoaDues),amortizationConstant(interestRate, loanTermInMonths)))

function taxPaymentPerMounth(debtInterestTotal, propertyTaxRate, downPayment) {
  return (debtInterestTotal + downPayment) * (propertyTaxRate / 1200);
}

<<<<<<< HEAD
function canAfford(
  totalPayment,
  taxPaymentForMounth,
  downPayment,
  loanTermInMonths
) {
  return totalPayment + downPayment - taxPaymentForMounth * loanTermInMonths;
}

canAfford(
  totalPayment(
    monthlyPayForHouse(annualIncome, monthlyDebts, homeInsurance / 12, hoaDues),
    amortizationConstant(interestRate, loanTermInMonths)
  ),
  taxPaymentForMounth(
    totalPayment(
      monthlyPayForHouse(
        annualIncome,
        monthlyDebts,
        homeInsurance / 12,
        hoaDues
      ),
      amortizationConstant(interestRate, loanTermInMonths)
    ),
    propertyTaxRate,
    downPayment
  ),
  downPayment,
  loanTermInMonths
);
=======
function canAfford(debtInterestTotal,taxPaymentForMounth,downPayment,loanTermInMonths) {
  return debtInterestTotal + downPayment - taxPaymentForMounth*loanTermInMonths ;
}

console.log(canAfford(debtInterestTotal(monthlyPayForHouse(annualIncome, monthlyDebts,dti, homeInsurance / 12, hoaDues),
  amortizationConstant(interestRate, loanTermInMonths)),
  taxPaymentForMounth(debtInterestTotal(monthlyPayForHouse(annualIncome, monthlyDebts, homeInsurance / 12, hoaDues),
      amortizationConstant(interestRate, loanTermInMonths)), propertyTaxRate, downPayment),  
  downPayment,loanTermInMonths).toFixed(2));

>>>>>>> refs/remotes/origin/main

function calculatAffordability() {
  // Input parameters
  const annualIncome = 70000;
  const monthlyDebts = 250
  const downPayment = 20000;
  const interestRate = 6.336;
  const dti = 36;
  const loanTermInMonths = 360;
  const propertyTaxRate = 1.2;
  const homeInsurance = 800;
  const hoaDues = 0;
  

  const monthlyIncome = annualIncome / 12;  

  const monthlyMortagePlusTaxPayment = monthlyIncome * dti / 100 - monthlyDebts;
console.log(monthlyMortagePlusTaxPayment)
  const monthlyInterestRate = interestRate / 1200;  
console.log(downPayment*propertyTaxRate/1200)
  const propertyPrice =
<<<<<<< HEAD
    downPayment +
    ((monthlyPayment -
      (propertyTaxRate * downPayment) / 12 -
      homeInsurance -
      hoaDues) *
      (1 - Math.pow(1 + interestRate, loanTermInMonths))) /
      (interestRate / 100);

  const propertyTax = (propertyTaxRate * propertyPrice) / 12;
  // const totalMonthlyPayment =
  //   monthlyPayment + propertyTax + homeInsurance + hoaDues;
  const maximumAffordablePrice =
    (maximumMonthlyPayment - propertyTax - homeInsurance - hoaDues) /
      ((monthlyInterestRate *
        (1 - Math.pow(1 + interestRate, loanTermInMonths))) /
        (interestRate / 100)) +
    downPayment;

  console.log('Maximum affordable price:', maximumAffordablePrice.toFixed(2));
=======
    ( monthlyMortagePlusTaxPayment / (        
        ((monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
          (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1) + propertyTaxRate/1200)))  
  
  
  const finalPrice = propertyPrice + downPayment - (homeInsurance/12 + hoaDues)*loanTermInMonths ; 
  
  console.log(finalPrice)
 
  
>>>>>>> refs/remotes/origin/main
}
