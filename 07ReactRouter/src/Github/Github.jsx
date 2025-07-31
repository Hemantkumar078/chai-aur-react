import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([]);//loader is most faster then useEffect its preloads the data before the component renders
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hemantkumar078').then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     })
    //     .catch((err) => console.log(err));
    // },[])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Github :{data.followers}</div>
  )
}

export default Github