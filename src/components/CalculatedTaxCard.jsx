import calculateTax, { incomeAfterTax } from "../utilities/tax-calculator";

export function CalculatedTaxCard(props) {
  function handleTaxCalculation(income) {
    return calculateTax(income).toLocaleString("en-US", {
      style: "currency",
      currency: "NZD",
    });
  }

  function handleIncomeAfterTaxCalculation(income) {
    return incomeAfterTax(income, calculateTax(income)).toLocaleString(
      "en-US",
      { style: "currency", currency: "NZD" },
    );
  }

  return (
    <div>
      <h3>Your taxed amount is</h3>
      <div className="display-amount">
        {handleTaxCalculation(props.incomeAmount)}
      </div>
      <h3>Your income after tax is</h3>
      <div className="display-amount">
        {handleIncomeAfterTaxCalculation(props.incomeAmount)}
      </div>
    </div>
  );
}
