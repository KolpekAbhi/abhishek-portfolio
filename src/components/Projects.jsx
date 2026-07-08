import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-title">
        <h2>Featured Projects</h2>
        <div className="underline"></div>
        <p>Projects that showcase my backend development experience.</p>
      </div>

      <div className="projects-container">
        {/* Project 1 */}

        <div className="project-card">
          <div className="project-image inventory">Inventory Management</div>

          <div className="project-content">
            <h3>Inventory Management System</h3>

            <p>
              Enterprise inventory management application developed using Spring
              Boot and Hibernate. It helps organizations manage products, stock,
              suppliers, and inventory transactions efficiently.
            </p>

            <div className="tech-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="disabled">
                <FaGithub />
                Source
              </a>

              <a href="#" className="disabled">
                <FaExternalLinkAlt />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}

        <div className="project-card">
          <div className="project-image banking">Banking Automation</div>

          <div className="project-content">
            <h3>Banking Process Automation</h3>

            <p>
              Developed backend modules for banking workflows using Java, Newgen
              IBPS, JSP, and MySQL while working with IDFC FIRST BANK through
              Clover Infotech.
            </p>

            <div className="tech-stack">
              <span>Java</span>
              <span>JSP</span>
              <span>MySQL</span>
              <span>Newgen</span>
              <span>JIRA</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="disabled">
                <FaGithub />
                Private
              </a>

              <a href="#" className="disabled">
                <FaExternalLinkAlt />
                Enterprise
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
