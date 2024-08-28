import React from 'react'
import style from "./dashboard.module.css"
import { Grid, Card } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import image from "../Assets/WhatsApp Image 2024-08-17 at 09.02.55_2451e7de.jpg";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Link } from 'react-router-dom'
import OutboundIcon from '@mui/icons-material/Outbound';
import Bar from './Bar';

const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <div className={style.part1}>
        <div className={style.img}>
          <img src={image} alt="" />
          <h1>NuaScan</h1>
        </div>
        <div className={style.list}>
          <h4><Link to={"/dashboard"} style={{ textDecoration: "none", color: "chocolate", fontSize: "24px", paddingTop: "25px" }}>Dashboard</Link></h4>
          <h4><Link to={"/order"} style={{ textDecoration: "none", color: "chocolate", fontSize: "24px", paddingTop: "25px" }}>Order status</Link></h4>
          <h4><Link to={"/menu"} style={{ textDecoration: "none", color: "chocolate", fontSize: "24px", paddingTop: "25px" }}>Menu</Link></h4>
        </div>
        <div className={style.setting}>
          <SettingsApplicationsIcon />
          <h3>Settings</h3>
        </div>
      </div>
      <div className={style.part2}>
        <div className={style.section}>
          <SearchIcon style={{ marginLeft: "20px", color: "grey" }} />
          <div className={style.section1}>
            <div><Link to={"/notification"}><NotificationsActiveIcon style={{ color:"grey" }} /></Link></div>
            <div><Link to={"/profile"}><AccountBoxIcon style={{ color: "grey" }} /></Link></div>
          </div>
        </div>
        <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={"20px"} className={style.Grid}>
          <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} className={style.Grid1}>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total menu</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total Order</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total revenue</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />

                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" className={style.secson}>
              <Card style={{ height: "100%", width: "90%", padding: "10px", border: "1px solid grey", boxShadow: "0px 0px 5px grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ fontSize: "20px", color: "rgb(74, 74, 74)", paddingTop: "20px" }}>Total Customer</h1>
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
                  <h3 style={{ color: "rgb(74, 74, 74)" }}>100</h3>
                  <OutboundIcon style={{ color: "green" }} />
                </div>
                <h3 style={{ color: "rgb(74, 74, 74)" }}>40%</h3>

              </Card>
            </Grid>

          </Grid>
        </Grid>
        <Grid container paddingLeft={"150px"} paddingTop={"20px"} >
          <Bar />

        </Grid>
        <div className={style.table}>
          <table>
            <tr>
              <th colSpan={6} style={{ fontSize: "30px", height: "5%", width: "100%", border: "1px solid grey", borderRadius: "8px", backgroundColor: "rgba(199, 195, 195, 0.703)", boxShadow: "0px 0px 10px black" }}>Order list</th>
            </tr>
            <tr className={style.row1} >
              <th>Order number</th>
              <th>Table number</th>
              <th>Order name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Order status</th>
            </tr>
            <tr className={style.row2}>
              <td style={{ paddingLeft: "70px" }}>1</td>
              <td style={{ paddingLeft: "70px" }}>12</td>
              <td style={{ paddingLeft: "70px" }}>pizza</td>
              <td style={{ paddingLeft: "50px" }}>3</td>
              <td style={{ paddingLeft: "40px" }}>200</td>
              <td style={{ paddingLeft: "100px" }}>
                <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"7px"}}>Accept</button>
                <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"7px"}}>Delete</button>
              </td>
            </tr>
            <tr className={style.row2}>
              <td style={{ paddingLeft: "70px" }}>1</td>
              <td style={{ paddingLeft: "70px" }}>12</td>
              <td style={{ paddingLeft: "70px" }}>pizza</td>
              <td style={{ paddingLeft: "50px" }}>3</td>
              <td style={{ paddingLeft: "40px" }}>200</td>
              <td style={{ paddingLeft: "100px" }}>
                <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"7px"}}>Accept</button>
                <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"7px"}}>Delete</button>
              </td>
            </tr>
            <tr className={style.row2}>
              <td style={{ paddingLeft: "70px" }}>1</td>
              <td style={{ paddingLeft: "70px" }}>12</td>
              <td style={{ paddingLeft: "70px" }}>pizza</td>
              <td style={{ paddingLeft: "50px" }}>3</td>
              <td style={{ paddingLeft: "40px" }}>200</td>
              <td style={{ paddingLeft: "100px" }}>
                <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"7px"}}>Accept</button>
                <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"7px"}}>Delete</button>
              </td>
            </tr>
            <tr className={style.row2}>
              <td style={{ paddingLeft: "70px" }}>1</td>
              <td style={{ paddingLeft: "70px" }}>12</td>
              <td style={{ paddingLeft: "70px" }}>pizza</td>
              <td style={{ paddingLeft: "50px" }}>3</td>
              <td style={{ paddingLeft: "40px" }}>200</td>
              <td style={{ paddingLeft: "100px" }}>
                <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"7px"}}>Accept</button>
                <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"7px"}}>Delete</button>
              </td>
            </tr>
            <tr className={style.row2}>
              <td style={{ paddingLeft: "70px" }}>1</td>
              <td style={{ paddingLeft: "70px" }}>12</td>
              <td style={{ paddingLeft: "70px" }}>pizza</td>
              <td style={{ paddingLeft: "50px" }}>3</td>
              <td style={{ paddingLeft: "40px" }}>200</td>
              <td style={{ paddingLeft: "100px" }}>
                <button style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"7px"}}>Accept</button>
                <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"7px"}}>Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard