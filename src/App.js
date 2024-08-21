import { useReducer, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './components/ExpenseList/ExpenseList';

function reducer(state, action){
  switch (action.type) {
    case "ADD": {
      return {
        expenses: [action.payload.expense, ...state.expenses]
      }
    }
    case "DELETE": {
      return {
        expenses: state.expenses.filter((e, index) => index!==action.payload.index)
      }
    }
    // case "UPDATE": {
    //   const expenseDuplicate = state.expenses;
    //   expenseDuplicate[action.payload.expensePos] = action.payload.expense;
    //   return {
    //     expenses: expenseDuplicate
    //   }
    // }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {expenses:[]});
  // const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  function addExpense(expense) {
    dispatch({type: "ADD", payload: {expense}});
  }
  
  function deleteExpense(index) {
    dispatch({type: "DELETE", payload: {index}});
  }

  // function updateExpense(expense) {
  //   const expensePos = state.expenses.map((exp) => exp.index === expense.index);
  //   if (expensePos === -1) {
  //     return false;
  //   }
  //   dispatch({type:"UPDATE", payload: {expensePos, expense}});
  //   return true;
  // }

  // function resetExpenseToUpdate() {
  //   setExpenseToUpdate(null);
  // }

  return (
    <>
      <h1 className='main-heading'>Expense Tracker</h1>
      <div className='App'>

        <ExpenseForm addExpense={addExpense}
                      // expenseToUpdate={expenseToUpdate}
                      // updateExpense={updateExpense}
                      // resetExpenseToUpdate={resetExpenseToUpdate}
                      />

        <div className='expenseContainer'>

          <ExpenseInfo expense={state}/>

          <ExpenseList expense={state} deleteExpense={deleteExpense}
                        // changeExpenseToUpdate={setExpenseToUpdate}
                        />
        </div>
      </div>
    </>
  );
}

export default App;
