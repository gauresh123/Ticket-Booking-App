import { Alert, Box, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addnm } from './store/thaliSlice';

function Home() {
  const [flag,setflag] =useState(false);
  const navi = useNavigate();
  const dispatch = useDispatch();
  

  const click = (e)=>{
     e.preventDefault();
     const data = new FormData(e.target);
     const newdata = {
       text : data.get('name'),
       email: data.get('email'),
       password:data.get('password')
     }
    if(newdata.text && newdata.email && newdata.password){
      dispatch(addnm(newdata.text));
      navi("/movies"); 
      setflag(false);
    }else{
      setflag(true);
    }
      }
  return (
    <div>
      <h1 style={{color:"#212121",marginLeft:'35px'}}>Ticket Booking App...</h1>
      <Box sx={{maxWidth:"700px",maxHeight:"450px",marginLeft:'360px',marginTop:'50px',border:"2px solid black" }}>
       <form onSubmit={click}>   
           <h1>Register Here</h1>
             <FormControl  sx={{ m: 1,width:'600px' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Name"
            type= "text"
            name = "name"
          />
        </FormControl>
        <Box>
        <FormControl  sx={{ m: 1,width:'600px' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Email"
            type = "email"
            name = "email"

          />
        </FormControl>
        </Box>
         <Box>
        <FormControl  sx={{ m: 1,width:'600px' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Password"
            type = "password"
            name = "password"
          />
        </FormControl>
        
        </Box>
        {
        flag?<Alert severity="error" sx={{width:"600px",marginLeft:'30px'}}>Please Enter Valid Data</Alert>:null
      }

        <Button type='submit' variant="contained" name='submit' sx={{marginTop:"20px",marginLeft:'40px',marginBottom:'10px'}}>Go To Movies</Button>

        </form>
      </Box>
    
    </div>
  )
}

export default Home;
