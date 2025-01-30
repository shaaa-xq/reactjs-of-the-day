import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import ThemeToggle from "./ThemeSwitcher";

const Header = () => {
  const {theme} = useContext(ThemeContext)

  return(
    <>
      <header style={{backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
        className="header">
        <h2>Ini header</h2>
        <ThemeToggle />
      </header>
    </>
  )
}

export default Header