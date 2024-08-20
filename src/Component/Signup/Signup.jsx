import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./signup.module.css"
const Signup = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [confirmPassword,setConfirmPassword]=useState("");
  let [phone,setPhone]=useState("")
  function formHandel(e){
    e.preventDefault()
    console.log("form submitted")
    if(name=="" || email=="" ||password=="" || phone==""){
      alert("Please enter your details")
    }
    else{
      alert("register successfully")
    }
  }
  return (
    <div className={style.head}>
      <div className={style.form}>
        <h1>SignUp</h1>
        <hr style={{height:"2px",width:"200px",border:"none",backgroundColor:"rgb(129, 192, 132)"}}/>
        <form action="">
          <input type="text"  placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password"  placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <input type="password"  placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          <input type="number"  placeholder="Phone number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          <select name="" id="">
            <option value="">Customer</option>
            <option value="">Admin</option>
            <option value="">Employee</option>
          </select>
          <button onClick={formHandel}>Register</button>
          <button id={style.btn}><Link to={"/signin"} style={{color:"rgb(54, 83, 55)",textDecoration:"none",fontSize:"23px"}}>Signin</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Signup