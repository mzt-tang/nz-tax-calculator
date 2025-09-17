const TAX_BRACKETS = [
  {"bracket" : 0, "rate": 0},
  {"bracket" : 15000, "rate": 10.5},
  {"bracket" : 53500, "rate": 17.5},
  {"bracket" : 78100, "rate": 30},
  {"bracket" : 180000, "rate": 33},
  {"bracket" : Number.MAX_VALUE, "rate": 39}
]

function calculateTax(income) {
  let taxToPay = 0;

  for (let i = 0; i < TAX_BRACKETS.length; i++ ) {
    if (income >= TAX_BRACKETS[i]) {
      taxToPay += calculateMaxBracketAmount(i);
      continue; // move on to the next tax bracket
    } 
    // ( income - last bracket total ) * current bracket rate
    const maxTaxBracketAmounttoPay = (income - TAX_BRACKETS[i-1].bracket) * TAX_BRACKETS[i].rate;
    taxToPay += maxTaxBracketAmounttoPay;
    break;      
  }
  return taxToPay;
}

function calculateMaxBracketAmount(taxBracketIndex) {
  if (taxBracketIndex == 0) return 0; // Account for 0 income;
  const totalIncomeForBracket = TAX_BRACKETS[taxBracketIndex].bracket - TAX_BRACKETS[taxBracketIndex - 1].bracket;
  return totalIncomeForBracket * TAX_BRACKETS[taxBracketIndex].rate;
}