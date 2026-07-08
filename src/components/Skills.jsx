import "./Skills.css";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaTools,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiApachetomcat,
} from "react-icons/si";

import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-title">
        <h2>Technical Skills</h2>
        <div className="underline"></div>
        <p>
          Technologies I work with to build scalable enterprise applications.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <FaJava />
          <h3>Languages</h3>

          <div className="tags">
            <span>Java</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="skill-card">
          <SiSpringboot />
          <h3>Frameworks</h3>

          <div className="tags">
            <span>Spring Boot</span>
            <span>Spring MVC</span>
            <span>Hibernate</span>
            <span>Microservices</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="skill-card">
          <FaDatabase />
          <h3>Database</h3>

          <div className="tags">
            <span>MySQL</span>
            <span>Stored Procedures</span>
            <span>Functions</span>
          </div>
        </div>

        <div className="skill-card">
          <FaTools />
          <h3>Tools</h3>

          <div className="tags">
            <span>STS</span>
            <span>Eclipse</span>
            <span>JIRA</span>
            <span>Git</span>
            <span>Apache Tomcat</span>
            <span>Postman</span>
          </div>
        </div>
      </div>

      <div className="tech-icons">
        <FaJava />
        <SiSpringboot />
        <SiHibernate />
        <SiMysql />
        <FaGitAlt />
        <FaHtml5 />
        <FaCss3Alt />
        <SiPostman />
        <SiApachetomcat />
      </div>
    </motion.section>
  );
}

export default Skills;
