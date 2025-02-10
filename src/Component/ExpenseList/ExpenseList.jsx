import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../ExpenseList/ExpenseList.css'
// import User from '../../../../Server/db/User'
function ExpenseList() {

  let [Data , SetDat] = useState([])

  //Bhai last mein dek lena 

  useEffect(()=>{
    axios.get('http://localhost:8000/expenses')
      .then(users=>SetDat(users.data))
      .catch(err=>console.log(err))
  },[])

  
  

  return (
    <div className='main'>
      <h1>Expense List</h1>
      {Data.map((expense)=>(
        <div key={expense._id}>
          <h2>{expense.ExpenseName}</h2>
          <h3>Amount: <span>$ {expense.Amount}</span></h3>
          <h5>Date:<span>{expense.Date}</span></h5>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default ExpenseList

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/expenses');
//       SetDat(response.data);  // Update state with the fetched data
//     } catch (err) {
//       console.log(err);  // Handle error
//     }
//   };

//   fetchData();  // Call the async function
// }, []);  // Empty dependency array ensures it runs only once when the component mounts