import React, { useState} from 'react';

import { ExpenseItem} from './ExpenseUpdate';
import { Card} from './Card';
import { ExpensesFilter } from './NewExpense/ExpensesFilter';
import './Expenses.css';

export const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    // console.log(target.value);
    // console.log('Expenses.js');
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => (
        <ExpenseItem 
          title={expense.title}
          amount={expense.amount}
          date = {expense.date}
          />
      ))};
      
    </Card>
  );
}

export default Expenses;




