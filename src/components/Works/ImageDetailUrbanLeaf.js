import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailUrbanLeaf.css';
import Portfolio14 from '../../assets/portfolio-14.png';

export default function ImageDetailUrbanLeaf() {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="imageDetailULContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailULTitle">Urban Leaf - Company Branding</h2>
        <div className="imageDetailULIntro">
          <p>Urban Leaf is a new company dedicated to bringing nature into urban spaces through innovative indoor gardening solutions. They offer a range of products including indoor plants, hydroponic systems, vertical gardens, and smart gardening tools. Urban Leaf aims to make urban living greener, healthier, and more enjoyable by helping city dwellers grow their own plants, even in small spaces. <br /> A company branding concept is presented, where I designed the logo using the Adobe Illustrator. The main idea was to use a leaf as an element to symbolize gardening and the initial letter of the company. This helped me convey the message of the brand.</p>
        </div>
        <div className="imageDetailULImage">
          <img src={Portfolio14} alt="Urban Leaf" className="imageDetailULImg" />
        </div>
      </div>
    </div>
  );
}
