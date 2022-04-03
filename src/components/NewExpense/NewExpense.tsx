import React from "react";
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
  return (
    <div className="new-expense">
        {/* call function from child */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
