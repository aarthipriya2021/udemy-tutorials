import React, { useState } from 'react';
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

// import { Expenses } from './state/Expenses';
// // import { ExpenseItem } from './state/Expensestate';
// import { NewExpense } from './state/NewExpense/NewExpense';

// export const App = () =>{
    
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     }
//   ]
  
  
  
//   const addExpenseHandler = (expense) =>{
//    console.log('In App.js');
//    console.log(expense);
//   };


//   return (
//     <div className="App">
//       <NewExpense onAddExpense={addExpenseHandler} />
//         <Expenses items={expenses} />
//           {/* <ExpenseDate /> */}
           
//     </div>  
      


  
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////
////////////////List&conditionals

import { Expenses } from './list&conditional/Expenses';
// import { ExpenseItem } from './state/Expensestate';
import { NewExpense } from './list&conditional/NewExpense/NewExpense';


  
const DUMMY_EXPENSES = [
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
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;