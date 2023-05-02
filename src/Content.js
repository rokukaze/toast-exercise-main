import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchLikedFormSubmissions } from "./service/mockServer";
import { useEffect } from "react";

export default function Content() {
  const [submissions, setSubmissions] = React.useState([]);

  //fetches list of liked submissions on mount
  useEffect(() => {
    fetchLikedFormSubmissions()
      .then((response) => setSubmissions(response.formSubmissions))
      .catch(() =>
        alert("Server error! Please refresh the page to see liked submissions!")
      );
  }, []);

  const createSubmissionListItemText = (submission) => {
    return (
      submission.data.firstName +
      " " +
      submission.data.lastName +
      " - " +
      submission.data.email
    );
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 1 }}>
        <ul>
          {submissions.map((submission) => (
            <li key={submission.id}>
              {createSubmissionListItemText(submission)}
            </li>
          ))}
        </ul>
      </Typography>
    </Box>
  );
}
