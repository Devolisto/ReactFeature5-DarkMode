// Styling
import { GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  
  // let currentTheme = useState(theme.light);

  // const [currentTheme, setCurrentTheme] = useState(theme.light);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleCurrentTheme = (currentTheme) => {

    if(currentTheme === "dark") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }

    // setCurrentTheme(currentTheme === "light" ? "dark" : "light");

    // if (currentTheme = theme.light) {
    //   setCurrentTheme(currentTheme = theme.dark);
    //   currentTheme = theme.dark;
    //   console.log("changed to dark")
    // } 
    // else if (currentTheme = theme.dark) {
    //   setCurrentTheme(currentTheme = theme.light);
    //   console.log("changed to light");
    // }
  }
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>
        Dark Theme
      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
