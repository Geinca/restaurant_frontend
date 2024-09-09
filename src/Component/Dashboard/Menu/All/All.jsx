import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Dashnav from '../../Nav/Dashnav'
import style from "./all.module.css"
import Menutable from '../../Table/Menutable'
const All = () => {
  const item = [
    { catagory: "North Indian" ,food:"Dosa"},
    { catagory: "South Indian" ,food:"idli"},
    { catagory: "Italian" ,food:"pasta"},
    { catagory: "North Indian",food:"parata" },
    { catagory: "North Indian",food:"parata"  },
    { catagory: "North Indian" ,food:"parata" }, 
    { catagory: "North Indian" ,food:"parata" }, 
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
        <Menutable head="CATEGORY NAME" head2="PARENT CATEGORY" head3="ACTION" dice={item}/>
      </div>
    </div>
  )
}

export default All