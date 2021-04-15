import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { ExpenseDate} from '../src/components/Expenses/ExpenseDate';

///**** components:
// import { ExpenseItem } from './components/ExpenseItem';
// import { ExpenseItem } from './components/ExpenseItemStyle';
// import { ExpenseItem } from './components/ExpenseItemJavas'
// import { ExpenseItem} from './components/ExpenseItemJava';
// import { ExpenseItem} from './components/ExpenseUpdate';
// import { Expenses } from './components/Expenses';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///**** state

import { Expenses } from './state/Expenses';
// import { ExpenseItem } from './state/Expensestate';

export const App = () =>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]


  return (
    <div className="App">
      <h2>Let's get started. </h2>
        <Expenses items={expenses}/>
          {/* <ExpenseDate /> */}
           
    </div>  
      


  
  );
}

export default App;
