import React from 'react'
import style from "./sidebar.module.css"
import { Link } from 'react-router-dom';
import image from "../../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MenuIcon from '@mui/icons-material/Menu';
import Person4Icon from '@mui/icons-material/Person4';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Select from "../Menu/Select"
import Employee from '../Employee/Employee';
import Order from '../Order/Order';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className={style.part1}>
        <div className={style.img}>
          <img src={image} alt="" />
          <h1>NuaScan</h1>
        </div>
        <div className={style.list}>
          <h4><Link to={"/dashboard"} style={{ textDecoration: "none", color: "white", fontSize: "29px" }}>Dashboard</Link></h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MenuIcon style={{ marginTop: "30px" }} /><Select />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Person4Icon style={{ marginTop: "30px" }} /><Employee />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ShoppingCartIcon style={{ marginTop: "30px" }} /><Order />
          </div>
          
          
        </div>
        <div className={style.setting}>

          <h3 ><SettingsApplicationsIcon style={{ marginRight: "2px", paddingTop: "7px" }} />Settings</h3>
          <h3>Log Out<LogoutIcon style={{ paddingTop: "7px" }} /></h3>
        </div>
    </div>
  )
}

export default Sidebar