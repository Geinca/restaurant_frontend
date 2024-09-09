import React from 'react'
import style from "./menutable.module.css"
const Menutable = (props) => {
  return (
    <div>
        <table className={style.table}>
          <tr>
            <th><h2>{props.head}</h2></th>
            <th><h2>{props.head2}</h2></th>
            <th><h2>{props.head3}</h2></th>
          </tr>
          <tr>
            <td><h4>{props.dice[0].catagory}</h4></td>
            <td><h4>{props.dice[0].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[1].catagory}</h4></td>
            <td><h4>{props.dice[1].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[2].catagory}</h4></td>
            <td><h4>{props.dice[2].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[3].catagory}</h4></td>
            <td><h4>{props.dice[3].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[4].catagory}</h4></td>
            <td><h4>{props.dice[4].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[5].catagory}</h4></td>
            <td><h4>{props.dice[5].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
          <tr>
            <td><h4>{props.dice[6].catagory}</h4></td>
            <td><h4>{props.dice[6].food}</h4></td>
            <td className={style.btn}>
              <button style={{backgroundColor:"green"}}>Edit</button>
              <button style={{backgroundColor:"red"}}>Delete</button>
            </td>
          </tr>
        </table>
    </div>
  )
}

export default Menutable