import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="title">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-container">
        <form action="https://formspree.io/f/mqknaeja" method="POST">
          <input type="text" name="Name" placeholder="Full Name" required />
          <input type="email" name="Email" placeholder="Email" required />
          <select name="service">
            <option className="trans" value="UI">
              UI/UX design
            </option>
            <option className="trans" value="UI to code">
              Convert UI to code
            </option>
            <option className="trans" value="web design">
              React developement
            </option>
          </select>
          <textarea
            name="details"
            cols="30"
            rows="10"
            placeholder="Description and details"
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
