import React, { useState } from 'react';
import './ContactForm.css';
import { getDatabase, ref, push } from 'firebase/database';
import { AiOutlineSend } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAgo82UVBKdgWI76uQaWHUX4aBSPh7HbEc",
  authDomain: "portfolio-d8a9f.firebaseapp.com",
  projectId: "portfolio-d8a9f",
  storageBucket: "portfolio-d8a9f.appspot.com",
  messagingSenderId: "913652828098",
  databaseURL: "https://portfolio-d8a9f-default-rtdb.firebaseio.com",
  appId: "1:913652828098:web:32f91461f53d9d09e0f85b",
  measurementId: "G-MDKGSHQCH3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase();
    const formSubmissionsRef = ref(database, 'formSubmissions');

    const newSubmission = {
      name,
      email,
      message
    };

    push(formSubmissionsRef, newSubmission)
      .then(() => {
        console.log('Form data saved to Firebase');

    
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error saving form data:', error);
      });
  };

  return (
    <div className="contact-form-section">
      <div className="purple-box">
        <h1 style={{ fontSize: "2.6em" }}>
          CONTACT <span className="black"> ME </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button
            variant="primary"
            type="Submit"
            style={{ maxWidth: "250px" }}
          >
            Submit <AiOutlineSend />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
