import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {produce} from "immer";

function App() {
  //let counter=15;
  let [counter,setCounter]=useState(15);
  let [profile,setProfile]=useState({user: {
                                            preferences: {
                                                         theme: {
                                                                 color: "blue"
                                                                }
                                                           }
                                            }
                                    });
  let addValue=  ()=>{
    if(counter<20){
    setCounter(counter=>{
      if(counter+1==20){
        setProfile(profile=>
          produce(profile,newprofile=>{
            newprofile.user.preferences.theme.color="red";
          })
        );
      }
      return counter+1;
    });
    }
    // if(counter==20){
    //   profile.user.preferences.theme.color="red";
    //   setProfile(profile);
    // }
   // console.log("clicked : ", Math.random(), counter);
  }
  let removeValue=()=>{
    if(counter>0){
     setCounter(counter=>{
      if(counter-1==0){
        setProfile(profile=>
          produce(profile,newprofile=>{
          newprofile.user.preferences.theme.color="green";
        })
      );
    }
     return counter-1;});
    }
    // if(counter==0){
    //   profile.user.preferences.theme.color="green";
    //   setProfile(profile);
    // }
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2> counter value : {counter} </h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value {counter}</button>
     <h1>Profile colour is {profile.user.preferences.theme.color}</h1>
    </>
  )
}

export default App

// function App() {
//   const [profile, setProfile] = useState({
//     user: {
//       name: "Alice",
//       age: 25
//     }
//   });

//   const updateName = () => {
//     // avoid Direct mutation make a deepcopy 
//     //let newprofile=JSON.parse(JSON.stringify(profile)); 
//     let newprofile=structuredClone(profile); 
//     newprofile.user.name = "Bob";

//     // Using the same reference
//     setProfile(newprofile); //               if we uses the same refrence or object ❌ React may skip rendering!
//     //because react not checking in depth its only view from the top if it matches it not goes below 
//   };

//   //console.log("Component rendered");

//   return (
//     <div>
//       <h1>User: {profile.user.name}</h1>
//       <button onClick={updateName}>Change name to Bob</button>
//     </div>
//   );
// }

// export default App;
