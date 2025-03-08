import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* Landing Page */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
          color: "#E0E0E0",
          margin: 0,
          padding: 0,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Career Guidance Made Easy
        </Typography>
        <Typography variant="h6" maxWidth="600px" paragraph>
          Discover the best career paths tailored for you. Answer a few questions, and let AI guide your future!
        </Typography>
        
        <Button
          component={Link} to="/carrer"
          variant="contained"
          size="large"
          sx={{ mt: 3, backgroundColor: "#00E676", color: "#000", fontWeight: "bold", ":hover": { backgroundColor: "#00C853" } }}
          
        >
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default LandingPage;
