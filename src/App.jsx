import { useState } from 'react'
import './App.css'
import calculateTax, { incomeAfterTax } from './utilities/tax-calculator';

function App() {
  const [incomeAmount, setIncomeAmount] = useState(0);

  function handleIncomeAmountChange(e) {
    setIncomeAmount(e.target.value);
  }

  function handleTaxCalculation(income) {
    return calculateTax(income).toLocaleString("en-US", {style: "currency", currency: "NZD"});
  }

  function handleIncomeAfterTaxCalculation(income) {
    return incomeAfterTax(income, calculateTax(income)).toLocaleString("en-US", {style: "currency", currency: "NZD"});
  }

  return (
    <>
      <h1>NZ Tax Calculator</h1>
      <div className="card">
        <p>
          Input your income amount below
        </p>
        <input id="income-amount" type="number" value={incomeAmount} onChange={handleIncomeAmountChange}/>
      </div>
      <div>
        <h3>
          Your taxed amount is
        </h3>
        <div className="display-amount">
          {handleTaxCalculation(incomeAmount)}
        </div>
        <h3>
          Your income after tax is
        </h3>
        <div className="display-amount">
          {handleIncomeAfterTaxCalculation(incomeAmount)}
        </div>
      </div>
    </>
  )
}

export default App
