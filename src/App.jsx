import React from 'react';
// import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import  Home from './pages/Home';
import  ProjectAll from './pages/Projects';
import  ProjectSelected from './pages/Project';
import  Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

// import Wrapper from './components/Wrapper';




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home/>} >
//         <Route path="/Projects" element={<ProjectAll/>} />
//         <Route path="/Detail" element={<ProjectSelected/>} />
//         <Route path="/Contact" element={<Contact/>} />
//     </Route>
//   )
// )

// function App({router}) {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }





function App() {
  return (
    
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Projects" element={<ProjectAll/>} />
            <Route path="/Detail" element={<ProjectSelected/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    
     

    

  
  );
}

const Wrapper = styled.div`
  border-left: 20px solid black;
  border-right: 20px solid black;

`;

export default App;
