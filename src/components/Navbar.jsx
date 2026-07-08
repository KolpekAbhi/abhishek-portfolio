import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span>Abhishek</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
