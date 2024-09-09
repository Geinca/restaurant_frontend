import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashnav from '../Nav/Dashnav'
import Menutable from '../Table/Menutable'
import style from "../Menu/All/all.module.css"
const Allemployee = () => {
  const employee = [
    {catagory: "Jhon" ,food:"Maneger"},
    {catagory: "Mama" ,food:"waiter"},
    {catagory: "Rohan" ,food:"Waiter"},
    {catagory: "Ram",food:"Shaff" },
    {catagory: "Ramesh",food:"Shaff"  },
    {catagory: "Puja" ,food:"Shaff" }, 
    {catagory: "Jhon" ,food:"Shaff" }, 
  ]
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashnav />
      </div>
      <div className={style.part2}>
        <Menutable head="EMPLOYEE NAME" head2="DESIGNATION" head3="ACTION" dice={employee}/>
      </div>
    </div>
  )
}

export default Allemployee