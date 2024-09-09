import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashnav from '../Nav/Dashnav'
import Form from '../Form/Form'
import style from "../Menu/New/create.module.css"
const New = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Dashnav/>
      </div>
      <div className={style.part2}>
        <Form menu="Employee" menuLable="Employee" parent="Designation" place="New Employee" place2="Designation"/>
      </div>
    </div>
  )
}

export default New