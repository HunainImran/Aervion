import React from 'react';
import styled from "styled-components";

const Section = () => {
    return (
        <Wrapper>   
          <div className="container grid grid-two-column">
            <div className="section-hero-data">
            <p className="hero-top-data">ABOUT US</p>
              <p className="hero-para">
              Welcome to AERVION, a leading software house dedicated to transforming innovative ideas into cutting-edge
                solutions. At AERVION, we specialize in a wide array of services to cater to the diverse needs of our
                clients.
              </p>
            </div>
    
            {/* for image  */}
            <div className="section-hero-image">
              <picture>
                <img src="./section-pic4.png" alt="hero image" className="hero-img " />
              </picture>
            </div>
          </div>
        </Wrapper>
      );
    };
    
    const Wrapper = styled.section`
    //   padding: 9rem 0;
    
      height:100vh;
      width:100%;
      background: black;
      display : flex;
      align-items : centre;
      justify-content : centre;
      
      .check{
        grid-auto-flow: column;
      }

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
        color: #00ADB8;
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
        color: white;
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
      }
    `;

export default Section
