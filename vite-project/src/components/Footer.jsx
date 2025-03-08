import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#181818",
        color: "#B0B0B0",
        textAlign: "center",
        padding: "25px 20px",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} CareerGuideAI. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
