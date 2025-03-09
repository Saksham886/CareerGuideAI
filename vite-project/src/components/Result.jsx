import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loading-icons";
import { useLocation } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography ,Modal} from "@mui/material";
import { getCareerDetail } from "../API/Gemini";
const ResultPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { result } = location.state || {}; // Ensure result is defined
  const handleCareerClick = async (career) => {
    setIsLoading(true);
    try {
          console.log("career:",{career});
          const careerDetail = await getCareerDetail(career);
    
        if (!careerDetail) {
          throw new Error("Invalid response received from Gemini.");
        }
    
        console.log("Career Detail response:", careerDetail); // Debugging
    
        navigate("/careerDetail", { state: { Detail: careerDetail } });
        } catch (error) {
          console.error("Error fetching career guidance:", error);
        navigate("/result", { state: { Detail: null } });
        } finally {
          setIsLoading(false);
        }
  };
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
          <Card
            key={index}
            onClick={() => handleCareerClick(career)}
            sx={{
              backgroundColor: "#222",
              color: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
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
    <Typography variant="h6" mb={2}>Generating Career Details...</Typography>
    <Rings stroke="#00E676" width="60" height="60" />
  </Box>
</Modal>
    </>
  );
};

export default ResultPage;
