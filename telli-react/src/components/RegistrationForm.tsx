import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const RegistrationForm = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h5">Create an Account</Typography>
        <TextField
          id="outlined-required"
          label="Username"
          type="email"
          autoComplete="username"
          margin="normal"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="outlined-password-input"
          label="Verify Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Box>
          <Button
            onClick={() => {
              alert("Submitted");
            }}
            size="large"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default RegistrationForm;
