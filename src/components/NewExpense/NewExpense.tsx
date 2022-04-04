import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props:any) => {
    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            id: Math.random(),
            ...enteredExpenseData,
        }
        props.onAddExpenseData(expenseData)
    }
    const [isEditing,setisEditing] = useState(false)

    const ChangeisEditingHandler = () => {
        setisEditing(!isEditing)
    }
  return (
    <div className="new-expense">
        {/* call function from child */}
        {!isEditing && <button onClick={ChangeisEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAddExpense={ChangeisEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
