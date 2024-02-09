import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import ActNow from "./pages/ActNow";
import DigitalReflection from "./pages/DigitalReflection";
import FocusMode from "./pages/FocusMode";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Datapolicy from "./pages/Datapolicy";
import Impressum from "./pages/Impressum";
import MediaCompetenceRework from "./pages/MediaCompetenceRework";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [pages, setPages] = useState(6);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth < 1000) {
        setPages(12);
        setIsMobile(true);
        console.log("mobile");
      } else {
        setPages(6);
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Experience pages={pages} />} />
          <Route path="/digital-reflection" element={<DigitalReflection />} />
          <Route path="/media-competence" element={<MediaCompetenceRework />} />
          <Route path="/act-now" element={<ActNow />} />
          <Route path="/focus-mode" element={<FocusMode />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datapolicy" element={<Datapolicy />} />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

export default App;
