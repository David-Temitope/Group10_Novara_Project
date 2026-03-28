import React, { useState } from 'react';
import '../formSection/Form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="submission-success">
        <h3>Thank you!</h3>
        <p>Your message has been successfully submitted. We'll get back to you soon.</p>
        <button onClick={() => setIsSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <section id="contact-form" className="contact-section">
      <div className="contact-intro">
        <h2>Have Questions About Planetary Science?</h2>
        <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.</p>
      </div>

      <form className="planetary-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name<span>*</span></label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Full name"
              required 
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email<span>*</span></label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@example.com"
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number<span>*</span></label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Please enter a valid phone number"
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message<span>*</span></label>
            <textarea 
              name="message" 
              placeholder="Enter your message"
              required 
              maxLength="100"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span className="char-count">{formData.message.length} / 100 characters</span>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Submit ›'}
        </button>
      </form>
    </section>
  );
};



export default ContactForm;