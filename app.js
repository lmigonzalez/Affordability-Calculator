//Getting values from doom
import {test} from './helper.js'

// inputs and checkbox
const annualIncomeInput = document.getElementById('annualIncome');
const monthlyDebtsInput = document.getElementById('monthlyDebts');
const downPaymentInput = document.getElementById('downPayment');

const debtToIncomeInput = document.getElementById('debtToIncome');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');
const taxesIncludeInput = document.getElementById('taxesInclude');
const propertyTaxInput = document.getElementById('propertyTax');
const OMIIncludeInput = document.getElementById('OMIinclude');
const hOADuesInput = document.getElementById('hOADues');

const monthlyPaymentInput = document.getElementById('monthlyPayment');

monthlyPaymentInput.min = 0;
monthlyPaymentInput.max =
  parseFloat(annualIncomeInput.value / 12) * 0.43 -
  parseFloat(monthlyDebtsInput.value);
console.log(annualIncomeInput.value)
monthlyPaymentInput.value =
  (parseFloat(annualIncomeInput.value) / 12) * 0.36 -
  parseFloat(monthlyDebtsInput.value);

// btn
const changeForm = document.getElementById('form-type');

// Inputs value
let annualIncomeValue;
let monthlyDebtsValue;
let downPaymentValue;
let debtToIncomeValue;
let interestRateValue;
let loanTermValue;
let taxesIncludeValue;
let propertyTaxValue;
let OMIIncludeValue;
let hOADuesValue;
let monthlyPaymentValue;

// simple form

console.log(test())

annualIncomeInput.addEventListener('change', (e) => {
  annualIncomeValue = annualIncomeInput.value;
  console.log(annualIncomeValue);
  monthlyPaymentInput.max =
  parseFloat(annualIncomeInput.value / 12) * 0.43 -
  parseFloat(monthlyDebtsInput.value);
console.log(annualIncomeInput.value)
monthlyPaymentInput.value =
  (parseFloat(annualIncomeInput.value) / 12) * 0.36 -
  parseFloat(monthlyDebtsInput.value);
});

monthlyDebtsInput.addEventListener('change', (e) => {
  monthlyDebtsValue = monthlyDebtsInput.value;
  console.log(monthlyDebtsValue);
});

downPaymentInput.addEventListener('change', (e) => {
  downPaymentValue = downPaymentInput.value;
  console.log(downPaymentValue);
  
});

// advanced form

debtToIncomeInput.addEventListener('change', (e) => {
  debtToIncomeValue = debtToIncomeInput.value;
  console.log(debtToIncomeValue);
});

interestRateInput.addEventListener('change', (e) => {
  interestRateValue = interestRateInput.value;
  console.log(interestRateValue);
});

loanTermInput.addEventListener('change', (e) => {
  loanTermValue = loanTermInput.value;
  console.log(loanTermValue);
});

taxesIncludeInput.addEventListener('change', (e) => {
  taxesIncludeValue = e.target.checked ? true : false;
  console.log(taxesIncludeValue);
});

propertyTaxInput.addEventListener('change', (e) => {
  propertyTaxValue = propertyTaxInput.value;
  console.log(propertyTaxValue);
});

OMIIncludeInput.addEventListener('change', (e) => {
  OMIIncludeValue = e.target.checked ? true : false;
  console.log(OMIIncludeValue);
});

hOADuesInput.addEventListener('change', (e) => {
  hOADuesValue = hOADuesInput.value;
  console.log(hOADuesValue);
});

monthlyPaymentInput.addEventListener('change', (e) => {
  monthlyPaymentValue = monthlyPaymentInput.value;
  const result = document.getElementById('result');
  result.textContent = '$' + monthlyPaymentValue;
});

changeForm.addEventListener('click', (e) => {
  e.preventDefault();
  const advancedFormDiv = document.getElementById('advancedForm');

  advancedFormDiv.classList.toggle('showAdvanceForm');
});
