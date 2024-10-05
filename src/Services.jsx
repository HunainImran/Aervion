import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";



const Services = () => {
  const services = [
    {
      "id" : 1,
      "title" : "Web Programming",
      "image" : "./service1.jpg",
      "description" : "Designing and developing interactive and dynamic websites or web applications using programming languages such as HTML, CSS, and JavaScript.",
      "services" : [
        "Website Development",
        "Front-End Development (HTML, CSS, JavaScript)",
        "Back-End Development (Server-side logic, databases, APIs)",
        "Full-Stack Development",
        "Custom Web Application Development",
        "Content Management Systems (CMS)",
        "E-commerce Development",
        "Web Security (Vulnerability protection)",
        "Performance Optimization (Speed and efficiency)",
        "Database Management",
        "Web Hosting and Deployment",
        "Web Accessibility (WCAG standards)",
        "Responsive Design (Adaptation to different devices)",
        "API Integration (Third-party services)",
        "Web Analytics (Traffic and user behavior tracking)",
        "Web Maintenance and Support",
        "Web Consultation and Planning",
        "Progressive Web App (PWA) Development",
        "Search Engine Optimization (SEO)",
        "Web Standards Compliance (Cross-browser compatibility)"
      ]     
    },
    {
      "id" : 2,
      "title" : "Cloud Computing",
      "image" : "./service2.jpg",
      "description" : "Elevate your business to new heights with our comprehensive cloud computing services, delivering unparalleled scalability, reliability, and security to empower your operations in the digital era."     
    },{
      "id" : 3,
      "title" : "Core Programming",
      "image" : "./service3.jpg",
      "description" : "Creating software applications by writing code in foundational programming languages like C, C++, or Java, focusing on algorithmic problem-solving and logical structures."     
    },{
      "id" : 4,
      "title" : "Embedded Systmes",
      "image" : "./service4.jpg",
      "description" : "Developing software that operates on specialized hardware (embedded systems) to control specific functions, often in real-time applications like microcontrollers in electronic devices."     
    },{
      "id" : 5,
      "title" : "Application Development",
      "image" : "./service5.jpg",
      "description" : "Designing, creating, and deploying software applications tailored to meet specific user needs, encompassing a range of platforms and technologies for diverse devices and operating systems."     
    }
  ]

  return (
    <Wrapper className="section">
      {/* <h2 className="common-heading">Our Services</h2> */}
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, title, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to={curElem.services ? '/service' : '/careers'} state={{ services: curElem.services }}>
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 14rem 0;
  background-image: url('./sbg.jpg');
  background-size: cover; /* Adjust as needed */
  background-position: center;
  // background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    height: 100%;
    .card-data {
      padding: 0 2rem;
      height: 100%;
    }
    border-radius : 0.4rem;

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      color : white;
      text-align: center;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid #18181D;
      display: flex;
      justify-content: center;
      align-items: center;
      // color: #18181D;
      color : white;
      font-size: 1.4rem;

      &:hover {
        background-color: #18181D;
        color: #fff;
      }
    }
    p{
      text-align: center;
      color : white;
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;


export default Services
