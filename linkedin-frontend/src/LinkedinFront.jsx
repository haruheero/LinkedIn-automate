import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from "react";

export default function LinkedinFront() {

    const [data, setData] = useState({})

    const onSubmit = async () => {
      try {
        const response = await fetch("http://localhost:8000/json", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Card
      sx={{
        maxWidth: 500,
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Auto accept linkedin requests
        </Typography>
        <TextField
          sx={{ marginBottom: 1 }}
          required
          fullWidth
          id="outlined-required"
          label="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          sx={{ marginBottom: 1 }}
          required
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
