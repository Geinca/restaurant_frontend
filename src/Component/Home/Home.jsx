import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className={style.head}>
            <div className={style.nav}>
                <button><Link to={"/signup"} style={{color:"rgb(232, 204, 24)",textDecoration:"none",fontSize:"26px",fontFamily:"serif"}}>Signup</Link></button>
                <button><Link to={"/signin"} style={{color:"rgb(262, 204, 24)",textDecoration:"none",fontSize:"26px",fontFamily:"serif"}}>Signin</Link></button>
            </div>
            <div className={style.h1}>
                <h1>Craving Something?........</h1>
                <h5 style={{color:"rgb(118, 179, 56)"}}>Let's get you started !</h5>
                <div className={style.search}>
                    <input type="text" placeholder='Let us know the location' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home