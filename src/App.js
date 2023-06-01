import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./Components/ExpenseItems";
import NewExpence from "./Components/NewExpence";
import Expensenses from "./Components/Expensenses";
function App(props) {
 
  const Handlesavedata = (enteredExpenseData) => {
    const NewExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(NewExpenseData);
  };
  return (
    <div className="App card bg-dark">
      <NewExpence onSaveNewitem={Handlesavedata} />
      <Expensenses items={Expensenses}/>
    </div>
  );
}

export default App;
