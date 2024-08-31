import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import style from "./staff.module.css"
import Skeleton from '@mui/material/Skeleton';
import { color } from 'chart.js/helpers';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      name: 'Jhon',
      work_as: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      salary: 'Don Diablo',
      joining_date: 'a week ago',
    },
    {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      name: 'Jhon',
      work_as: 'Queen - Greatest Hits',
      salary: 'Queen Official',
      joining_date: '3 years ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      name: 'Jhon',
      work_as: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      salary: 'Calvin Harris',
      joining_date: '10 months ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        name: 'Jhon',
        work_as: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        salary: 'Calvin Harris',
        joining_date: '10 months ago',
      },
      {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      name: 'Jhon',
      work_as: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      salary: 'Calvin Harris',
      joining_date: '10 months ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        name: 'Jhon',
        work_as: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        salary: 'Calvin Harris',
        joining_date: '10 months ago',
      },
  ];


  function Media(props) {
    const { loading = false } = props;
    
  
    return (
      <Grid container sx={{ flexWrap: 'nowrap',  marginLeft: '80px'}}>
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 3, my: 5 ,border:'3px solid teal',borderRadius:'5px',boxShadow:'0px 0px 10px teal',display:'flex',flexDirection:'column',padding:'3px',color:'white',backgroundColor:'rgba(0,0,0,.5)'}}>
            {item ? (
              <img
                style={{ width: 200, height: 118,borderRadius:'5px' }}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
  
            {item ? (
              <Box sx={{ pr: 2}} >

                <Typography gutterBottom variant="body2" >
                  {item.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: 'white' }}
                >
                  {item.work_as}
                </Typography>
                <Typography variant="caption" sx={{ color: 'white' }}>
                  {`${item.salary} • ${item.joining_date}`}
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <button style={{height:"30px",width:"60px",margin:'20px',cursor:'pointer'}}>Edit</button><button style={{height:"30px",width:"60px",cursor:'pointer'}}>Delete</button>
              </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  }
  
  Media.propTypes = {
    loading: PropTypes.bool,
  };

export default function Staff() {
    
  return (
    <div className={style.staff}>
       
      <Box sx={{ overflow: 'hidden' }}>
      {/* <Media loading /> */}
      <Media/>
      <Media/>
    </Box>

    
    </div>

    
  );
}
