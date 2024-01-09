
import { Container, Grid, Typography } from '@mui/material';
import './App.css'
import InputAm from './InputAm';
import SelctCounty from './SelctCounty';
import SwitchCurrency from './SwitchCurrency';
import axios from 'axios';
import { useEffect, useState } from "react"
function App() {
  
  const [data,setData]=useState([]);


  const [fromCurrency,setfromCurrency]=useState("🇺🇸 USD -United States ");

  const [toCurrency,settoCurrency]=useState("🇮🇳 INR -India ");

  const [intialAmount,setAmount]=useState("1");

  const[resultCu,setResultcu]= useState("0");

  // const fromCode=fromCurrency.slice(5,9);
  // const toCode=toCurrency.slice(5,9);
  // console.log(fromCurrency)

  const fromCode=fromCurrency.split(' ')[1];
  const toCode=toCurrency.split(' ')[1];
  // console.log(fromCode);
  console.log(resultCu);

  
    useEffect (  () => {
       const fetchdata= async()=>{
              try{
                 
                  const reposnse=  await axios ('https://restcountries.com/v3.1/all ');  
                  // console.log(reposnse.data)
                  setData (reposnse.data);
              }
              catch (error){
                  console.log(error)
              }
       }
       fetchdata();
    },[]);

useEffect(()=>{
  if(intialAmount){
  const fetchData= async ()=>{
    try{
      const reposnse=  await axios ('https://api.freecurrencyapi.com/v1/latest',{
        params:{
          apikey: "fca_live_1Z1ieI4ojJr4CY4IJ8vYVEmR5doXliWbH52oSVZM",
          base_currency: fromCode,
          currencies:toCode
        }
      })
      setResultcu(reposnse.data.data[toCode]);
    }
    catch (error){
      console.log(error)
    } 
    
  }
  fetchData();}
},[ intialAmount,fromCode, toCode,resultCu])



return (

    
    <>
    <Container maxWidth="md">
        
        <Grid container spacing={2} >
          <InputAm amount={intialAmount} setAmount={setAmount}/>
          <SelctCounty flg={data} value={fromCurrency}  setValue= {setfromCurrency} />
          <SwitchCurrency flg={data} value={toCurrency}  setValue= {settoCurrency}/>
        </Grid>
<Typography> {intialAmount} {fromCurrency }</Typography>
<Typography> {resultCu*intialAmount} {toCurrency }</Typography>
    
    </Container>
        
    </>
  )
}

export default App
