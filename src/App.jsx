import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Registration from "./Component/Register/Registration";
import ExpenseTracker from "./Component/ExpenseTracker/ExpenseTracker";
import AddExpense from "./Component/AddExpense/AddExpense";
import ExpenseList from './Component/ExpenseList/ExpenseList'
import Home from "./Component/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/ExpenseTracker" element={<ExpenseTracker />}></Route>
          <Route path="/AddExpense" element={<AddExpense/>}></Route>
          <Route path="/ExpenseList" element={<ExpenseList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
