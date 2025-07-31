import {useState} from 'react'

function Inputbox({label,amount,currency,onAmountchange,onCurrencychange,currencyOptions,className}) {
  return (
    <div className={className}>
        <label htmlFor={label}>{label}</label>
        <input type="number" id={label} placeholder='Amount' value={amount} onChange={(e)=>onAmountchange(e.target.value)}/>
        <select value={currency} onChange={(e)=>onCurrencychange(e.target.value)}>
            {
                currencyOptions.map((item)=>(
                    <option  key={item} value={item}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Inputbox;