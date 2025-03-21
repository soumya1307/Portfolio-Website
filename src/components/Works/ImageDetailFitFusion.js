import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailFitFusion.css';
import Portfolio41 from '../../assets/portfolio-41.png';

export default function ImageDetailFitFusion() {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="imageDetailFFContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailFFTitle">Fit Fusion - Company Branding</h2>
        <div className="imageDetailFFIntro">
          <p>Fit Fusion is a new fitness brand that offers a comprehensive range of fitness services and products, including personal training, group fitness classes, online workout programs, and nutritional supplements. Fit Fusion aims to create a community-driven environment where fitness enthusiasts of all levels can achieve their health and wellness goals through a fusion of innovative workouts, expert guidance, and holistic support.<br/> The logo has been created using Adobe Illustrator, where the dumbbell is designed to symbolize fitness and colors to showcase fusion. The two dumbbells have also been used to show the letter 'F' for the brand name. </p>
        </div>
        <div className="imageDetailFFImage">
          <img src={Portfolio41} alt="Fit Fusion" className="imageDetailFFImg" />
        </div>
      </div>
    </div>
  );
}
