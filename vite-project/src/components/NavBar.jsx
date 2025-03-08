import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333333" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#E0E0E0" }}>
          CareerGuideAI
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/howitworks" color="inherit">How It Works</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
        <Button
          component={Link} to="/career"
          variant="contained"
          sx={{ backgroundColor: "#00E676", color: "#000", ml: 2, ":hover": { backgroundColor: "#00C853" } }}
          href="/get-started"
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
