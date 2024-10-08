import React from 'react'
import styled from "styled-components";
import axios from 'axios';

const ContactUs = () => {
  const Wrapper = styled.section`
    height: 100vh;
    padding: 14rem 0 5rem 0;
    // background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    background-image: url('./hbg.jpg');
    background-size: cover;
    background-position: center center;
    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.helper};
              border: 1px solid #18181D;
              color: #18181D;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Serialize form data
    let message = '';
    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    // Send AJAX request to Formspree
    $.ajax({
        url: 'https://formspree.io/f/xzbnrvrw',
        method: 'POST',
        data: { message: message },
        dataType: 'json',
        success: function() {
            alert('Thanks for the email, we\'ll be in touch promptly.');
        },
        error: function() {
            alert('Failed to send the email. Please try again later.');
        }
    });
};

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe> */}

      <div className="container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/xzbnrvrw"
            // method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs
