import { NavLink } from "react-router-dom";
import { useState } from 'react';
import logo from "../assets/logo2.png";
import "./styles/Navbar.css";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="nav-tabs">
        <NavLink
          to="/digital-reflection"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t('navTab1')}
        </NavLink>
        <NavLink
          to="/media-competence"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t('navTab2')}
        </NavLink>
        <NavLink
          to="/act-now"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t('navTab3')}
        </NavLink>
        {/* <NavLink
          to="/who-else"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          {t('navTab4')}
        </NavLink> */}
        <div className="tab language">
          <button className="tab language" onClick={changeLanguage}>
            {i18n.language === 'en' ? 'EN' : 'DE'}
          </button>
        </div>
      </div>
    </nav>
  );
}
