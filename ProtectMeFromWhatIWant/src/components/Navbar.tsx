import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./styles/Navbar.css";

import { useLanguage } from '../language/LanguageContext';

export default function Navbar() {
  const { language, changeLanguage, translations } = useLanguage();
  const toggleLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    changeLanguage(newLanguage);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="nav-tabs">
        <NavLink to="/digital-reflection" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            {translations['navTab1']}
        </NavLink>
        <NavLink to="/media-competence" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            {translations['navTab2']}
        </NavLink>
        <NavLink to="/act-now" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            {translations['navTab3']}
        </NavLink>
        <NavLink to="/who-else" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            {translations['navTab4']}
        </NavLink>
        <button className="tab language" onClick={toggleLanguage}>{language}</button>
      </div>
    </nav>
  );
}
