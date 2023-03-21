// Function to calculate the maximum affordable home price
function calculateAffordability(
  annualIncome,
  monthlyDebts,
  downPayment,
  debtToIncome,
  interestRate,
  loanTerm
) {
  const monthlyIncome = annualIncome / 12;
  const monthlyDebtRatio = monthlyDebts / monthlyIncome;
  const mortgagePaymentRatio = debtToIncome - monthlyDebtRatio;
  const interestRateDecimal = interestRate / 100 / 12;
  const loanTermMonths = loanTerm * 12;

  // Calculate the maximum affordable mortgage payment
  const maxMortgagePayment = monthlyIncome * mortgagePaymentRatio;

  // Calculate the maximum affordable home price
  const loanAmount =
    (maxMortgagePayment / interestRateDecimal) *
    (1 - Math.pow(1 + interestRateDecimal, -loanTermMonths));
  const homePrice = loanAmount + downPayment;

  return homePrice;
}

const annualIncome = 70000;
const monthlyDebts = 250;
const downPayment = 20000;
const debtToIncome = 0.36;
const interestRate = 4.176;
const loanTerm = 36;

console.log(
  annualIncome,
  monthlyDebts,
  downPayment,
  debtToIncome,
  interestRate,
  loanTerm
);

const maxHomePrice = calculateAffordability(
  annualIncome,
  monthlyDebts,
  downPayment,
  debtToIncome,
  interestRate,
  loanTerm
);
console.log('Maximum affordable home price: $' + maxHomePrice.toFixed(2));
