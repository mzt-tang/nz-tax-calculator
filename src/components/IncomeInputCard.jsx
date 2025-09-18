export function IncomeInputCard(props) {
  function handleIncomeAmountChange(e) {
    props.setIncomeAmount(e.target.value);
  }

  return (
    <div className="card">
      <p>Input your income amount below</p>
      <input
        id="income-amount"
        type="number"
        value={props.incomeAmount}
        onChange={handleIncomeAmountChange}
      />
    </div>
  );
}
