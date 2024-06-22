import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; // Import Routes for v6
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ImageDetailSport from './components/Works/ImageDetailSport'; // Import the new component
import ImageDetailInvestWise from './components/Works/ImageDetailInvestWise'; // Import the new component
import ImageDetailUrbanLeaf from './components/Works/ImageDetailUrbanLeaf'; // Import the new component
import ImageDetailTechSavvy from './components/Works/ImageDetailTechSavvy'; // Import the new component
import ImageDetailIntern from './components/Works/ImageDetailIntern'; // Import the new component

function App() {
  return (
    <Router basename='/Portfolio-Website'>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Intro />
              <Skills />
              <Works />
              <Contact />
            </>
          } />
          <Route path="/sportsseries/" element={<ImageDetailSport />} />
          <Route path="/investwise/" element={<ImageDetailInvestWise />} />
          <Route path="/urbanleaf/" element={<ImageDetailUrbanLeaf />} />
          <Route path="/techsavvy/" element={<ImageDetailTechSavvy />} />
          <Route path="/internship/" element={<ImageDetailIntern />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
