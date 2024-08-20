import React, { useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
import image from '../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg'
const Home = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count == 0) {
            setCount(count)
        }
        else {
            setCount(count - 1);
        }
    };
    const handleIncrement1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        if (count1 == 0) {
            setCount1(count1)
        }
        else {
            setCount1(count1 - 1);
        }
    };
    const handleIncrement2 = () => {
        setCount2(count2 + 1);
    };

    const handleDecrement2 = () => {
        if (count2 == 0) {
            setCount2(count2)
        }
        else {
            setCount2(count2 - 1);
        }
    };
    const handleIncrement3 = () => {
        setCount3(count3 + 1);
    };

    const handleDecrement3 = () => {
        if (count3 == 0) {
            setCount3(count3)
        }
        else {
            setCount3(count3 - 1);
        }
    };
    const handleIncrement4 = () => {
        setCount4(count4 + 1);
    };

    const handleDecrement4 = () => {
        if (count4 == 0) {
            setCount4(count4)
        }
        else {
            setCount4(count4 - 1);
        }
    };
    const handleIncrement5 = () => {
        setCount5(count5 + 1);
    };

    const handleDecrement5 = () => {
        if (count5 == 0) {
            setCount5(count5)
        }
        else {
            setCount5(count5 - 1);
        }
    };
      
    const [value,setValue]=useState('')
    const handelValue=(event)=>{
        const value=event.target.value
        setValue(value)
        if(value=="signin"){
            window.location.href="/signin"
        }
        else if(value=="signup"){
            window.location.href="/signup"
        }
        // else {
        //     window.location.href="/signup"
        // }
    }
    return (
        <div className={style.head}>
            <div className={style.nav}>
                <img src={image} alt="" />
                <select name="" id="" onChange={handelValue}>
                    {/* <option value=""><button><Link to={"//signup"} >/signup</Link></button></option>
                    
                    <option value=""><Link to={"/signin"} style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>Signin</Link></option> */}
                    <option value="">Select</option>  
                    <option value="signup"style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>signup</option>
                    <option value="signin" style={{ color: "rgb(262, 204, 24)", textDecoration: "none", fontSize: "20px", fontFamily: "serif" }}>Signin</option>
                </select>
            </div>
            <div className={style.h1}>
                {/* <h1>Craving Something?........</h1> */}
                <h5 style={{ color: "rgb(17, 67, 7)" }}>Let's get you started !</h5>
                <div className={style.search}>
                    <input type="text" placeholder='Let us know the location' />
                    <button>Search</button>
                </div>
            </div>


            <div className={style.menu}>
                <div className={style.menu1}>
                    <img style={{ height: "200px", width: "200px" ,marginTop:"-20px"}} src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
                    <div>
                        <div>
                            <h1 style={{ marginLeft: "60px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>Burger</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrement} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
                <div className={style.menu2}>
                    <img style={{ height: "200px", width: "200px" }} src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" alt="" />
                    <div>
                        <div>
                            <h1 style={{ marginLeft: "50px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>pencake</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement1} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span style={{ font: "30px" }}>{count1}</span>
                            <button onClick={handleIncrement1} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
                <div className={style.menu3}>
                    <img style={{ height: "200px", width: "200px" }} src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
                    <div>
                    <div>
                            <h1 style={{ marginLeft: "60px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>Burger</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span>{count2}</span>
                            <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
                <div className={style.menu4}>
                    <img style={{ height: "200px", width: "200px" }} src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" alt="" />
                    <div>
                    <div>
                            <h1 style={{ marginLeft: "50px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>pencake</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span>{count2}</span>
                            <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
                <div className={style.menu5}>
                    <img style={{ height: "200px", width: "200px" }} src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
                    <div>
                    <div>
                            <h1 style={{ marginLeft: "60px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>Burger</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span>{count2}</span>
                            <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
                <div className={style.menu6}>
                    <img style={{ height: "200px", width: "200px",marginBottom:"40px" }} src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" alt="" />
                    <div>
                    <div>
                            <h1 style={{ marginLeft: "50px", color: "rgb(25, 94, 40)",paddingBottom:"-70px",marginTop:"20px" }}>pencake</h1>
                        </div>
                        <div className={style.count}>
                            <button onClick={handleDecrement2} style={{ color: "white", fontWeight: "700", }}>-</button>
                            <span>{count2}</span>
                            <button onClick={handleIncrement2} style={{ color: "white", fontWeight: "700", }}>+</button>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: "65px", color: "goldenrod" }}>Price : 200</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div>
                    <button>Add To Cart</button>
                </div>
                <div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home