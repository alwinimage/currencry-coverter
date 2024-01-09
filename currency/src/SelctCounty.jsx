/* eslint-disable react/prop-types */
import {  Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function SelctCounty({flg,value,setValue}) {
  // console.log(flg);
  const dataFilter=flg.filter((iteam)=> iteam.currencies);
  //  console.log(dataFilter);
   const dataCountries= dataFilter.map((itm)=>{
    return `${itm.flag} ${Object.keys(itm.currencies)} -${itm.name.common} `;
   } );
  //  console.log(dataCountries)
  return (
    <>
         <Grid item  xs={12} md> 

         <Autocomplete
          disableClearable
                value={value}
                onChange={(e,newValue)=>{
                  if(value===""){
                    value={value}
                  }
                  setValue(newValue);
                  console.log(newValue)
              } }
                id="combo-box-demo"
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label="FROM" />}
                />
         
         </Grid>
    </>
  )
}

export default SelctCounty