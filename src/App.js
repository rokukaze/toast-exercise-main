import React from "react";
import Container from "@mui/material/Container";

import Header from "./Header";
import Content from "./Content";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4535b0",
    },
    secondary: {
      main: "#fe0d4b",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Content />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
