import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import Container from "./themes/components/Container";
import { useSelector, useDispatch } from "react-redux";
import { darkModeAction } from "./actions/config_action";

function App() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config);

  useEffect(() => {
    //Keep mode after refreshing
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem("theme")));
    }
  }, [config.darkMode, dispatch]);

  const themeValue = config.darkMode;

  const themeChange = value => {
    window.localStorage.setItem("theme", value);
    dispatch(darkModeAction(value));
  };
  return (
    <ThemeProvider theme={themeValue === "light" ? lightTheme : darkTheme}>
      <nav
        style={{
          width: "100%",
          padding: "2rem 0",
          textAlign: "center",
          backgroundColor: "gray"
        }}
      >
        <button onClick={() => themeChange("dark")}>Dark Mode</button>
        <button onClick={() => themeChange("light")}>Light Mode</button>
      </nav>

      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
