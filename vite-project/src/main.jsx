import { StrictMode } from "react";
import { Analytics } from "@vercel/analytics/react"
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AboutPage from "./components/AboutPage.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import FormPage from "./components/FormPage.jsx";
import ResultPage from "./components/Result.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import Contact from "./components/Contact.jsx";
import CareerDetail from "./components/CareerDetail.jsx";
// Define Routes Here
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
    <Navbar/>
    <Analytics />
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/howitworks" element={<HowItWorks/>}/>
          <Route path="/career" element={<FormPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="/careerDetail" element={<CareerDetail/>}/>
      </Routes>
    </BrowserRouter>
   <Footer/>
  </StrictMode>
);
