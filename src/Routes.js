import React from "react";
import ConvertFiles from "pages/ConvertFiles";
import PDFConvert from "pages/PDFConvert";
import Download from "pages/Download";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/download" element={<Download />} />
        <Route path="/pdfconvert" element={<PDFConvert />} />
        <Route path="/convertfiles" element={<ConvertFiles />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
