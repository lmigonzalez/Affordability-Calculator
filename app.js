//this has to change

let isActive = false

let advancedForm = false

//simple
const monthlyIncomeInput = document.getElementById('monthlyIncome');
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
// parseInt(monthlyIncomeInput.value  - monthlyDebtsInput.value) * 0.43;
// monthlyPaymentInput.value =
//   (monthlyIncomeInput.value  - monthlyDebtsInput.value) * 0.4;
// console.log(
//   parseInt(monthlyIncomeInput.value - monthlyDebtsInput.value) * 0.43
// );

const result = document.getElementById('result');

const monthlyPaymentResult = document.getElementById('monthlyPaymentResult');
const debtTOIncomeRatio = document.getElementById('debtTOIncomeRatio');

const calculateAffordability = () => {  

  monthlyIncomeInput.value = numberPreetier(numberPreetier(monthlyIncomeInput.value));  
  monthlyDebtsInput.value= numberPreetier(numberPreetier(monthlyDebtsInput.value));
  downPaymentInput.value = numberPreetier(numberPreetier(downPaymentInput.value));
  debtToIncomeInput.value = numberPreetier(numberPreetier(debtToIncomeInput.value));   
  loanTermInput.value = numberPreetier(numberPreetier(loanTermInput.value)); 
  maximumPaymentInput.value= numberPreetier(numberPreetier(maximumPaymentInput.value));


  let monthlyIncome = numberPreetier(monthlyIncomeInput.value);  
  let monthlyDebts = numberPreetier(monthlyDebtsInput.value);
  let downPayment = numberPreetier(downPaymentInput.value);
  let debtToIncome = numberPreetier(debtToIncomeInput.value);
  let interestRate = parseFloat(interestRateInput.value);
  let loanTerm = numberPreetier(loanTermInput.value); 
  let maximumPayment = numberPreetier(maximumPaymentInput.value);


  let monthlyMortgagePayment = !isActive? monthlyIncome*(debtToIncome/100) - monthlyDebts : maximumPayment
  console.log(monthlyMortgagePayment)
  
  result.textContent = numberPreetier(calculateResult(
    monthlyMortgagePayment,
    downPayment,    
    interestRate,
    loanTerm
  ))
   
};

function syncPercentWithBar() {  
  dtiBar.value = numberPreetier(debtToIncomeInput.value);   
  debtTOIncomeRatio.textContent = numberPreetier(debtToIncomeInput.value)

  let payment = (numberPreetier(monthlyIncomeInput.value)*numberPreetier(debtToIncomeInput.value)) / 100 - numberPreetier(monthlyDebtsInput.value)

  monthlyPaymentResult.textContent = numberPreetier(isActive? numberPreetier(dtiBar.value):(payment > 0 ? payment : 0))
  
  calculateAffordability()
  
}

function syncBarWithPercent() {  
  
  debtToIncomeInput.value = numberPreetier(dtiBar.value) 
  debtTOIncomeRatio.textContent = numberPreetier(!isActive? parseInt(dtiBar.value):0)

  let payment = (numberPreetier(monthlyIncomeInput.value)*numberPreetier(debtToIncomeInput.value)) / 100 - numberPreetier(monthlyDebtsInput.value)

  monthlyPaymentResult.textContent = numberPreetier(isActive? numberPreetier(dtiBar.value):(payment > 0 ? payment : 0))
  
  if (isActive) {
    maximumPaymentInput.value = numberPreetier(dtiBar.value) 
  }

  calculateAffordability()
}

function syncMaxPaymentWithDtiBar() {
  dtiBar.max = numberPreetier(maximumPaymentInput.value) * 2 
  dtiBar.value = maximumPaymentInput.value
  monthlyPaymentResult.textContent = numberPreetier(numberPreetier(dtiBar.value))
  calculateAffordability()
}

const toggleForm = () => {
  console.log('hello');
  document.getElementById('advancedForm').classList.toggle('showAdvanceForm');
  document.getElementById('advanced-arrow').classList.toggle('rotate-arrow')
  advancedForm = !advancedForm
  console.log(advancedForm)
  if(advancedForm){
    document.getElementById('btn-content').textContent = 'Simple'
  }else{
    document.getElementById('btn-content').textContent = 'Advanced'
  }

};

function togglemonthlyIncome() {
  console.log('toggle');

  document.getElementById('monthlyIncomePopup').classList.toggle('popup-off');
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
	let paymentBtn = document.getElementById('handlePaymentBtn')
	let dti = document.getElementById('dti')
	maximumInput.classList.toggle('disabled-input')
	monthlyInput.classList.toggle('disabled-input')
	monthlyDebts.classList.toggle('disabled-input')
  dti.classList.toggle('disabled-input')

  isActive = !isActive
  if (isActive) {
    maximumPaymentInput.value = numberPreetier(1850)    
    syncMaxPaymentWithDtiBar()
  }
  else {
    dtiBar.max = 43
    debtToIncomeInput.value = 40
    dtiBar.value = 40 
    debtTOIncomeRatio.textContent = 40
    monthlyPaymentResult.textContent = numberPreetier((numberPreetier(monthlyIncomeInput.value) * numberPreetier(debtToIncomeInput.value)) / 100 - numberPreetier(monthlyDebtsInput.value))    
  }

  if(isActive){
	paymentBtn.textContent = 'income'
}else{
	  paymentBtn.textContent = 'payment'

  }
    
    
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

function numberPreetier(num) {
  return typeof num === (typeof ' ') ? parseInt(num.match(/[0-9.]+/g).join('')) : parseInt(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

