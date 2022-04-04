import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props: any) {
  const [filteredYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear: any) => {
    setfilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense:any) => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
