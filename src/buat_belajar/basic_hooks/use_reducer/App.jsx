import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeSwitcher";
import './App.css'

const MyApp = () => {
  return(
    <ThemeProvider>
      <Header />
      {/* <ThemeToggle /> */}
    </ThemeProvider>
  )
}

export default MyApp