    import React from 'react'
    import { Link } from 'react-router-dom'
    import '../Home/Home.css'

    function Home() {
      return (
        <div className='main'>
          <h1>Expense Teacker </h1>
          <div className='btn'>
         <Link to='/Registration'>  <button> Please Registration</button></Link>
          </div>
        </div>
      )
    }
    
    export default Home
    