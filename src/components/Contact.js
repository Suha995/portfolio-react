import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Get in touch</p>
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
