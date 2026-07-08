import "./About.css";
import { FaJava, FaDatabase, FaServer, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        <div className="about-left">
          <h3>Java Backend Developer</h3>

          <p>
            I'm <strong>Abhishek Kolpek</strong>, a passionate Java Developer
            with more than 3 years of experience in designing and developing
            enterprise web applications.
          </p>

          <p>
            Currently, I am working at <strong>Clover Infotech</strong> for
            <strong> IDFC FIRST BANK</strong>, where I develop banking
            applications using Java technologies and contribute to business
            process automation.
          </p>

          <p>
            I enjoy solving complex backend problems, designing REST APIs,
            optimizing databases, and building scalable applications using
            Spring Boot and Microservices.
          </p>

          <div className="about-info">
            <div>
              <span>Name</span>
              <p>Abhishek Kolpek</p>
            </div>

            <div>
              <span>Email</span>
              <p>kolpekabhishek@gmail.com</p>
            </div>

            <div>
              <span>Location</span>
              <p>Ahmednagar, Maharashtra</p>
            </div>

            <div>
              <span>Experience</span>
              <p>3+ Years</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="card">
            <FaJava />
            <h4>Java</h4>
            <p>Core Java & Enterprise Development</p>
          </div>

          <div className="card">
            <FaServer />
            <h4>Spring Boot</h4>
            <p>REST APIs & Microservices</p>
          </div>

          <div className="card">
            <FaDatabase />
            <h4>MySQL</h4>
            <p>Database Design & Optimization</p>
          </div>

          <div className="card">
            <FaCode />
            <h4>Backend</h4>
            <p>Scalable Application Development</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
