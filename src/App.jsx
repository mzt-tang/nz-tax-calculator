import { useState } from "react";
import "./App.css";
import { CalculatedTaxCard } from "./components/CalculatedTaxCard";
import { IncomeInputCard } from "./components/IncomeInputCard";

function App() {
  const [incomeAmount, setIncomeAmount] = useState(0);

  return (
    <>
      <h1>NZ Tax Calculator</h1>
      <IncomeInputCard
        incomeAmount={incomeAmount}
        setIncomeAmount={setIncomeAmount}
      />
      <CalculatedTaxCard incomeAmount={incomeAmount} />
    </>
  );
}

export default App;
