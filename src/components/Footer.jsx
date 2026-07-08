import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Abhishek Kolpek</h2>

          <p>
            Java Backend Developer passionate about building scalable,
            secure and enterprise-grade applications using Java,
            Spring Boot, Hibernate and Microservices.
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-social">

            <a
              href="https://linkedin.com/in/abhishek-kolpek-b2172621"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

          <button
            className="top-btn"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Abhishek Kolpek.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;