import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailGreenHavenHomes.css';
import Portfolio47 from '../../assets/portfolio-47.png';

export default function ImageDetailGreenHavenHomes() {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="imageDetailGHHContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailGHHTitle">Green Haven Homes - Company Branding</h2>
        <div className="imageDetailGHHIntro">
          <p>Green Haven Homes is a forward-thinking real estate development company dedicated to building sustainable, eco-friendly homes. The brand emphasizes green building practices, energy efficiency, and creating living spaces that are both modern and environmentally responsible. <br/> The logo has been created using Adobe Illustrator, where the idea was to use green leaves to symbolize eco-friendly concept and a house to represent the real estate service and letter 'H'.</p>
        </div>
        <div className="imageDetailGHHImage">
          <img src={Portfolio47} alt="Green Haven Homes" className="imageDetailGHHImg" />
        </div>
      </div>
    </div>
  );
}
