import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addcolor } from './store/thaliSlice';
import Timer from './Timer';

function Checkout() {
    const select = useSelector((state)=> state.thalislice.va);
    const select1 = useSelector((state)=> state.thalislice.mv);
    const name = useSelector((state)=> state.thalislice.nm);
     const flag = useSelector((state) => state.thalislice.color);
     const dispatch = useDispatch();
     const navigate = useNavigate();
    setTimeout(() => {
        dispatch(addcolor(false));
    },310000);
    
    const pay = ()=>{
        navigate("/booked")
    }
    const back = ()=>{
        navigate('/ticket')
    }
  return (
    <div>
      { flag ?<> <Timer/><br /><br /><Box sx={{maxWidth:"400px",maxHeight:"400px",border:"2px solid black",marginLeft:"490px",marginBottom:"20px"}}>
    {
           select.map((v)=>{
               return ( <Box  sx={{marginTop:"10px"}}>
                   <Typography>Seat No :  {v.id}</Typography>
               </Box>)
           })
       }
        <Box>
                {
                  select1.map((val)=>{
                          return(<Box>
                           <Typography>Movie Name : {val.title}</Typography><br />
                           <Typography>Customer Name :  {name}</Typography><br />
                           </Box>
                          )
                       })
                   }
        </Box>
        
         
       <h2> Total Amount : 
       {
           select.reduce((acc,curr)=>{
               acc = acc + curr.price 
               return acc;
           },0)
       }
       </h2> </Box>
       <Button  variant="contained" name='submit' sx={{marginTop:"20px"}} onClick={back}>Go Back</Button>&nbsp; &nbsp;
        <Button  variant="contained" name='submit' sx={{marginTop:"20px"}} onClick={pay}>Pay Now</Button>
       </>:<h1>Sorry Time is Over....</h1>
       }

    </div>
  )
}

export default Checkout;