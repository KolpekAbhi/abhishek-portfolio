import "./Hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
    className="hero"
    id="home"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
      <div className="hero-left">
        <p className="greeting">👋 Hello, I'm</p>

        <h1>
          Abhishek <span>Kolpek</span>
        </h1>

        <h2>Java Developer</h2>

        <p className="hero-description">
          Passionate Java Developer with 3+ years of experience in building
          scalable enterprise applications using Java, Spring Boot, Spring MVC,
          Hibernate, REST APIs and MySQL. Currently working on banking
          applications for IDFC FIRST BANK through Clover Infotech.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn secondary"
          >
            <HiOutlineDownload />
            Resume
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/abhishek-kolpek-b2172621"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-card">
          <img
            src="/profile.jpg"
            // alt="Abhishek Kolpek"
          />
        </div>
      </div>
      </motion.section>
  );
}

export default Hero;