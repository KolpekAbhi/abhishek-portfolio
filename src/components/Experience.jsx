import "./Experience.css";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-title">
        <h2>Work Experience</h2>
        <div className="underline"></div>
        <p>My professional journey as a Java Backend Developer.</p>
      </div>

      <div className="timeline">
        {/* Experience 1 */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">Aug 2024 - Present</span>

            <h3>Java Developer</h3>

            <h4>Clover Infotech | Client: IDFC FIRST BANK</h4>

            <ul>
              <li>Developing backend applications using Java.</li>

              <li>Working on Newgen IBPS and Document Management System.</li>

              <li>
                Building dynamic JSP pages and integrating backend services.
              </li>

              <li>Writing MySQL Stored Procedures and Functions.</li>

              <li>
                Creating reusable utility classes for enterprise applications.
              </li>

              <li>Tracking tasks, bugs and enhancements using JIRA.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">Aug 2022 - Jul 2024</span>

            <h3>Software Developer</h3>

            <h4>ACKS Solution Pvt Ltd</h4>

            <p className="project">Inventory Management System</p>

            <ul>
              <li>Developed enterprise applications using Spring Boot.</li>

              <li>Designed Controller, Service and DAO layers.</li>

              <li>Implemented Hibernate ORM with MySQL.</li>

              <li>Developed RESTful APIs for business operations.</li>

              <li>Worked with Apache Tomcat deployment and STS.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
