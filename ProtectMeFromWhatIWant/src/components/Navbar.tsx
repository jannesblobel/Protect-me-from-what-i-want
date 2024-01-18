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
        <a href="/digital-reflection" className="tab">
          DIGITAL REFLECTION
        </a>
        <a href="/media-competence" className="tab">
          MEDIA COMPETENCE
        </a>
        <a href="/act-now" className="tab">
          ACT NOW
        </a>
        <a href="/who-else" className="tab">
          WHO ELSE?
        </a>
      </div>
    </nav>
  );
}
