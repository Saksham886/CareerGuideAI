import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <>
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
        color: "#E0E0E0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About CareerGuideAI
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8 }}>
          We leverage AI to help students discover the best career paths
          tailored for them. Our mission is to simplify career decision-making
          with intelligent insights.
        </Typography>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "AI-Powered Suggestions",
              desc: "Get career recommendations based on your interests and skills.",
            },
            {
              title: "Personalized Insights",
              desc: "Receive tailored career advice designed for you.",
            },
            {
              title: "Easy to Use",
              desc: "A seamless and intuitive experience for students.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: 3,
                  backgroundColor: "#FFFFFF",
                  color: "#000",
                  borderRadius: 2,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default AboutPage;
