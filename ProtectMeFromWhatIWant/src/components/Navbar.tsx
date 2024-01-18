import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./styles/Navbar.css";
// import DigitalReflection from '../pages/digital-reflection';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="nav-tabs">
        <NavLink to="/digital-reflection" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          digital reflection
        </NavLink>
        <NavLink to="/media-competence" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            media competence
        </NavLink>
        <NavLink to="/act-now" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            act now
        </NavLink>
        <NavLink to="/who-else" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            who else?
        </NavLink>
      </div>
    </nav>
  );
}
