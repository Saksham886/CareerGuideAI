import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ResultPage = () => {
  const location = useLocation();
  const { result } = location.state || {}; // Ensure result is defined

  if (!result || !result.careers) {
    return (
        <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
          color: "#fff",
        }}
      >
        <Typography variant="h5">No career guidance available. Please try again.</Typography>
      </Box>
      </>
    );
  }

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
        padding: "20px",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="#fff" marginBottom="50px" marginTop={"20px"}>
        Career Guidance Results
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "80%",
          maxWidth: "1000px",
        }}
      >
        {result.careers.map((career, index) => (
          <Card key={index} sx={{ backgroundColor: "#222", color: "#fff", borderRadius: "10px", overflow: "hidden"}}>
            <CardMedia component="img" height="200" image={career.image_url} alt={career.name} />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {career.name}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                {career.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </>
  );
};

export default ResultPage;
