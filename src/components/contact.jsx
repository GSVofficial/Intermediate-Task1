import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    // Fake submit (you can connect to API or email service here)
    setStatus({ type: "success", message: "Thanks for reaching out! We'll get back soon." });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
        <button type="submit">Send Message</button>
      </form>

      {status && (
        <p className={status.type === "success" ? "success-msg" : "error-msg"}>
          {status.message}
        </p>
      )}

      {/* Optional contact info */}
      <div className="contact-info">
        <p><strong>Phone:</strong> +91 63815 67863</p>
        <p><strong>Email:</strong> venu.dev63@gmail.com</p>
        <p><strong>Address:</strong> Dharmapuri</p>
      </div>
    </div>
  );
}

export default Contact;
