import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
const Contact = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
          padding: "30px",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242424",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Contact Me
          </Typography>
          <Typography variant="h6" color="#00E676" mb={2}>
            Saksham Pandey
          </Typography>

          {/* GitHub & LinkedIn Links */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", mb: 2 }}>
            <Link
              href="https://github.com/Saksham886"
              target="_blank"
              underline="none"
              color="#00E676"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <GitHub /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/pandeysaksham/"
              target="_blank"
              underline="none"
              color="#00E676"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <LinkedIn /> LinkedIn
            </Link>
          </Box>

          <Typography variant="body1" mb={3}>
            Feel free to reach out for collaboration, inquiries, or just to connect!
          </Typography>

          {/* Contact Form */}
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField fullWidth label="Your Name" variant="outlined" sx={{ background: "#333", borderRadius: "5px" }} InputLabelProps={{ style: { color: "#ddd" } }} />
            <TextField fullWidth label="Your Email" variant="outlined" sx={{ background: "#333", borderRadius: "5px" }} InputLabelProps={{ style: { color: "#ddd" } }} />
            <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} sx={{ background: "#333", borderRadius: "5px" }} InputLabelProps={{ style: { color: "#ddd" } }} />
            <Button variant="contained" sx={{ backgroundColor: "#00E676", color: "#000", fontWeight: "bold" }}>
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
