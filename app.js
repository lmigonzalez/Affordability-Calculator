//simple
const annualIncomeInput = document.getElementById('annualIncome');
const monthlyDebtsInput = document.getElementById('monthlyDebts');
const downPaymentInput = document.getElementById('downPayment');

//advanced
const debtToIncomeInput = document.getElementById('debtToIncome');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');

// const taxesIncludeInput = document.getElementById('taxesInclude');
// const propertyTaxInput = document.getElementById('propertyTax');
// const OMIIncludeInput = document.getElementById('OMIinclude');
// const hOADuesInput = document.getElementById('hOADues');

const monthlyPaymentInput = document.getElementById('monthlyPayment');
const result = document.getElementById('result');

const monthlyPaymentResult = document.getElementById('monthlyPaymentResult');
const debtTOIncomeRatio = document.getElementById('debtTOIncomeRatio');

const calculateAffordability = () => {
  let annualIncome = parseFloat(annualIncomeInput.value);
  let monthlyDebts = parseFloat(monthlyDebtsInput.value);
  let downPayment = parseFloat(downPaymentInput.value);
  let debtToIncome = parseFloat(debtToIncomeInput.value) / 100;
  let interestRate = parseFloat(interestRateInput.value);
  let loanTerm = parseFloat(loanTermInput.value) / 10;

  //   console.log(
  //     annualIncome,
  //     monthlyDebts,
  //     downPayment,
  //     debtToIncome,
  //     interestRate,
  //     loanTerm
  //   );

  calculateResult(
    annualIncome,
    monthlyDebts,
    downPayment,
    debtToIncome,
    interestRate,
    loanTerm
  );
};

function syncPercentWithBar() {
  let monthlyIncomeAfterExpense = parseInt(
    annualIncomeInput.value / 12 - monthlyDebtsInput.value
  );
  monthlyPaymentInput.value = parseInt(
    monthlyIncomeAfterExpense * (debtToIncomeInput.value / 100)
  );

  monthlyPaymentResult.textContent = monthlyPaymentInput.value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  debtTOIncomeRatio.textContent = debtToIncomeInput.value;
  calculateAffordability();
}

function syncBarWithPercent() {
  let monthlyIncomeAfterExpense = parseInt(
    annualIncomeInput.value / 12 - monthlyDebtsInput.value
  );
  debtToIncomeInput.value = parseInt(
    (monthlyPaymentInput.value / monthlyIncomeAfterExpense) * 100
  );
  monthlyPaymentResult.textContent = monthlyPaymentInput.value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  debtTOIncomeRatio.textContent = parseInt(
    (monthlyPaymentInput.value / monthlyIncomeAfterExpense) * 100
  );
  calculateAffordability();
}

const toggleForm = () => {
  console.log('hello');
  document.getElementById('advancedForm').classList.toggle('showAdvanceForm');
};

function toggleAnnualIncome() {
	console.log('toggle');
	
  document.getElementById('annualIncomePopup').classList.toggle('popup-off');
}

function debtToIncomePopup() {
  document.getElementById('debtToIncomePopup').classList.toggle('popup-off');
}
function interestRatePopup() {
  document.getElementById('interestRatePopup').classList.toggle('popup-off');
}

function loanTermPopup(){
	document.getElementById('loanTermPopup').classList.toggle('popup-off');
	
}

function calculateResult(
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

  document.getElementById('result').textContent = parseInt(homePrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
