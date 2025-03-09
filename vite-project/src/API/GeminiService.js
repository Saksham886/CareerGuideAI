import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

export const getCareerGuidance = async (formData) => {
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
    const prompt = `You are an AI career guidance assistant
Based on the following user details:

- **Full Name:** ${formData.name}
- **Education Level:** ${formData.education}
- **Favorite Subjects:** ${formData.subjects}
- **Extracurricular Activities:** ${formData.activities}
- **Career Interests:** ${formData.interests}

Suggest **three potential career paths** that align with the user's interests and background. For each career, provide:

1. **Career Name**
2. **A brief description** of why this career suits them
3. **Find a high-quality, publicly accessible image that accurately represents the given career from a trusted stock image source such as Unsplash, Pexels, or Pixabay. The image should clearly depict professionals actively engaged in their work environment, ensuring it aligns with the career's typical tasks and setting. Avoid generic or unrelated images, and ensure the image is directly viewable without authentication.

Return the response in the following **structured JSON format** (ensure it is valid JSON without extra text):

{
  "careers": [
    {
      "name": "Career 1",
      "description": "Brief explanation why this career is a good fit.",
      "image_url": "https://example.com/career1.jpg"
    },
    {
      "name": "Career 2",
      "description": "Brief explanation why this career is a good fit.",
      "image_url": "https://example.com/career2.jpg"
    },
    {
      "name": "Career 3",
      "description": "Brief explanation why this career is a good fit.",
      "image_url": "https://example.com/career3.jpg"
    }
  ]
}`;

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
