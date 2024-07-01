import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailTasteBuds.css';
import Portfolio45 from '../../assets/portfolio-45.png';

export default function ImageDetailTasteBuds() {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="imageDetailTBContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailTBTitle">Taste Buds - Company Branding</h2>
        <div className="imageDetailTBIntro">
          <p>TasteBuds is a new gourmet food delivery service that focuses on bringing diverse and delicious culinary experiences to its customers' doorsteps. They offer a variety of meal kits, pre-prepared meals, and gourmet snacks, all curated from top chefs and local artisans. TasteBuds aims to delight food enthusiasts with high-quality ingredients, unique flavors, and exceptional convenience. <br/> The logo has been created using Adobe Illustrator, where the idea was to use the brand name along with the element tongue. To showcase delivery services the plates have been used to symbolize wheels and forks & spoons for gourmet food.</p>
        </div>
        <div className="imageDetailTBImage">
          <img src={Portfolio45} alt="Taste Buds" className="imageDetailTBImg" />
        </div>
      </div>
      <footer className="footer">
        Copyright &#169; 2024 Soumya Soni. All Rights Reserved
      </footer>
    </div>
  );
}
