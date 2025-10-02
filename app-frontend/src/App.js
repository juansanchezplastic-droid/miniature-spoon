import './App.css';
import {useState} from "react";

function App() {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [submittedTransactions, setSubmittedTransactions] = useState([]); 
  const [error, setError] = useState();

  const onSubmitHandler = async () => {
    try {
      if (amount && description) {
        await fetch('http://localhost:3001/transactions', {
          method: "POST",
          body: {
            amount,
            description,
          }
        });
        setAmount(null);
        setDescription(null);
        setSubmittedTransactions([...submittedTransactions, {amount, description}])
      }
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div className="App">
      <form
        onSubmit={onSubmitHandler}
        className={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <label>Amount</label>
        <input type='number' onChange={(e) => setAmount(e.target.value)} />

        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} />

        <button 
          type="submit"
        >Submit</button>
      </form>
      {
        submittedTransactions.length && (
          <span>
            The submitted transaction was: 
            <div>
              <span>Amount: {submittedTransactions.slice(-1).amount}</span>
              <span>Description: {submittedTransactions.slice(-1).description}</span>
            </div>
          </span>
        )
      }
      {
        error && (
          <span>{error}</span>
        )
      }
    </div>
  );
}

export default App;
