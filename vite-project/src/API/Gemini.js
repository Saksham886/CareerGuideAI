import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

export const getCareerDetail = async (careerName) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };

    // Creating a structured prompt using the form data
    const prompt = `
    You are an AI career guidance assistant. Provide detailed insights for the career "${careerName.name}" with the following structured format:
    
    1. **Career Name**: The exact name of the career.
    2. **Description**: A brief but detailed explanation of what this career involves.
    3. **Benefits**: Key advantages of pursuing this career.
    4. **Risks & Challenges**: Possible risks, downsides, and challenges in this career.
    5. **Required Skills**: Essential skills needed for success in this career.
    6. **Educational Path**: Recommended degrees, certifications, and educational routes.
    7. **Exams & Preparation**: Important entrance exams (if applicable) and how to prepare for them.
    8. **Job Roles**: Common job titles available in this career path.
    9. **Salary Expectations**: Approximate salary ranges for beginners, mid-level, and senior positions in india.
    10. **Industry Demand**: Current and future demand for this career, including job market trends.
    11. **Learning Resources**: List online courses, books, and platforms for learning.
    12. **Related Careers**: Other career paths closely related to this field.
    13. **Image URLs**:A publicly accessible image URL that represents "${careerName.name}"** from a **trusted stock image source** such as **Unsplash, Pexels, or Pixabay**. The image should be directly viewable without authentication.
    
    Format the response in **JSON**:
    \`\`\`json
    {
      "career_name": "Software Engineer",
      "description": "A software engineer designs, develops, and maintains software applications...",
      "benefits": ["High salary potential", "Remote work flexibility", "Growing industry demand"],
      "risks_challenges": ["Constant learning required", "High competition", "Long working hours"],
      "required_skills": ["Programming (Python, Java, C++)", "Problem-solving", "Software Development Life Cycle"],
      "educational_path": "Bachelor’s in Computer Science, Engineering, or related field. Certifications in AWS, Google Cloud, etc.",
      "exams_preparation": ["GATE (India)", "GRE (for MS abroad)", "Coding assessments like LeetCode, CodeChef"],
      "job_roles": ["Software Developer", "Backend Engineer", "Full-Stack Developer"],
      "salary_expectations": {
        "entry_level": "₹60,000 - ₹80,000 per year",
        "mid_level": "₹90,000 - ₹120,000 per year",
        "senior_level": "₹130,000+ per year"
      },
      "industry_demand": "The demand for software engineers is increasing with AI, cloud computing, and cybersecurity trends.",
      "learning_resources": ["Coursera: Software Development", "Udemy: Python Bootcamp", "Books: Clean Code by Robert C. Martin"],
      "related_careers": ["Data Scientist", "Machine Learning Engineer", "Cybersecurity Analyst"],
      "image_urls": "https://source.unsplash.com/featured/?software,engineer",
       
    }
    \`\`\`
    `;
    

    // Correct API call to generate text
    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig });
    const text = await result.response.text(); // Correct way to extract text
    const jsonResponse = JSON.parse(text); // Convert string to JSON
    return jsonResponse; // Return parsed JSON object
  } catch (error) {
    console.error("Error fetching career guidance:", error);
    return null; // Return null on failure
  }
};
