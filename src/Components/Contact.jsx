import React, { useState } from 'react';
import { Users, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newError = { name: '', email: '', phone: '', message: '' };

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newError.name = 'Invalid Input';
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = 'Invalid Input';
      valid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      newError.phone = 'Invalid Input';
      valid = false;
    }

    if (!message.trim()) {
      newError.message = 'Invalid Input';
      valid = false;
    }

    setError(newError);

    if (valid) {
      console.log('Form submitted successfully with data:', { name, email, phoneNumber, message });
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setError({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className={styles.contactmAIN}>
      <div className={styles.contactbox}>
        <h1 className={styles.contacttitle}> Let's Talk About Your Project</h1>
        <form className={styles.contactform} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Enter your Name"
                className={`${styles.contactinput} ${error.name ? styles.errorInput : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <p className={styles.errorMessage}>{error.name}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className={`${styles.contactinput} ${error.email ? styles.errorInput : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <p className={styles.errorMessage}>{error.email}</p>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                placeholder="Enter a valid phone number"
                className={`${styles.contactinput} ${error.phone ? styles.errorInput : ''}`}
                maxLength="10"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {error.phone && <p className={styles.errorMessage}>{error.phone}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <textarea
                placeholder="Enter your Message"
                className={`${styles.contactinput} ${error.message ? styles.errorInput : ''}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && <p className={styles.errorMessage}>{error.message}</p>}
            </div>
          </div>

          <button type="submit" className={styles.contactsubmitbtn}>
            SUBMIT
          </button>
        </form>

        <div className={styles.iconcontainer}>
          <div className={styles.contactinfo}>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <Users className={styles.infoicon} size={28} />
              <div>
              
                <p>Azaza Marketing solutions promote your brand with expert Digital marketing,Web developmemt and Branding</p>
                <p>Workouts</p>
              </div>
            </div>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <Phone className={styles.infoicon} size={28} />
              <div>
                
                <p>&nbsp;&nbsp;+(91)7736558999 , +(91)9867453210</p>
                
              
              </div>
            </div>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <MapPin className={styles.infoicon} size={28} />
              <div>
               
                <p>
                  Kannoth building, near Darussalam School,
                  Vallathol Junction, Thrikkakara P.O, Kochi, Kerala 682021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
