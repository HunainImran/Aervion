import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from "styled-components";
import './Header.css';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10*16)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <header className={navbar ? 'header active' : 'header'}>
        <div className='title'>
        <NavLink to="/" className='logo-container'>
            <img className= "logo" src="./aervionlogo1.png" alt="logo" />
        </NavLink>
        <h1>Aervion</h1>
        </div>
        <Navbar/>
    </header>
  )

  
}
// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .logo {
//     height: auto;
//     max-width: 15%;
//   }
//   .title {
//     display: flex;
//     justify-content: center;
//   }
// `;

export default Header
