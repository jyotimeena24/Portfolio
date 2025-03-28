import React from 'react'; // Ensure React is imported

import About from './about';  
import Contact from './contact'
import Home from './home';
import Project from './project';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>

    {/* //we writes route */}


     <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project />} />
       
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
