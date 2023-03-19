function cuotaMensualDeseada(annualIncome,...monthlyDebs[]) {
    return annualIncome / 12 - monthlyDebs.reduce((acc,curr)=>acc+curr);
}

function totalPayment(cuotaMensualDeseada, propertyTaxRate,constanteDeAmortizacion) {
    return ((propertyTaxRate / 1200)+constanteDeAmortizacion) * cuotaMensualDeseada;
}

function constanteDeAmortizacion(interestRate,loanTermInMonths) {
    return (1 - Math.pow(1 + interestRate, loanTermInMonths)) / (interestRate/100);
}

function canAfford(totalPayment,downPayment) {
    return totalPayment + downPayment;
}
const annualIncome = 100000;
const monthlyDebts = 1000;
const downPayment = 50000;
const interestRate = 0.06409;
const loanTermInMonths = 360;
const propertyTaxRate = 0.012;
const homeInsurance = 800;
const hoaDues = 0;

console.log(canAfford(totalPayment(cuotaMensualDeseada(annualIncome,1000,homeInsurance/12,hoaDues),propertyTaxRate,constanteDeAmortizacion(interestRate,loanTermInMonths)),downPayment))

