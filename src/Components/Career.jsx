import React, { useState } from "react";
import "../Style/Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("access_key", "f4a2d574-dbd5-4249-b93c-4f15d7e4a0bb");
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);
    if (formData.resume) {
      form.append("resume", formData.resume); // Attach the file
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await res.json();
      if (result.success) {
        console.log("Form submitted successfully:", result);
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          resume: null,
        });
      } else {
        console.error("Form submission failed:", result);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="career">
      <h2>We're Hiring!</h2>
      <h4>
        We are always looking for the right talent, feel free to Contact Us
      </h4>
      <div className="forms-container">
        <h2 className="forms-heading">Apply Now</h2>
        <form onSubmit={handleSubmit} className="contact-forms">
          <div className="forms-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forms-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forms-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forms-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="forms-group">
            <label htmlFor="resume">Attach Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
