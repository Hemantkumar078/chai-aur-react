import React from "react";
import {useState} from 'react'
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
    const [user,SetUser]=useState(null);
    return (
        <UserContext.Provider value={{user,SetUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
// This provider component wraps the application and provides user-related data to all components that need it.