import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props: any) {
  const [filteredYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear: any) => {
    setfilterYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense: any) => { 
          console.log(expense.title,expense.amount,expense.date);
          
          return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
         })}
      </Card>
    </div>
  );
}

export default Expenses;
