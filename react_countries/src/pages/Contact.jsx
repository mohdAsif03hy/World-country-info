import React from "react";

const Contact = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data); 

    e.target.reset(); 
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        
        <form onSubmit={handleFormSubmit} className="contact-form" autoComplete="off">
          
          <input
            type="text"
            required
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            required
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            className="form-control"
            placeholder="Enter your message"
            name="message"
            required
            rows="4"
            autoComplete="off"
          ></textarea>

          <button type="submit" className="btn btn-darken">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;