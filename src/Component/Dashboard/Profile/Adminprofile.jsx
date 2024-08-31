import React from 'react'
import image from "../../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg"
import style from "./admin.module.css"
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Adminprofile = () => {
    return (
        <div className={style.Adminprofile}>
            <div className={style.part1}>
                <div>
                    <img src={image} alt="" />
                    <h1>NuaScan</h1>
                </div>
            </div>
            <div className={style.part2}>
                <div className={style.section1}>
                    <h2>Location</h2>
                    <h4>Bhubaneswar,Odisha</h4>
                </div>
                <div className={style.section2}>
                    <h2 >987654321</h2>
                    <h2>nuascan@gmail.com</h2>
                </div>
                <div className={style.section3}>
                    <XIcon style={{color:"rgb(1, 108, 170)"}}/>
                    <FacebookIcon style={{color:"blue"}}/>
                    <InstagramIcon style={{color:"purple"}}/>
                </div>
                <div className={style.section4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos aliquid ut eum magni accusamus eaque voluptatibus beatae! Quaerat excepturi, omnis quod repellendus amet recusandae libero soluta? Molestias, saepe amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui quaerat ipsa, porro repellendus odit nemo. Est quae, doloribus dolore ducimus consequuntur accusamus alias illo ea, deserunt commodi voluptates itaque?
                </div>
            </div>
        </div>
    )
}

export default Adminprofile