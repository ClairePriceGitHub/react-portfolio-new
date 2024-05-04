import React from 'react';
// import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import { theme } from './theme';
import  Home from './pages/Home';
import  About from './pages/About';
import  ProjectAll from './pages/Projects';
import  ProjectSelected from './pages/Project';
import  Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Projects" element={<ProjectAll/>} />
              <Route path="/Detail" element={<ProjectSelected/>} />
              <Route path="/Contact" element={<Contact/>} />
            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  border-left: ${({ theme }) => theme.primaryBorder};
  border-right: ${({ theme }) => theme.primaryBorder};
`;

export default App;
