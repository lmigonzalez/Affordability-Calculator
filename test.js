calculatAffordability() 
function calculatAffordability() {
  // Input parameters
  const annualIncome = 60000;
  const monthlyDebts = 1500
  const downPayment = 20000;
  const interestRate = 0.045;
  const dti = 36;
  const loanTermInMonths = 360;
  const propertyTaxRate = 0.012;
  const homeInsurance = 800;
  const hoaDues = 0;
  

  const monthlyIncome = annualIncome / 12;
  const monthlyMortagePlusTaxPayment = monthlyIncome - monthlyDebts;
  const monthlyInterestRate = interestRate / 12;

  const propertyPrice =
    (monthlyMortagePlusTaxPayment / (amortizationConstant(monthlyInterestRate, loanTermInMonths)))
  
  
  const finalPrice = propertyPrice;
  
  console.log(finalPrice)


}


function amortizationConstant(interestRate, loanTermInMonths) {
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