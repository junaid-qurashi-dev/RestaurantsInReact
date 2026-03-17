import React, { useState } from "react";
import Layout from "../../component/layouts/Layout";
import "../../styles/ContactStyle.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: "bi-geo-alt-fill",
      title: "Visit Us",
      details: [
        "123 Restaurant Street",
        "Food City, FC 12345",
        "United States",
      ],
    },
    {
      icon: "bi-telephone-fill",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    },
    {
      icon: "bi-envelope-fill",
      title: "Email Us",
      details: ["info@restaurant.com", "reservations@restaurant.com"],
    },
    {
      icon: "bi-clock-fill",
      title: "Opening Hours",
      details: [
        "Mon-Thu: 11AM - 10PM",
        "Fri-Sat: 11AM - 11PM",
        "Sunday: 12PM - 9PM",
      ],
    },
  ];

  const operatingHours = [
    {
      day: "Monday - Thursday",
      hours: "11:00 AM - 10:00 PM",
    },
    {
      day: "Friday - Saturday",
      hours: "11:00 AM - 11:00 PM",
    },
    {
      day: "Sunday",
      hours: "12:00 PM - 9:00 PM",
    },
    {
      day: "Holiday Hours",
      hours: "May vary - Call ahead",
    },
  ];

  const socialLinks = [
    { icon: "bi-facebook", url: "#", label: "Facebook" },
    { icon: "bi-instagram", url: "#", label: "Instagram" },
    { icon: "bi-twitter", url: "#", label: "Twitter" },
    { icon: "bi-youtube", url: "#", label: "YouTube" },
    { icon: "bi-pinterest", url: "#", label: "Pinterest" },
    { icon: "bi-tiktok", url: "#", label: "TikTok" },
  ];

  return (
    <Layout>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We're here to help! Reach out to us for reservations, inquiries, or
            just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">
                  <i className={`bi ${info.icon}`}></i>
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className={
                      info.title === "Call Us" || info.title === "Email Us"
                        ? "highlight"
                        : ""
                    }>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2>Send Us a Message</h2>
          <p>
            Have a question or special request? We'd love to hear from you. Fill
            out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required>
                    <option value="">Select a subject</option>
                    <option value="reservation">Make a Reservation</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you..."
                    rows="5"></textarea>
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-details">
              <h3>Why Choose Us?</h3>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="detail-content">
                  <h4>Premium Quality</h4>
                  <p>
                    We use only the finest ingredients and traditional cooking
                    methods to ensure exceptional taste in every dish.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="detail-content">
                  <h4>Quick Service</h4>
                  <p>
                    Our efficient kitchen and friendly staff ensure your food is
                    prepared quickly without compromising quality.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="detail-content">
                  <h4>Customer First</h4>
                  <p>
                    Your satisfaction is our priority. We listen to feedback and
                    continuously improve our service.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-award"></i>
                </div>
                <div className="detail-content">
                  <h4>Award Winning</h4>
                  <p>
                    Recognized for excellence in food quality, service, and
                    customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="hours-section">
        <div className="container">
          <h2>Operating Hours</h2>
          <p>We're open and ready to serve you! Check our hours below.</p>
          <div className="hours-grid">
            {operatingHours.map((schedule, index) => (
              <div key={index} className="hours-card">
                <h3>{schedule.day}</h3>
                <div className="hours">
                  <span>{schedule.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <p>
            Located in the heart of the city, easily accessible by car or public
            transportation.
          </p>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="bi bi-geo-alt"></i>
              <h3>Interactive Map</h3>
              <p>Map integration would be displayed here</p>
              <p className="text-muted">
                123 Restaurant Street, Food City, FC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>
            Stay connected and follow us on social media for the latest updates,
            special offers, and behind-the-scenes content.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                aria-label={social.label}>
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
