import React from "react";
import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    console.log("hello");
    // e.preventDefault();
    const errors = [];
    if (email === null || email === "") {
      errors.push("Email is empty.");
    }
    if (name.length < 5) {
      errors.push("Name should be more than 4 letters.");
    }
    if (message.length < 21) {
      errors.push("Message should be more than 20 letters.");
    }
    if (errors.length === 0) {
      console.log("send the message to the api");
      setError("");
      setSuccess("Message sent successfully");
    } else {
      setError(errors.join(", "));
      setSuccess("");
      e.preventDefault();
    }
  };
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Get in touch</p>
      {error && <span>{error}</span>}
      {success && <span>{success}</span>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Contact;
