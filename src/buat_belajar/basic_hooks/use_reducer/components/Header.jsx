import { useContext } from "react";
// import {ThemeProvider} from "../contexts/ThemeProvider";
import ThemeContext from "../contexts/ThemeContext";

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return(
    <div style={{backgroundColor: theme === "light" ? "#ffff" : "333", color: theme === "light" ? "333" : "#ffff"}}>
      <h1>Ini Header</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

// const Header = () => {
//   return(
//     <ThemeProvider>
//       <ThemedHeader />
//     </ThemeProvider>
//   )
// }

export default Header