import React, { useState } from 'react';
import { Users, Phone, MapPin } from 'lucide-react'; // Import icons
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState({ name: '', phone: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newError = { name: '', phone: '' }; // Reset error messages

    // Validate the phone number
    if (!/^\d{10}$/.test(phoneNumber)) {
      newError.phone = 'Please enter a valid 10-digit phone number.';
      
     valid = false;
    }

    // Validate the name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newError.name = 'Please enter a valid name (letters only).';
      valid = false;
    }

    // Update state with new error messages
    setError(newError);

    // Proceed with form submission logic if valid
    if (valid) {
      // Reset the error message
      setError({ name: '', phone: '' });
      // Your submission logic here (e.g., send data to an API)
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactbox}>
        <h1 className={styles.contacttitle}>Contact Us</h1>
        <p className={styles.contactsubtitle}>
          {/* Any questions or remarks? Just write us a message! */}
        </p>

        <form className={styles.contactform} onSubmit={handleSubmit}>
          {/* First Group of Inputs (Email and Name) */}
          <div className={styles.contactinputgroup}>
            <input
              type="text"
              placeholder="Enter your Name"
              className={styles.contactinput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
            
            <input
              type="email"
              placeholder="Enter a valid email address"
              className={styles.contactinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Second Group (Address and Phone) */}
          <div className={styles.contactinputgroup}>
            <input
              type="tel"
              placeholder="Enter a valid phone number"
              className={styles.contactinput}
              maxLength="10"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {error.phone && <p className={styles.error}>{error.phone}</p>}
            
            <textarea
              placeholder="Enter your Message"
              className={styles.contactinput}
              required
            />
          </div>

          <button type="submit" className={styles.contactsubmitbtn}>
            SUBMIT
          </button>
        </form>

        {/* Icon Container */}
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