import React from 'react';
import './ExpenseItem.css'

export const ExpenseItem = () => {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Laptops';
    const expensePrice = 530;
    return (
        <div className='expense-item'>
            <div >{expenseDate.toLocaleDateString()}</div>
            <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
