import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import { Button } from '@mui/material';
function ExpenseItem(props: any) {
  const [title,setTitle] = useState(props.title)
  const ClickHandler = () => {
    setTitle('Update!!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <Button onClick = {ClickHandler}>Change title</Button>
    </Card>
  );
}

export default ExpenseItem;
