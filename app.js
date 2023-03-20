//simple
const annualIncomeInput = document.getElementById('annualIncome');
const monthlyDebtsInput = document.getElementById('monthlyDebts');
const downPaymentInput = document.getElementById('downPayment');
//advanced
const debtToIncomeInput = document.getElementById('debtToIncome');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');
const taxesIncludeInput = document.getElementById('taxesInclude');
const propertyTaxInput = document.getElementById('propertyTax');
const OMIIncludeInput = document.getElementById('OMIinclude');
const hOADuesInput = document.getElementById('hOADues');

const monthlyPaymentInput = document.getElementById('monthlyPayment');

const monthlyPaymentResult = document.getElementById('monthlyPaymentResult');
const debtTOIncomeRatio = document.getElementById('debtTOIncomeRatio');

const calculateAffordability = () => {
  // monthly income after expenses
  let monthlyIncomeAfterExpense = parseInt(
    annualIncomeInput.value / 12 - monthlyDebtsInput.value
  );

  // slide bar min, max and value
  monthlyPaymentInput.min = 0;
  monthlyPaymentInput.max = parseInt(monthlyIncomeAfterExpense * 0.43);
  monthlyPaymentInput.value = monthlyIncomeAfterExpense * 0.36;
  console.log(monthlyIncomeAfterExpense);
  // console.log(monthlyIncomeAfterExpense * 0.36);

  monthlyPaymentInput.value =
    monthlyIncomeAfterExpense * (debtToIncomeInput.value / 100);
  // console.log(monthlyPaymentInput.value);

  monthlyPaymentResult.textContent = monthlyPaymentInput.value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  debtTOIncomeRatio.textContent = debtToIncomeInput.value;
};

function syncPercentWithBar() {
  let monthlyIncomeAfterExpense = parseInt(
    annualIncomeInput.value / 12 - monthlyDebtsInput.value
  );
  monthlyPaymentInput.value = parseInt(
    monthlyIncomeAfterExpense * (debtToIncomeInput.value / 100)
  );
  console.log(
    parseInt(monthlyIncomeAfterExpense * (debtToIncomeInput.value / 100))
  );
}

function syncBarWithPercent() {
  let monthlyIncomeAfterExpense = parseInt(
    annualIncomeInput.value / 12 - monthlyDebtsInput.value
  );
  debtToIncomeInput.value = parseInt(
    (monthlyPaymentInput.value / monthlyIncomeAfterExpense) * 100
  );
}

const toggleForm = () => {
  console.log('hello');
  document.getElementById('advancedForm').classList.toggle('showAdvanceForm');
};
