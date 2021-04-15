import React,{ useState } from 'react';

import { ExpenseDate} from './ExpenseDate';
import { Card} from './Card';
import './ExpenseItem.css';

export const ExpenseItem = (props) => {

  // const clickHandler = () => {
  //   alert('clicked!!')
  // }

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
      setTitle('Updated!!');
      console.log(title)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>edit</button>
    </Card>
  );
}

export default ExpenseItem;
