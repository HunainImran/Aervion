import React from 'react';
import styled from "styled-components";

const Section2 = () => {
    return (
        <Wrapper> 
          <div className="container grid grid-two-column">
            {/* for image  */}
            <div className="section-hero-image">
              <picture>
                <img src="./about1.svg" alt="hero image" className="hero-img " />
              </picture>
            </div>
            <div className="section-hero-data">
            <p className="hero-top-data">OUR MISSION</p>
              <p className="hero-para">
              At the heart of our mission lies a commitment to excellence and a passion for pushing technological boundaries. We
                strive to be at the forefront of the digital revolution, offering bespoke solutions that empower businesses and
                individuals alike.
              </p>
            </div>
          </div>
          </Wrapper>
      );
    };
    
    const Wrapper = styled.section`
    //   padding: 9rem 0;
    
      .check{
        grid-auto-flow: column;
      }
        height: 100vh;
        width: 100%;
        background: #EFF0F2;
        display : flex;
        align-items : centre;
        justify-content : centre;

      .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    
      .btn {
        max-width: 16rem;
      }
    
      .hero-top-data {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: rgb(38, 43, 63);
      }
    
      .hero-heading {
        text-transform: uppercase;
        font-size: 6.4rem;
      }
    
      .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
        font-size: 3rem;
        color: black;
        font-weight : 500;
      }
    
      .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      picture {
        text-align: center;
      }
    
      .hero-img {
        max-width: 80%;
      }
    
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 100%;
        padding: 4rem 0;
        .grid {
          gap: 0.2rem;
        }
        .hero-para{
          font-size: 2.5rem;
        }
        .hero-img{
          max-width: 70%
        }
      }
      }
    `;


export default Section2
