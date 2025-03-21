import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; // Import Routes for v6
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ImageDetailSport from './components/Works/ImageDetailSport';
import ImageDetailInvestWise from './components/Works/ImageDetailInvestWise'; 
import ImageDetailUrbanLeaf from './components/Works/ImageDetailUrbanLeaf'; 
import ImageDetailTechSavvy from './components/Works/ImageDetailTechSavvy'; 
import ImageDetailIntern from './components/Works/ImageDetailIntern'; 
import ImageDetailFitFusion from './components/Works/ImageDetailFitFusion';
import ImageDetailEcoPulse from './components/Works/ImageDetailEcoPulse';
import ImageDetailTasteBuds from './components/Works/ImageDetailTasteBuds';
import ImageDetailGreenHavenHomes from './components/Works/ImageDetailGreenHavenHomes';
import ImageDetailManchesterUnited from './components/Works/ImageDetailManchesterUnited';
import ImageDetailManchesterCity from './components/Works/ImageDetailManchesterCity';
import ImageDetailArsenal from './components/Works/ImageDetailArsenal';
import ImageDetailLiverpool from './components/Works/ImageDetailLiverpool';
import ImageDetailChelsea from './components/Works/ImageDetailChelsea';
import ImageDetailTottenhamHotspur from './components/Works/ImageDetailTottenhamHotspur';
import ImageDetailRealMadrid from './components/Works/ImageDetailRealMadrid';
import ImageDetailBarcelona from './components/Works/ImageDetailBarcelona';
import ImageDetailJuventus from './components/Works/ImageDetailJuventus';
import ImageDetailInterMilan from './components/Works/ImageDetailInterMilan';
import ImageDetailACMilan from './components/Works/ImageDetailACMilan';

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
              <Footer />
            </>
          } />
          <Route path="/sportsseries/" element={<ImageDetailSport />} />
          <Route path="/investwise/" element={<ImageDetailInvestWise />} />
          <Route path="/urbanleaf/" element={<ImageDetailUrbanLeaf />} />
          <Route path="/techsavvy/" element={<ImageDetailTechSavvy />} />
          <Route path="/fitfusion/" element={<ImageDetailFitFusion />} />
          <Route path="/ecopulse/" element={<ImageDetailEcoPulse />} />
          <Route path="/tastebuds/" element={<ImageDetailTasteBuds />} />
          <Route path="/greenhavenhomes/" element={<ImageDetailGreenHavenHomes />} />
          <Route path="/manchesterunited/" element={<ImageDetailManchesterUnited />} />
          <Route path="/manchestercity/" element={<ImageDetailManchesterCity />} />
          <Route path="/arsenal/" element={<ImageDetailArsenal />} />
          <Route path="/liverpool/" element={<ImageDetailLiverpool />} />
          <Route path="/chelsea/" element={<ImageDetailChelsea />} />
          <Route path="/tottenhamhotspur/" element={<ImageDetailTottenhamHotspur />} />
          <Route path="/realmadrid/" element={<ImageDetailRealMadrid />} />
          <Route path="/barcelona/" element={<ImageDetailBarcelona />} />
          <Route path="/juventus/" element={<ImageDetailJuventus />} />
          <Route path="/intermilan/" element={<ImageDetailInterMilan />} />
          <Route path="/acmilan/" element={<ImageDetailACMilan />} />
          <Route path="/internship/" element={<ImageDetailIntern />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
