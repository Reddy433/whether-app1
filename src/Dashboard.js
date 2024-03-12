import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const Dashboard = ({ onSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    onSubmit(city);
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            Get Weather
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
