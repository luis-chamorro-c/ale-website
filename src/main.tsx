import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import BrandDesign from "./pages/BrandDesign";
import YibyoDescription from "./pages/brand-design/YibyoDescription";
import EducationalDesign from "./pages/EducationalDesign";
import "./styles/base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand-design" element={<BrandDesign />} />
        <Route path="/brand-design/yibyo-description" element={<YibyoDescription />} />
        <Route path="/more-projects" element={<EducationalDesign />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
