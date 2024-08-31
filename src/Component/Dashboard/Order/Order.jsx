import React from 'react'
import style from "./order.module.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
 
  createData(1,'Ice cream sandwich', 2, 2, 500),
  createData(2,'Pasta', 12, 1, 240),
  createData(3,'Cupcake', 5, 3, 300),
  createData(4,'Pizza', 6, 6, 1000),
];


  
const Order = () => {
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
    return (
        <div className={style.table}>
          <section>
            <div>
              <h1 colSpan={6} style={{ fontSize: "30px", height: "65px", width: "90%", border: "1px solid grey", borderRadius: "8px", backgroundColor: "rgba(199, 195, 195, 0.703)", boxShadow: "0px 0px 10px black", textAlign: "center", paddingTop: "15px" }}>Order list</h1>
            </div>


            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Order Number</StyledTableCell>
                    <StyledTableCell align="right">Order Name</StyledTableCell>
                    <StyledTableCell align="right">Table Number</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Order Satus</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.ordernum}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.name}</StyledTableCell>
                      <StyledTableCell align="right">{row.table}</StyledTableCell>
                      <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                      <StyledTableCell align="right">{row.price}</StyledTableCell>

                      <StyledTableCell align="right">
                        <Button onClick={() => handleSave(row)}>Save</Button>
                        <Button onClick={() => handleDelete(row)}>Delete</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </section>
        </div>
    )
}

export default Order