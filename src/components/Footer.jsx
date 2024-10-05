import React from 'react'
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
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

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>AERVION</h3>
            <p>Providing solutions to your innovations.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="xyz"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} AERVION. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: 0 auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    // transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    
    padding: 9rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        &:hover{
          border: 2px solid ${({ theme }) => theme.colors.helper};
          transition : all 0.2s;
        }

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;

          &:hover{
            
            color: ${({ theme }) => theme.colors.helper};
            transition : all 0.2s;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 5rem;

      hr {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer
