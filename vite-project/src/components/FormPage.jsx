import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loading-icons";
import { Box, Typography, Button, MenuItem, Select, TextField, Modal } from "@mui/material";
import { getCareerGuidance } from "../API/GeminiService";

const FormPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    subjects: "",
    activities: "",
    interests: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const guidance = await getCareerGuidance(formData);

    if (!guidance || !guidance.careers) {
      throw new Error("Invalid response received from Gemini.");
    }

    console.log("Career guidance response:", guidance); // Debugging

    navigate("/result", { state: { result: guidance } });
    } catch (error) {
      console.error("Error fetching career guidance:", error);
    navigate("/result", { state: { result: null } });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E1E1E 30%, #424242 90%)",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
            width: "500px",
          }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center" color="#333" marginBottom={"20px"}>
            Career Guidance Form
          </Typography>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextField fullWidth label="Full Name" variant="outlined" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            
            <Select
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>Select Education Level</MenuItem>
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="Undergraduate">Undergraduate</MenuItem>
              <MenuItem value="Postgraduate">Postgraduate</MenuItem>
            </Select>
            
            <TextField fullWidth label="Favorite Subjects" variant="outlined" placeholder="e.g., Mathematics, Physics, Computer Science" value={formData.subjects} onChange={(e) => setFormData({ ...formData, subjects: e.target.value })} />
            <TextField fullWidth label="Extracurricular Activities" variant="outlined" placeholder="e.g., Debate Club, Robotics, Football" value={formData.activities} onChange={(e) => setFormData({ ...formData, activities: e.target.value })} />
            <TextField fullWidth label="Career Interests" variant="outlined" placeholder="e.g., Development, Data Scientist, Law" value={formData.interests} onChange={(e) => setFormData({ ...formData, interests: e.target.value })} />
            
            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: "10px", backgroundColor: "#00E676", color: "#000" }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>

      {/* Loading Modal */}
<Modal open={isLoading} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Box
    sx={{
      backgroundColor: "#222",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      color: "#fff",
    }}
  >
    <Typography variant="h6" mb={2}>Generating Career Guidance...</Typography>
    <Rings stroke="#00E676" width="60" height="60" />
  </Box>
</Modal>
    </>
  );
};

export default FormPage;
