import Experience from "./components/Experience";
import DigitalReflection from "./pages/DigitalReflection";
import MediaCompetence from "./pages/MediaCompetence";
import WhoElse from "./pages/WhoElse";

// import { useState } from "react";
// import ScrollManager from "./components/ScrollManager";
// import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./language/LanguageContext";
import ActNow from "./pages/ActNow";

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
          <Route path="/act-now" element={<ActNow />} />
          <Route path="/who-else" element={<WhoElse />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
