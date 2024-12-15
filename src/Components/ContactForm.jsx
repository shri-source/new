import React, { useState } from "react";
import "../Style/ContactForm.css";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  //   setFormData({ name: "", email: "", message: "" });
  //   setIsOpen(false);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f4a2d574-dbd5-4249-b93c-4f15d7e4a0bb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div>
      <button className="icon-button" onClick={toggleForm}>
        📩
      </button>
      {isOpen && (
        <div className="form-container">
          <div className="form-overlay" onClick={toggleForm}></div>
          <div className="form-content">
            <h2>Hi! Let us know how we can help and we’ll respond shortly.</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
            <button className="close-button" onClick={toggleForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
