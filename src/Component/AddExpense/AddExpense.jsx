import React, { useState } from 'react'
import axios from 'axios'


function AddExpense() {

  let [AddExpenseData,SetAddExpenseData] = useState({
    ExpenseName:'',
    Amount:"",
    Date:'',
    Description:''
  })

  let AddExpenseDataSubmit = async(e)=>{
    e.preventDefault()
    try {
      let response = await axios.post('http://localhost:8000/AddExpense',AddExpenseData)
      let {message} = response.data

      if (response.status ===201) {
        console.log(message);
        alert('Expense Added Successfully!');
      } else{
        alert('Failed to add expense. Please try again.');
      }
    }
     catch (error) {
      console.error('Error adding expense:', error);
      alert('An error occurred while adding expense data.');
    }
    
    SetAddExpenseData({
      ExpenseName: '',
      Amount: '',
      Date: '',
      Description: '',
    });
  }

  let AddExpenseChange =(e)=>{
    let {name ,value } = e.target

    SetAddExpenseData((PrevData)=>({
      ...PrevData ,[name]:value
    }))
  }

  return (
    <div>
      <h1>Add New Expense</h1>
      <form onSubmit={AddExpenseDataSubmit}>
        <label>
        Expense Name:
        <br/>
          <input
           type='text'
            value={AddExpenseData.ExpenseName}
            name='ExpenseName'
            placeholder='Enter Expense Name '
            onChange={AddExpenseChange}
            required
          />
        </label>
        <br/>
        <br/>

        <label>
        Amount :
        <br/>
          <input
           type='number'
            value={AddExpenseData.Amount}
            name='Amount'
            placeholder='Enter Expense Name '
            onChange={AddExpenseChange}
            required
          />
        </label>
        <br/>
        <br/>

        <label>
        Date :
        <br/>
          <input
           type='date'
            value={AddExpenseData.Date}
            name='Date'
            placeholder='Enter Expense Name '
            onChange={AddExpenseChange}
            required
          />
        </label>
        <br/>
        <br/>

        <label>
        Description :
        <br/>
          <input
           type='text'
            value={AddExpenseData.Description}
            name='Description'
            placeholder='Enter Expense Name '
            onChange={AddExpenseChange}
            required
          />
        </label>
        <br/>
        <br/>

        <button type="Submit">Add Expense</button>

      </form>
    </div>
  )
}

export default AddExpense
