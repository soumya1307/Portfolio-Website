import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailEcoPulse.css';
import Portfolio43 from '../../assets/portfolio-43.png';

export default function ImageDetailEcoPulse() {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="imageDetailEPContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailEPTitle">Eco Pulse - Company Branding</h2>
        <div className="imageDetailEPIntro">
          <p>EcoPulse is a new startup focused on providing innovative and sustainable energy solutions. Their primary products include solar panels, wind turbines, and energy storage systems. EcoPulse aims to make renewable energy accessible to both residential and commercial markets, emphasizing environmental sustainability, cutting-edge technology, and community impact. <br/> I have created the logo using Adobe Illustrator where the initial letter 'E' and Pulse's symbolic meaning was incoporated to convey the brand name. The main idea was to bring out the sustainable energy theme with the design.</p>
        </div>
        <div className="imageDetailEPImage">
          <img src={Portfolio43} alt="Eco Pulse" className="imageDetailEPImg" />
        </div>
      </div>
      <footer className="footer">
        Copyright &#169; 2024 Soumya Soni. All Rights Reserved
      </footer>
    </div>
  );
}
