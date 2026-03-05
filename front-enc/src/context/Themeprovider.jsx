import React, { useState } from 'react'
import ThemeContext from './ThemeContext';

const Themeprovider = ({ children }) => {
    const [theme,setTheme] = useState('dark')
    const changeTheme = (mode) => {
        setTheme(mode);
    }
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Themeprovider