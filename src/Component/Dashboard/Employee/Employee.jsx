import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./employee.module.css"

export default function Employee() {
  const [menu, setMenu] = React.useState('');

  const handleChange = (event) => {
    // setMenu(event.target.value);
    const value = event.target.value
    
    setMenu(value)
        if (value == "employee") {
            window.location.href = "/employee"
        }
        else if (value == "new") {
            window.location.href = "/new"
        }
  };

  return (
    <Box className={style.box} >
       <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} >
        <InputLabel className="demo-simple-select-filled-label" style={{ color: "white" ,fontSize:"20px",paddingTop:"10px"}}>Employee</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value="Menu"
          onChange={handleChange}
        >
          <MenuItem value="employee" >All Employee</MenuItem>
          <MenuItem value="new" >Create Employee</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
