import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return(
    <button 
      onClick={toggleTheme}
      style={{background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}  
    >Toggle</button>
  )
}

export default ThemeToggle