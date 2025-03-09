import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid, Chip } from "@mui/material";

const CareerDetail = () => {
    const location = useLocation();
    const storedCareer = JSON.parse(localStorage.getItem("careerDetail"));
    
    // Extract career details correctly
    const career = location.state?.Detail || storedCareer;
    
    console.log("Location state:", location.state);
    console.log("Career Data:", career);
    

  if (!career) {
    return <Typography variant="h5">No career details found.</Typography>;
  }

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
          color: "white",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Hero Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" fontWeight="bold">{career.career_name}</Typography>
          <img
            src={career.image_urls}
            alt={career.career_name}
            style={{ width: "50vh",height:"50vh", maxWidth: "800px", borderRadius: "10px", marginTop: "20px" }}
          />
        </Box>

        {/* Career Details */}
        <Grid container spacing={3} justifyContent="center" maxWidth="1000px">
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Description</Typography>
                <Typography variant="body1">{career.description}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Benefits</Typography>
                {career.benefits.map((benefit, index) => (
                  <Chip key={index} label={benefit} sx={{ margin: "5px", backgroundColor: "#4CAF50", color: "white" }} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Risks & Challenges</Typography>
                {career.risks_challenges.map((risk, index) => (
                  <Chip key={index} label={risk} sx={{ margin: "5px", backgroundColor: "#F44336", color: "white" }} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Required Skills</Typography>
                {career.required_skills.map((skill, index) => (
                  <Chip key={index} label={skill} sx={{ margin: "5px", backgroundColor: "#2196F3", color: "white" }} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Salary Expectations</Typography>
                <Typography variant="body1">Entry Level: {career.salary_expectations.entry_level}</Typography>
                <Typography variant="body1">Mid Level: {career.salary_expectations.mid_level}</Typography>
                <Typography variant="body1">Senior Level: {career.salary_expectations.senior_level}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#333643", color: "#E0E0E0" }}>
              <CardContent>
                <Typography variant="h5">Learning Resources</Typography>
                {career.learning_resources.map((resource, index) => (
                  <Typography key={index} variant="body2">- {resource}</Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CareerDetail;
