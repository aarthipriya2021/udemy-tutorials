import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     enteredTitle: event.target.value, ...userInput
        // })

    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: ''}
    //     });
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     enteredAmount: event.target.value, ...userInput
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: ''}
        // });
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     enteredDate: event.target.value, ...userInput
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: ''}
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
        //////two-way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
