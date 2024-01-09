/* eslint-disable react/prop-types */

import {  Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function SwitchCurrency({flg,value,setValue}) {
  const dataFilter=flg.filter((iteam)=> iteam.currencies);
   const dataCountries= dataFilter.map((itm)=>{
    return `${itm.flag} ${Object.keys(itm.currencies)} -${itm.name.common} `;
   } );
  return (
    <>
    <Grid item xs={12} md> 

            <Autocomplete
                value={value}
                onChange={(e,newValue)=>{
                  setValue(newValue);
                  console.log(newValue)
              } }
                id="combo-box-demo"
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label="Select Coutry" />}
                />
    
    </Grid>
    </>
  )
}

export default SwitchCurrency