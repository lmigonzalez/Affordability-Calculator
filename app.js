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
const result = document.getElementById('result');

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
  // console.log(monthlyIncomeAfterExpense);
  // console.log(monthlyIncomeAfterExpense * 0.36);

  monthlyPaymentInput.value =
    monthlyIncomeAfterExpense * (debtToIncomeInput.value / 100);
  // console.log(monthlyPaymentInput.value);

  monthlyPaymentResult.textContent = monthlyPaymentInput.value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  debtTOIncomeRatio.textContent = debtToIncomeInput.value;
  
  const annualIncome = annualIncomeInput.value
  const monthlyDebts = monthlyDebtsInput.value
  const downPayment = downPaymentInput.value
  const interestRate = interestRateInput.value
  const loanTermInMonths = loanTermInput.value
  const propertyTaxRate = propertyTaxInput.value
  const homeInsurance = OMIIncludeInput.value
  const hoaDues = hOADuesInput.value  
  const dti = debtToIncomeInput.value;
  
  const monthlyIncome = annualIncome / 12;  

  const monthlyMortagePlusTaxPayment = monthlyIncome * dti / 100 - monthlyDebts;
  console.log(monthlyMortagePlusTaxPayment)
  const monthlyInterestRate = interestRate / 1200;  
  console.log(downPayment*propertyTaxRate/1200)
  const propertyPrice =
    ( monthlyMortagePlusTaxPayment / (        
        ((monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
          (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1) + propertyTaxRate/1200)))  
  
  
  const finalPrice = propertyPrice + downPayment - (homeInsurance/12 + hoaDues)*loanTermInMonths ; 
  
  result.value = finalPrice;
 
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
}

const toggleForm = () => {
  console.log('hello');
  document.getElementById('advancedForm').classList.toggle('showAdvanceForm');
};
