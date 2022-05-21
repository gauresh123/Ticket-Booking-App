import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  addmovi } from './store/thaliSlice';
function Movies() {
    const movie = [
        {title:"Pavankhind",img:"https://wallpapercave.com/dwp1x/wp10795275.jpg"},
        {title:"Fatteshikast",img:"https://wallpapercave.com/wp/wp8306016.jpg"},
        {title:"Farzand",img:"https://wallpapercave.com/wp/wp8586433.jpg"},
    ]
    const dispatch = useDispatch();
    const nav = useNavigate();

    const show = (value)=>{
        dispatch(addmovi(value));
        nav("/ticket");
    }
  return (
    <div>
      <br />
      <Box sx={{display:"flex",justifyContent:"center",alignItems:'center',marginLeft:"100px"}}>
      {
          movie.map((value)=>{
              return (
                  
                <Box sx={{flexGrow:1}}>              
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={value.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="larg" onClick={(()=> show(value))}>Book Show</Button>
      </CardActions>
    </Card> <br /><br />
</Box>
  
              )
          })
      }
      </Box>
    </div>
  )
}

export default Movies
