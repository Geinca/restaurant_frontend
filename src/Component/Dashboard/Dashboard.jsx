import React from 'react'
import style from "./dashboard.module.css"
import { Grid, Card } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { Link } from 'react-router-dom'
import OutboundIcon from '@mui/icons-material/Outbound';
import Line from './Line';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import InputBase from '@mui/material/InputBase';
import Footer from '../Footer/Footer';
import Tablebar from './Table';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from './Sidebar/Sidebar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(ordernum, name, table, quantity, price) {
  return { ordernum, name, table, quantity, price };
}

const rows = [

  createData(1, 'Ice cream sandwich', 2, 2, 500),
  createData(2, 'Pasta', 12, 1, 240),
  createData(3, 'Cupcake', 5, 3, 300),
  createData(4, 'Pizza', 6, 6, 1000),
];

const Dashboard = () => {
  const [data, setData] = React.useState(rows);

  const handleSave = (row) => {
    // TO DO: implement save logic here
    console.log('Save button clicked:', row);
  };

  const handleDelete = (row) => {
    // TO DO: implement delete logic here
    console.log('Delete button clicked:', row);
    const newData = data.filter((item) => item.name !== row.name);
    setData(newData);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid grey',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));



  return (
    <div className={style.Dashboard}>
      <div className={style.part1}>
        <Sidebar/>
      </div>

      <div className={style.part2}>

        <div className={style.section} style={{ height: "80px" }}>
          <h2>Dashboard</h2>
          <Search style={{ width: "500px", marginLeft: "-280px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div className={style.section1}>
            <div><Link to={"/notification"}><NotificationsActiveIcon style={{ color: "grey" }} /></Link></div>
            <div><Link to={"/profile"}><AccountBoxIcon style={{ color: "grey" }} /></Link></div>
          </div>
        </div>
        <Grid container direction="row" justifyContent="center" textAlign="center" alignItems="center" p={"20px"} >
          <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6}>
            <Grid item lg={3} sm={6} textAlign="center">
              <Card style={{ height: "100%", width: "100%", padding: "10px", border: "none", boxShadow: "20px 20px 31px 0px rgba(150,144,150,1)", backgroundColor: " #ff8928", borderRadius: "15px" }}>
                <h1 style={{ fontSize: "27px", color: "black", paddingTop: "10px", marginLeft: "-59px" }}>Total menu</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h1 style={{ color: "rgb(74, 74, 74)", paddingTop: "10px" }}>10,000</h1><MenuBookIcon style={{ marginTop: "14px", color: "rgb(76, 76, 76)" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h4 style={{ color: "rgb(74, 74, 74)" }}>40 new item added <br />Monthly</h4>
                  <OutboundIcon style={{ color: "green" }} />
                </div>

              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" >
              <Card style={{ height: "100%", width: "100%", padding: "10px", border: "none", boxShadow: "20px 20px 31px 0px rgba(150,144,150,1)", backgroundColor: "#00DDFF", borderRadius: "15px" }}>
                <h1 style={{ fontSize: "27px", color: "black", paddingTop: "10px", marginLeft: "-30px" }}>Total Order</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h1 style={{ color: "rgb(74, 74, 74)", paddingTop: "10px" }}>10,000</h1><ShoppingCartCheckoutIcon style={{ marginTop: "14px", color: "rgb(76, 76, 76)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h4 style={{ color: "rgb(74, 74, 74)" }}>40% Grow in order <br />Monthly</h4>
                  <OutboundIcon style={{ color: "green" }} />
                </div>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" >
              <Card style={{ height: "100%", width: "100%", padding: "10px", border: "none", boxShadow: "20px 20px 31px 0px rgba(150,144,150,1)", backgroundColor: "#9bc400", borderRadius: "15px" }}>
                <h1 style={{ fontSize: "27px", color: "black", paddingTop: "10px", marginLeft: "-20px" }}>Total revenue</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h1 style={{ color: "rgb(74, 74, 74)", paddingTop: "10px" }}>10,000</h1><DriveFolderUploadIcon style={{ marginTop: "14px", color: "rgb(76, 76, 76)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h4 style={{ color: "rgb(74, 74, 74)" }}>40% Grow in revenue <br />Monthly </h4>
                  <OutboundIcon style={{ color: "green" }} />
                </div>
              </Card>
            </Grid>
            <Grid item lg={3} sm={6} textAlign="center" >
              <Card style={{ height: "100%", width: "100%", padding: "10px", border: "none", boxShadow: "20px 20px 31px 0px rgba(150,144,150,1)", backgroundColor: "#e1b382", borderRadius: "15px" }}>
                <h1 style={{ fontSize: "27px", color: "black", paddingTop: "10px", marginLeft: "-10px" }}>Total Customer</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h1 style={{ color: "rgb(74, 74, 74)", paddingTop: "10px" }}>10,000</h1><AccountCircleIcon style={{ marginTop: "14px", color: "rgb(76, 76, 76)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <h4 style={{ color: "rgb(74, 74, 74)" }}>40% Grow in customer <br />Monthly</h4>
                  <OutboundIcon style={{ color: "green" }} />
                </div>
              </Card>
            </Grid>

          </Grid>
        </Grid>

        <Tablebar />
        <Grid container marginLeft={"65px"} padding={"30px"} height={"75%"} width={"90%"} border={"none"} boxShadow={" 1px 14px 52px -18px rgba(0,0,0,0.75)"} backgroundColor={"white"} borderRadius={"10px"} marginTop={"20px"} >
          <Line />

        </Grid>
        <div className={style.table}>
          <section>
            <div>
              <h1 colSpan={6} style={{ fontSize: "30px", height: "65px", width: "99%", border: "1px solid grey", boxShadow: " 1px 14px 52px -18px rgba(0,0,0,0.75)", backgroundColor: "white", borderRadius: "15px", textAlign: "center", paddingTop: "15px" }}>Order list</h1>
            </div>


         


          </section>
        </div>

        <div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Dashboard