import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import style from "./create.module.css"
import Dashnav from '../../Nav/Dashnav'
import Form from '../../Form/Form'
const Create = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <div>
        <Dashnav />
        <div className={style.part2}>

          <Form menu="Item" menuLable="category" parent="Parent Category" place="Create new category" place2="Parent category"/>
        </div>
      </div>
    </div>
  )
}

export default Create