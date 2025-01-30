import { useState, createContext } from "react";

export const ThemeContext = createContext(null)

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => 
      (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return(
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider