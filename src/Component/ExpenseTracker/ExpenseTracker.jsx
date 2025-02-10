import React from 'react'
import { Link } from 'react-router-dom'
import '../ExpenseTracker/ExpenseTracker.css'

function ExpenseTracker() {
  return (
    <div className='main'>
      <h1>Welcome to Expense Tracker</h1>
      <div className='list'>
      <Link className='link' to='/AddExpense'  >Add Expense</Link>
      <Link className='link' to='/ExpenseList' >Expense List</Link>
      </div>
      <p>Track and manage your expenses effectively. Use the navigation links to add new expenses or view your expense history</p>
    </div>
  )
}

export default ExpenseTracker
