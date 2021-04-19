import React, { useState} from 'react';

import { ExpenseItem} from './ExpenseUpdate';
import { Card} from './Card';
import { ExpensesFilter } from './NewExpense/ExpensesFilter';
import './Expenses.css';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

//  const filteredExpense = props.items.filter(expense => {
//    return expense.date.getFullYear().toString() === filteredYear
//  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        {props.items.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  );
};


export default Expenses;