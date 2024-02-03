import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./styles/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("pageScroll ", latest);
    //doesnt work
  });

  return (
    <motion.nav
      className="navbar"
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="nav-tabs">
        <NavLink
          to="/digital-reflection"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t("navTab1")}
        </NavLink>
        <NavLink
          to="/media-competence"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t("navTab2")}
        </NavLink>
        <NavLink
          to="/act-now"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t("navTab3")}
        </NavLink>
        <div className="tab language">
          <button className="tab language" onClick={changeLanguage}>
            {i18n.language === "en" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
