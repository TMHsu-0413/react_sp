import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props:any) => {
// 分成3個state跑
//   const [EnteredTitle, setEnteredTitle] = useState();
//   const [EnteredAmount, setEnteredAmount] = useState();
//   const [EnteredDate, setEnteredDate] = useState();
// 只用一個state跑
const [userInput,setuserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
})
  const titleChangeHandler = (event: any) => {
    // setEnteredTitle(event.target.value);
    // setuserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value
    // })
    setuserInput((prevState) => {
        return {...prevState,enteredTitle: event.target.value}
    })
  };
  const AmountChangeHandler = (event: any) => {
    // setEnteredAmount(event.target.value);
    // setuserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value
    // })
    setuserInput((prevState) => {
        return {...prevState,enteredAmount: event.target.value}
    })
  };

  const DateChangeHandler = (event: any) => {
    // setEnteredDate(event.target.value);
    // setuserInput({
    //     ...userInput,
    //     enteredDate : event.target.value
    // })
    setuserInput((prevState) => {
        return {...prevState,enteredDate: event.target.value}
    })
  };
  const submitHandler = (event : any) => {
      event.preventDefault() // 防止submit時刷新頁面

      const expenseData = {
          title: userInput.enteredTitle,
          amount: userInput.enteredAmount,
          date: new Date(userInput.enteredDate),
      }
      props.onSaveExpenseData(expenseData)

      setuserInput({
          enteredTitle: '',
          enteredAmount: '',
          enteredDate: '',
      })
      props.onAddExpense()
    //   console.log(expenseData);
      
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={props.onAddExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
