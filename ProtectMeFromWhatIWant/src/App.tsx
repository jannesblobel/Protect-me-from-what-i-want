// import { useState } from "react";
import Experience from "./components/Experience";
import DigitalReflection from "./pages/DigitalReflection";
import MediaCompetence from "./pages/MediaCompetence";

// import ScrollManager from "./components/ScrollManager";

// import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./language/LanguageContext";

function App() {
  // const [section, setSection] = useState(0);
  const pages: number = 6;

  return (
    <Router>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Experience pages={pages} />} />
          <Route path="/digital-reflection" element={<DigitalReflection />} />
          <Route path="/media-competence" element={<MediaCompetence />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
