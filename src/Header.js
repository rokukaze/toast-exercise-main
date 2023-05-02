import { React, useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  createMockFormSubmission,
  onMessage,
  saveLikedFormSubmission,
  fetchLikedFormSubmissions,
} from "./service/mockServer";

import {
  fetchLikedFormSubmissionsError,
  saveLikedFormSubmissionError,
} from "./errorMessages";

export default function Header({ setSubmissions }) {
  const [open, setOpen] = useState(false);
  const [submission, setSubmission] = useState(null);

  const handleClick = () => {
    //onMessage primes the mock form setting our state to our submission via push to callback stack
    onMessage((message) => setSubmission(message));
    createMockFormSubmission();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button
        style={{ color: "aqua" }}
        size="small"
        onClick={() => {
          saveLikedFormSubmission(submission)
            .then((response) => {
              console.log(response);
              fetchLikedFormSubmissions()
                .then((response) => {
                  console.log(response);
                  setSubmissions(response.formSubmissions);
                })
                .catch(() => alert(fetchLikedFormSubmissionsError));
            })
            .catch(() => alert(saveLikedFormSubmissionError));
          setOpen(false);
        }}
      >
        Like
      </Button>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => {
          handleClose();
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  const submissionDescription = () => {
    return (
      <>
        {submission && (
          <>
            {submission.data.firstName + " " + submission.data.lastName + " "}
            <br></br>
            {submission.data.email}
          </>
        )}
      </>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleClick}
          >
            New Submission
          </Button>
        </Toolbar>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleClose}
          message={submissionDescription()}
          action={action}
        />
      </AppBar>
    </Box>
  );
}
