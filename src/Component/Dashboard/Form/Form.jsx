import React from 'react'
import style from "./form.module.css"
const Form = (props) => {
  return (
    <div>
        <form action="">
            <h1>Create New {props.menu}</h1>
            <div>
              <label htmlFor="">Create new {props.menuLable}:</label>
              <input type="text" placeholder={props.place}/>
            </div>
            <div style={{marginTop:"-40px"}}>
              <label htmlFor=""> {props.parent}:</label>
              <input type="text" placeholder={props.place2} />
            </div>
            <button>Submit</button>
          </form>
    </div>
  )
}

export default Form