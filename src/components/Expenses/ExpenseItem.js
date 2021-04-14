import React from 'react';


export const ExpenseItem = () => {
    
    return (
        <div className='expense-item'>
            <div >Mar 27th 2021</div>
            <div className='expense-item__description'>
            <h2>Laptop</h2>
                <div className='expense-item__price'>$530</div>
            </div>
        </div>
    )
}

export default ExpenseItem
