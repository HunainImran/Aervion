import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
const Service = () => {
    const location = useLocation();
    const services = location.state.services;
    
    
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
    const Wrapper = styled.section`
    height: 100%;
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
      .checkbox-section{
        display: flex;
        flex-direction: column;
        align-items: centre;
        justify-content: centre;
        max-width: 50rem;
        label {
            color: white; /* Change the checkbox text color */
            margin-bottom: 0.5rem; /* Add some space between each checkbox */
            padding: 0.5rem; /* Add padding to the label */
            font-size: 1.8rem;
          }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">We can help you with</h2>

      <div className="container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/xzbnrvrw"
            // method="POST"
            className="contact-inputs">
            <div className="checkbox-section">
        {services.map((service, index) => (
          <label key={index}>
            <input type="checkbox" name={`services[${index}]`} value={service} />
            {service}
          </label>
        ))}
      </div>
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
}

export default Service
