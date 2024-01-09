/* eslint-disable react/prop-types */
import {  Grid, TextField } from '@mui/material';

function InputAm({amount,setAmount}) {
  // console.log(amount)
  return (
    <Grid item xs={12} md> 

        <TextField 
        value={amount}
        onChange={(e)=>setAmount(e.target.value) }
        fullWidth label="Amount" InputProps={{type:"number"}}/> 

    </Grid>

  )
}

export default InputAm