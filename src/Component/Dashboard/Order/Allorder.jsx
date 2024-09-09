import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashnav from '../Nav/Dashnav'
import Menutable from '../Table/Menutable'
import style from "../Menu/All/all.module.css"
const Allorder = () => {
    const order = [
        { catagory: "Parata" ,food:"200"},
        { catagory: "Dosa" ,food:"100"},
        { catagory: "Pasta" ,food:"200"},
        { catagory: "Parata",food:"400" },
        { catagory: "Parata",food:"400"  },
        { catagory: "Parata" ,food:"400" }, 
        { catagory: "Parata" ,food:"400" }, 
      ]
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Dashnav/>
        </div>
        <div className={style.part2}>
            <Menutable head="ORDER NAME" head2="PRICE" head3="ACTION" dice={order} btn="Accept"/>
        </div>
    </div>
  )
}

export default Allorder