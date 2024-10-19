import React, { useState, useEffect } from 'react';
import { Users, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ name: '', email: '', phone: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.getElementById('nameInput').focus(); // Focus on the name input
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newError = { name: '', email: '', phone: '', message: '' };

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newError.name = 'Please enter a valid name (letters only).';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      newError.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }

    if (!message.trim()) {
      newError.message = 'Please enter your message.';
      valid = false;
    }

    setError(newError);

    if (valid) {
      console.log('Form submitted successfully with data:', { name, email, phoneNumber, message });
      setSuccessMessage('Form submitted successfully!');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setError({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactbox}>
        <h1 className={styles.contacttitle}>Contact Us</h1>
        
        <form className={styles.contactform} onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className={styles.inputWrapper}>
            <input
              id="nameInput"
              type="text"
              placeholder="Enter your Name"
              className={`${styles.contactinput} ${error.name ? styles.errorInput : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {error.name && <p className={styles.errorMessage} aria-live="polite">{error.name}</p>}
          </div>

          {/* Email Input */}
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter a valid email address"
              className={`${styles.contactinput} ${error.email ? styles.errorInput : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.email && <p className={styles.errorMessage} aria-live="polite">{error.email}</p>}
          </div>

          {/* Phone Number Input */}
          <div className={styles.inputWrapper}>
            <input
              type="tel"
              placeholder="Enter a valid phone number"
              className={`${styles.contactinput} ${error.phone ? styles.errorInput : ''}`}
              maxLength="10"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {error.phone && <p className={styles.errorMessage} aria-live="polite">{error.phone}</p>}
          </div>

          {/* Message Textarea */}
          <div className={styles.inputWrapper}>
            <textarea
              placeholder="Enter your Message"
              className={`${styles.contactinput} ${error.message ? styles.errorInput : ''}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {error.message && <p className={styles.errorMessage} aria-live="polite">{error.message}</p>}
          </div>

          <button type="submit" className={styles.contactsubmitbtn}>
            SUBMIT
          </button>
        </form>

        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <div className={styles.iconcontainer}>
          <div className={styles.contactinfo}>
            <div className={styles.infoitem}>
              <Users className={styles.infoicon} size={28} />
              <h3>ABOUT CLUB</h3>
              <p>Running Guide</p>
              <p>Workouts</p>
            </div>
            <div className={styles.infoitem}>
              <Phone className={styles.infoicon} size={28} />
              <h3>PHONE</h3>
              <p>+(91) 9544044544</p>
              <p>+(91) 8089090143</p>
            </div>
            <div className={styles.infoitem}>
              <MapPin className={styles.infoicon} size={28} />
              <h3>OUR LOCATION</h3>
              <p>
                Kannoth building, near Darussalam School,
                Vallathol Junction, Thrikkakara P.O, Kochi, Kerala 682021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
