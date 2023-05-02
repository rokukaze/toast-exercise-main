import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Content({ submissions }) {
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
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>
            {createSubmissionListItemText(submission)}
          </li>
        ))}
      </ul>
    </Box>
  );
}
