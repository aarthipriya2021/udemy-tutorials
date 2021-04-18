import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

// export const NewExpense = (props) =>{

//     const saveExpenseDataHandler = (enteredExpenseData) =>{
//             const expenseData =  {
//                 ...enteredExpenseData,
//                 id: Math.random().toString()
//             }
//             // console.log(expenseData);
//             props.onAddExpense(expenseData) 
//     }
//     return (
//         <div className='new-expense'>
//            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
//         </div>
//     ) 
  
// }

// export default NewExpense


// import React from 'react';

// import ExpenseForm from './ExpenseForm';
// // import './NewExpense.css';

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;