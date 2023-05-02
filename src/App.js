import React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";

import Header from "./Header";
import Content from "./Content";
import { fetchLikedFormSubmissions } from "./service/mockServer";
import { fetchLikedFormSubmissionsError } from "./errorMessages";

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
  const [submissions, setSubmissions] = React.useState([]);

  useEffect(() => {
    fetchLikedFormSubmissions()
      .then((response) => {
        console.log(response);
        setSubmissions(response.formSubmissions);
      })
      .catch(() => alert(fetchLikedFormSubmissionsError));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header setSubmissions={setSubmissions} />
        <Container>
          <Content submissions={submissions} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
