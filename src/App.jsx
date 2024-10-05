import React from 'react'
import Home from './Home'
import Services from './Services'
import Careers from './Careers'
import ContactUs from './ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Service from './Service'

const App = () => {
  const theme = {
    colors: {
      heading: "#FFFFFF",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#00ADB8",
      bg: "rgb(249 249 255)",
      footer_bg: "#0C0C0C",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      menubg: "rgba(0, 0, 0, 0.9)",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
