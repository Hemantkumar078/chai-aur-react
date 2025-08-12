import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// import React from 'react'
// import { useState, useContext } from 'react';
// const ThemeContext = React.createContext('light');
// const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');
//     const toggleTheme = () => {
//         setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//         console.log(`Theme changed to: ${theme === 'light' ? 'dark' : 'light'}`);
//     }
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <div className={theme}>
//                 {children}
//             </div>
//         </ThemeContext.Provider>
//     );
// }

// export {ThemeProvider,ThemeContext};