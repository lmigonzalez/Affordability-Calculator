//this has to change

let isActive = false

//simple
const annualIncomeInput = document.getElementById('annualIncome');
const maximumPaymentInput = document.getElementById('max-payment');
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

const dtiBar = document.getElementById('dtiBar');

// monthlyPaymentInput.max =
// parseInt(annualIncomeInput.value  - monthlyDebtsInput.value) * 0.43;
// monthlyPaymentInput.value =
//   (annualIncomeInput.value  - monthlyDebtsInput.value) * 0.4;
// console.log(
//   parseInt(annualIncomeInput.value - monthlyDebtsInput.value) * 0.43
// );

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
  let maximumPayment = parseFloat(maximumPaymentInput.value);


  let monthlyMortgagePayment = !isActive? (annualIncome/12)*debtToIncome/100 - monthlyDebts: maximumPayment
  
  
  result.textContent = parseInt(calculateResult(
    monthlyMortgagePayment,
    downPayment,    
    interestRate,
    loanTerm
  )).toFixed()
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

   
};

function syncPercentWithBar() {  
  dtiBar.value = parseInt(debtToIncomeInput.value);  
  
  let payment = parseInt((annualIncomeInput.value / 12) * debtToIncomeInput.value / 100 - monthlyDebtsInput.value)

  monthlyPaymentResult.textContent = payment>0?payment.toFixed()
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ','):0   

  
  calculateAffordability();
}



function syncBarWithPercent() {  
  debtToIncomeInput.value = parseInt(dtiBar.value)
  

  let payment = parseInt((annualIncomeInput.value / 12) * debtToIncomeInput.value / 100 - monthlyDebtsInput.value)

  console.log( debtToIncomeInput.value)

  monthlyPaymentResult.textContent = payment > 0 ? payment.toFixed()
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0   

  debtTOIncomeRatio.textContent = debtToIncomeInput.value
  maximumPaymentInput.value = payment;
   
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

function loanTermPopup() {
  document.getElementById('loanTermPopup').classList.toggle('popup-off');
}


function handlePaymentOption(){
	let monthlyInput = document.getElementById('monthly-income')
	let maximumInput = document.getElementById('maximum-payment')
	let monthlyDebts = document.getElementById('monthly-debts')
	let dti = document.getElementById('dti')
	maximumInput.classList.toggle('disabled-input')
	monthlyInput.classList.toggle('disabled-input')
	monthlyDebts.classList.toggle('disabled-input')
	dti.classList.toggle('disabled-input')
	isActive = !isActive
}

function calculateResult( 
  monthlyMortgagePayment,
  downPayment,  
  interestRate,
  loanTerm
) { 

  const interestRateDecimalMonthly = interestRate / 1200;
 
  const propertyPrice =
    (monthlyMortgagePayment / (amortizedonstant(interestRateDecimalMonthly, loanTerm)))	
  
  
  const homePrice = (propertyPrice<0?0:propertyPrice) + downPayment;

  return homePrice
}

function amortizedonstant(interestRate, loanTermInMonths) {
  const [num, decimals] = toBigInt(interestRate);
  const pot = bigIntToNumber(
    (1n * 10n ** BigInt(decimals) + num) ** BigInt(loanTermInMonths),
    decimals * loanTermInMonths
  );

  let result = interestRate / (1 - 1 / pot);

  return result;
}

function toBigInt(numToConvert) {
  let num = numToConvert;
  let decimals = 0;

  while (num !== Math.trunc(num)) {
    num = num * 10;
    decimals = decimals + 1;
  }
  return [BigInt(num), decimals];
}

function bigIntToNumber(numToConvert, decimals) {
  const num = BigInt(numToConvert).toString().split('');
  num.splice(-decimals, 0, '.');
  return Number(num.reduce((acc, curr) => (acc += curr)));
}

