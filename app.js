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
  let debtToIncome = parseFloat(debtToIncomeInput.value);
  let interestRate = parseFloat(interestRateInput.value);
  let loanTerm = parseFloat(loanTermInput.value);

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
 
  const interestRateDecimalMonthly = interestRate / 1200 ;  

  // Calculate the maximum affordable mortgage payment
  const maxMortgagePayment = (monthlyIncome) * debtToIncome/100;

  // Calculate the maximum affordable home price  
  const monthlyMortagePayment = maxMortgagePayment - monthlyDebts;  

  const propertyPrice =
    (monthlyMortagePayment / (amortizedonstant(interestRateDecimalMonthly, loanTerm)))
  
  
  const homePrice = propertyPrice + downPayment;

  document.getElementById('result').textContent = parseInt(homePrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function amortizedonstant(interestRate, loanTermInMonths) {
  const [num, decimals] = toBigInt(interestRate);  
  const pot = bigIntToNumber((1n * (10n ** BigInt(decimals)) + num) ** BigInt(loanTermInMonths),decimals*loanTermInMonths)
  
  let result = interestRate / (1 - 1/pot);
  
  return result;
}


function toBigInt(numToConvert) {
  let num = numToConvert;
  let decimals = 0;
  
  while (num !== Math.trunc(num)) {    
    num = num*10
    decimals = decimals + 1;
  }
  return [BigInt(num),decimals]
}

function bigIntToNumber(numToConvert, decimals) {  
  const num = BigInt(numToConvert).toString().split('')
  num.splice(-decimals, 0, '.')
  return Number(num.reduce((acc,curr)=>acc+=curr))
}


console.log(60000 / 12)