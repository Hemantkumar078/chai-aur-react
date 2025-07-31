import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import Inputbox from './components/Inputbox';
import Inputbox from './components/Inputbox';
function App() {
  const [to,setTo]=useState("inr");
  const [from,setFrom]=useState("usd");
  const [toAmount,setToAmount]=useState(0);
  const [fromAmount,setFromAmount]=useState(0);
  let currencyInfofrom=useCurrencyInfo(from);
  const currencyOptions=Object.keys(currencyInfofrom);
  return (<>
    <Inputbox 
    label='from' 
    amount={fromAmount} 
    currency={from} 
    onAmountchange={(e)=>{
      setFromAmount(e);
      ///setToAmount(e*(currencyInfofrom[to]));
      setToAmount(e * (currencyInfofrom[to] / currencyInfofrom[from]));
    }} 
    onCurrencychange={(e)=>{
      setFrom(e);
      setToAmount(e * currencyInfofrom[to]);
    }} 
    currencyOptions={currencyOptions}/>
    <Inputbox 
    label='to' 
    amount={toAmount}
    currency={to} 
    onAmountchange={(e)=>{
      setToAmount(e);
      setFromAmount(e/currencyInfofrom[to]);
    }}
    onCurrencychange={(e)=>{
      setTo(e);
      setToAmount(fromAmount*currencyInfofrom[e]);
    }}
    currencyOptions={currencyOptions}/>
    </>
  )
}
export default App;
