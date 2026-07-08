import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-title">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
        <p>
          Have a project, job opportunity, or just want to connect? Feel free to
          reach out.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}

        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>kolpekabhishek@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>+91 9922152992</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Ahmednagar, Maharashtra</p>
            </div>
          </div>

          <div className="social-links">
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
        </div>

        {/* Right Side */}

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
