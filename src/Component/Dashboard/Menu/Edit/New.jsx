import React, { useState } from 'react'
import style from "./new.module.css"
const New = () => {
  const [image, setImage] = useState([])
  function onImageChange(e) {
    setImage([...e.target.files])
  }
  return (
    <div className={style.edit}>
      <div>
      <h1 style={{ color: "white", fontSize: "40px", paddingBottom: "20px" }}>New Item to Add</h1>
      </div>
      <form action="">
        <div>
        <div className={style.part1}>
          <input type="text" placeholder='Disc name' />
          <input type="text" placeholder='price' />
        </div>
        <div className={style.part2}>
          <input type="file" multiple accept="image" onChange={onImageChange} style={{ paddingLeft: "70px" }} />
          <textarea name="" id="">Description</textarea>
        </div>
        </div>
        <button>Upload</button>
      </form>
    </div>
  )
}

export default New