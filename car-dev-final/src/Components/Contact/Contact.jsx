import "./Contact.css";
import { useEffect, useState } from "react";
import ImageBackground from "./ImageBackground"; 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

const Contact = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="contact-page-container"> 
      <ImageBackground heroCount={heroCount} />
      <div className="contact-us-content">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className="contact-methods">
          {/* Phone Call Card */}
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone Call</h3>
            <p>Speak to our team directly. We are available from 9 AM to 6 PM IST.</p>
            <a href="tel:+911234567890" className="contact-link">+91 12345 67890</a>
          </div>

          {/* Live Chat Card */}
          <div className="contact-card">
            <BsChatDotsFill className="contact-icon" />
            <h3>Live Chat</h3>
            <p>Chat with a member of our team in real-time. Click below to start.</p>
            <button className="contact-button">Start Chat</button>
          </div>
          
          {/* Email Card */}
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <p>Send us an email for any inquiries. We typically respond within 24 hours.</p>
            <a href="mailto:support@yourcompany.com" className="contact-link">support@yourcompany.com</a>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message ✍️</h2>
            <p>For more specific questions, please use our contact form.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="e.g., Aarav Sharma" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What is this about?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            {/* Social Media Card */}
            <div className="info-card social-media-card">
              <h3 className='info-card-title'>Social Media</h3>
              <p>Follow us on our social channels for the latest updates.</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>

            {/* Physical Location Card */}
            <div className="info-card location-card">
              <FaMapMarkerAlt className="info-card-icon"/>
              <h3 className='info-card-title'>Our Office 📍</h3>
              <p>123 Business Avenue<br />Tech Park, Suite 456<br />Bengaluru, Karnataka 560001<br />India</p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Contact;