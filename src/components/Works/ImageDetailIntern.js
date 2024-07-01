import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailIntern.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio15 from '../../assets/portfolio-15.png';
import Portfolio16 from '../../assets/portfolio-16.png';
import Portfolio17 from '../../assets/portfolio-17.png';
import Portfolio18 from '../../assets/portfolio-18.png';
import Portfolio19 from '../../assets/portfolio-19.png';
import Portfolio20 from '../../assets/portfolio-20.png';
import Portfolio21 from '../../assets/portfolio-21.png';

const allPortfolioImages = [
  { src: Portfolio15, description: 'UA Kathachitra Pvt. Ltd.' },
  { src: Portfolio16, description: 'Behind the Scenes Post of movie "Josef - Born in Grace"' },
  { src: Portfolio17, description: 'Celebrating World Tourism Day Post - Uttarakhand' },
  { src: Portfolio18, description: 'Story behind the short film "The Salon"' },
  { src: Portfolio19, description: 'Viewer Resonspe for movie "Josef - Born in Grace"' },
  { src: Portfolio20, description: 'Screening Post for the short film "The Salon"' },
  { src: Portfolio21, description: 'Celebrating National Cinema Day Post' },
];

export default function ImageDetailIntern() {
  const navigate = useNavigate();

  // Slick carousel settings
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="pageContainer">
      <div className="imageDetailInternContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailInternTitle">UA Kathachitra Pvt. Ltd. - Internship</h2>
        <div className="imageDetailInternIntro">
          <p>UA Kathachitra is an independent film production & publishing company that makes story-driven short and independent films. <br /><br /> I was part of the Social Media Team, where in I had the role of designing the social media posts for various events. It all started with designing the background layout that could give a unique look to the event post. Using Canva, I utilized the graphical elements to create the designs accordingly. These are some of my work presented.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailInternItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailInternImg" />
              <p className="imageDetailInternDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <footer className="footer">
        Copyright &#169; 2024 Soumya Soni. All Rights Reserved
      </footer>
    </div>
  );
}
