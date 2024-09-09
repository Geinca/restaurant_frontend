import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./select.module.css"

export default function BasicSelect() {
  const [menu, setMenu] = React.useState('');

  const handleChange = (event) => {
    // setMenu(event.target.value);
    const value = event.target.value
    
    setMenu(value)
        if (value == "catagory") {
            window.location.href = "/catagory"
        }
        else if (value == "create") {
            window.location.href = "/create"
        }
  };

  return (
    <Box className={style.box} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Menu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={menu}
          label="Menu"
          onChange={handleChange}
          style={{color:"white"}}
        >
          <MenuItem value="catagory" >All catagory</MenuItem>
          <MenuItem value="create" >Create catagory</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
