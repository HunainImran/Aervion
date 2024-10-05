import React from 'react'

import styled from "styled-components";

const Careers = () => {
  const Wrapper = styled.section`
    height: 100vh;
    padding: 14rem 0 5rem 0;
    // background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    background-image: url('./comingsoonbg.jpg');
    background-size: cover;
    background-position: center center;
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      height: 80vh;
      background-size: cover;
    background-position: center center;
      padding: 20rem 0;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">COMING SOON</h2>
    </Wrapper>
  );
};

export default Careers