import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Login/Login.css'

function Login() {

    let [loginData,SetloginData] = useState({
        username:'',
        password:''
    })

    let navigate = useNavigate()  // Initialize the useNavigate hook

    let handleloginChange = (e)=>{
        let {name,value} = e.target
    SetloginData((PrevData)=>({
        ...PrevData, [name]:value  //username:value
    }))    
        
    }

    // Submit
    let HandleLoginSubmit = async(e)=>{
        e.preventDefault()
        try {
            let response = await axios.post('http://localhost:8000/login',loginData)
            let {message} = response.data
            
            if (response.status===200) {
               navigate('/ExpenseTracker'); 
               console.log(message);
            }

        } catch (error) {
            alert('Login Id and Data was not match')
        }

        SetloginData({
            username:'',
            password:''
        })
    }


  return (
    <div className='main'>

      <h1>Login Page</h1>
      <form onSubmit={HandleLoginSubmit}>
        <input type='text' 
        name='username'
        placeholder='Username'
        value={loginData.username}
        onChange={handleloginChange}
        required />   

        <br/>
        <br/>

        <input type='password' 
        name='password'
        placeholder='Password'
        value={loginData.password}
        onChange={handleloginChange}
        required    
        />

<br/>
<br/>

        <button type='submit'>Login</button>
        <p>New User:- <Link to='/Registration'> Please register </Link>  </p>
      </form>
    </div>
  )
}

export default Login

// // PrevData ka role kya hai?
// Jab tum state update karte ho, React tumhe pichle (previous) state ka access deta hai through PrevData.
// PrevData me loginData ka current value hota hai.

// PrevData ensures ki tumhare purane state ka data lost na ho.
// Dynamic [name]: value se tum specific field ko update karte ho, bina baaki fields ko touch kiye.
// Samajh aya? Agar kuch aur detail chahiye ho toh batao! 😊