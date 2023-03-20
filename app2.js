// function cuotaMensualDeseada(annualIncome,...monthlyDebs[]) {
//     return annualIncome / 12 - monthlyDebs.reduce((acc,curr)=>acc+curr);
// }

// function totalPayment(cuotaMensualDeseada, propertyTaxRate,constanteDeAmortizacion) {
//     return ((propertyTaxRate / 1200)+constanteDeAmortizacion) * cuotaMensualDeseada;
// }

// function constanteDeAmortizacion(interestRate,loanTermInMonths) {
//     return (1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate/100);
// }

// function canAfford(totalPayment,downPayment) {
//     return totalPayment + downPayment;
// }
// const annualIncome = 100000;
// const monthlyDebts = 1000;
// const downPayment = 50000;
// const interestRate = 0.06409;
// const loanTermInMonths = 360;
// const propertyTaxRate = 0.012;
// const homeInsurance = 800;
// const hoaDues = 0;

// console.log(canAfford(totalPayment(cuotaMensualDeseada(annualIncome,1000,homeInsurance/12,hoaDues),propertyTaxRate,constanteDeAmortizacion(interestRate,loanTermInMonths)),downPayment))

/////////////////////////////



// monthlyPaymentInput.min = 0;
// monthlyPaymentInput.max =
//   (convertValue(annualIncomeInput) / 12) * 0.43

// monthlyPaymentInput.value =
//   (convertValue(annualIncomeInput) / 12) * 0.36 -
//   convertValue(monthlyDebtsInput);

// monthlyPaymentResult.textContent = (
//   (convertValue(annualIncomeInput) / 12) * 0.36 -
//   convertValue(monthlyDebtsInput)
// )
//   .toString()
//   .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// console.log(
//   (convertValue(annualIncomeInput) / 12) * 0.36 -
//     convertValue(monthlyDebtsInput)
// );
// // btn
// const changeForm = document.getElementById('form-type');

// const advancedFormDiv = document.getElementById('advancedForm');

// // Inputs value
// let annualIncomeValue;
// let monthlyDebtsValue;
// let downPaymentValue;
// let debtToIncomeValue;
// let interestRateValue;
// let loanTermValue;
// let taxesIncludeValue;
// let propertyTaxValue;
// let OMIIncludeValue;
// let hOADuesValue;
// let monthlyPaymentValue;

// // simple form

// console.log(test());

// annualIncomeInput.addEventListener('change', (e) => {
//   annualIncomeValue = annualIncomeInput.value;
//   console.log(annualIncomeValue);
//   monthlyPaymentInput.max =
//     parseFloat(annualIncomeInput.value / 12) * 0.43 -
//     parseFloat(monthlyDebtsInput.value);
//   console.log(annualIncomeInput.value);
//   monthlyPaymentInput.value =
//     (parseFloat(annualIncomeInput.value) / 12) * 0.36 -
//     parseFloat(monthlyDebtsInput.value);
// });

// monthlyDebtsInput.addEventListener('change', (e) => {
//   monthlyDebtsValue = monthlyDebtsInput.value;
//   console.log(monthlyDebtsValue);
// });

// downPaymentInput.addEventListener('change', (e) => {
//   downPaymentValue = downPaymentInput.value;
//   console.log(downPaymentValue);
// });

// // advanced form

// debtToIncomeInput.addEventListener('change', (e) => {
//   debtToIncomeValue = debtToIncomeInput.value;
//   debtTOIncomeRatio.textContent = debtToIncomeValue

//   monthlyPaymentResult.value = (
// 	(convertValue(annualIncomeInput) / 12) * 0.25 -
// 	convertValue(monthlyDebtsInput)
//   )
//   console.log(debtToIncomeValue);
// });

// interestRateInput.addEventListener('change', (e) => {
//   interestRateValue = interestRateInput.value;
//   console.log(interestRateValue);
// });

// loanTermInput.addEventListener('change', (e) => {
//   loanTermValue = loanTermInput.value;
//   console.log(loanTermValue);
// });

// taxesIncludeInput.addEventListener('change', (e) => {
//   taxesIncludeValue = e.target.checked ? true : false;
//   console.log(taxesIncludeValue);
// });

// propertyTaxInput.addEventListener('change', (e) => {
//   propertyTaxValue = propertyTaxInput.value;
//   console.log(propertyTaxValue);
// });

// OMIIncludeInput.addEventListener('change', (e) => {
//   OMIIncludeValue = e.target.checked ? true : false;
//   console.log(OMIIncludeValue);
// });

// hOADuesInput.addEventListener('change', (e) => {
//   hOADuesValue = hOADuesInput.value;
//   console.log(hOADuesValue);
// });

// changeForm.addEventListener('click', (e) => {
//   e.preventDefault();

//   advancedFormDiv.classList.toggle('showAdvanceForm');
// });

// monthlyPaymentInput.addEventListener('change', (e) => {
//   let inputValue = parseInt(e.target.value);

//   monthlyPaymentValue = inputValue;

//   monthlyPaymentResult.textContent = inputValue
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//   let annualInc = parseInt(annualIncomeInput.value) / 12;
//   let monthlyPmt = parseInt(inputValue);
//   debtTOIncomeRatio.textContent = parseInt((monthlyPmt / annualInc) * 100);
//   debtToIncomeInput.value = parseInt((monthlyPmt / annualInc) * 100);
// });