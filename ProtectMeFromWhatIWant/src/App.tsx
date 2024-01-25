import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import DigitalReflection from "./pages/DigitalReflection";
import MediaCompetence from "./pages/MediaCompetence";
// import WhoElse from "./pages/WhoElse";
import ActNow from "./pages/ActNow";
import FocusMode from "./pages/shorttermtips/FocusMode"

// import { useState } from "react";
// import ScrollManager from "./components/ScrollManager";
// import React from "react";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  // const [section, setSection] = useState(0);
  const pages: number = 6;

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Experience pages={pages} />} />
          <Route path="/digital-reflection" element={<DigitalReflection />} />
          <Route path="/media-competence" element={<MediaCompetence />} />
          <Route path="/act-now" element={<ActNow />} />
          {/* <Route path="/who-else" element={<WhoElse />} /> */}
          <Route path="/focus-mode" element={<FocusMode />} />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
