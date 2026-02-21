import React from "react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault(); // ❗ stops page reload
    alert("Message sent successfully");
  };

  return (
    <main className="contact-page">
      {/* MAP */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0114891225157!2d76.30763777561852!3d30.661804974618633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101a88801a70c7%3A0x8b7e8b32cd76d0d4!2sRadhika%20Steel%20Industries!5e0!3m2!1sen!2sin!4v1770676264988!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-details">
        <h1>Contact Us</h1>

        <p>📍 Mandi Gobindgarh, Punjab</p>
        <p>📞 01765-255580</p>
        <p>✉ info@radhikasteel.com</p>

        {/* ✅ FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;



/*<div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0114891225157!2d76.30763777561852!3d30.661804974618633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101a88801a70c7%3A0x8b7e8b32cd76d0d4!2sRadhika%20Steel%20Industries!5e0!3m2!1sen!2sin!4v1770676264988!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */