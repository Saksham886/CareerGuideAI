import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsightsIcon from "@mui/icons-material/Insights";


const steps = [
  { 
    title: "Fill Career Form", 
    description: "Answer a few simple questions to understand your interests.", 
    icon: <AssignmentIcon sx={{ fontSize: 40, color: "#00E676" }} /> 
  },
  { 
    title: "AI Analysis", 
    description: "Our AI processes your inputs and finds the best career options.", 
    icon: <InsightsIcon sx={{ fontSize: 40, color: "#00E676" }} /> 
  },
  { 
    title: "Get Your Career Path", 
    description: "Receive a personalized career report instantly.", 
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#00E676" }} /> 
  },
];

const HowItWorks = () => {
  return (
    <>
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
        color: "#E0E0E0",
        padding: "40px",
        overflow: "hidden",
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        How It Works
      </Typography>
      <Typography variant="h6" maxWidth="600px" paragraph>
        Discover your perfect career in four easy steps.
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{
                bgcolor: "white",
                borderRadius: 3,
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                ":hover": { transform: "scale(1.05)" },
                overflow: "hidden",
              }}
            >
              <CardContent>
                {step.icon}
                <Typography variant="h6" fontWeight="bold" mt={2} color="#333">
                  {step.title}
                </Typography>
                <Typography variant="body2" mt={1} color="#555">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default HowItWorks;
