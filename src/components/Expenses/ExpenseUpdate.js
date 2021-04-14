import React from 'react';
import'./ExpenseItem.css';
import { ExpenseDate} from '../Expenses/ExpenseDate';
// import { Card} from '../UI/Card';

export const ExpenseItem = (props) => {
    
    return (
        <div className='expense-item'>
            
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
