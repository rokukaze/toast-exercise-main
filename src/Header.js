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

// Removed until basic functionality of toast popup implemented
// import { createMockFormSubmission } from "./service/mockServer";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
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
          // submit like to backend here
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
            // Needs proper implementation
            // add mock form submission back into handle click, but needs to execute something before hand, onMessage allows some kind of function execution
            // use onMessage to execute a function that i create, related to saveLikedFormSubmission method
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
          message="Toast Info Here"
          action={action}
        />
      </AppBar>
    </Box>
  );
}
