import { useState } from 'react'
import './App.css'
import calculateTax from './utilities/tax-calculator';

function App() {
  const [incomeAmount, setIncomeAmount] = useState(0);

  function handleIncomeAmountChange(e) {
    setIncomeAmount(e.target.value);
  }

  function handleTaxCalculation(incomeAmount) {
    return calculateTax(incomeAmount).toLocaleString("en-US", {style: "currency", currency: "NZD"});
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
        <div className="tax-amount">
          {handleTaxCalculation(incomeAmount)}
        </div>
      </div>
    </>
  )
}

export default App
