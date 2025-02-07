import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailInvestWise.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio22 from '../../assets/portfolio-22.jpg';
import Portfolio23 from '../../assets/portfolio-23.jpg';
import Portfolio24 from '../../assets/portfolio-24.jpg';
import Portfolio25 from '../../assets/portfolio-25.jpg';
import Portfolio26 from '../../assets/portfolio-26.jpg';
import Portfolio27 from '../../assets/portfolio-27.jpg';
import Portfolio28 from '../../assets/portfolio-28.jpg';
import Portfolio29 from '../../assets/portfolio-29.jpg';
import Portfolio30 from '../../assets/portfolio-30.jpg';
import Portfolio31 from '../../assets/portfolio-31.jpg';
import Portfolio32 from '../../assets/portfolio-32.jpg';
import Portfolio33 from '../../assets/portfolio-33.jpg';
import Portfolio34 from '../../assets/portfolio-34.jpg';
import Portfolio35 from '../../assets/portfolio-35.jpg';
import Portfolio36 from '../../assets/portfolio-36.jpg';
import Portfolio37 from '../../assets/portfolio-37.jpg';

const allPortfolioImages = [
  { src: Portfolio22, description: 'Splash Screen' },
  { src: Portfolio23, description: 'Login Page' },
  { src: Portfolio24, description: 'Sign Up Page' },
  { src: Portfolio25, description: 'Home Page' },
  { src: Portfolio26, description: 'Market Cap Fetcher Page' },
  { src: Portfolio27, description: 'Algorithms Page' },
  { src: Portfolio28, description: 'Transaction Report Page' },
  { src: Portfolio29, description: 'User Profile Page' },
  { src: Portfolio30, description: 'Notifications Page' },
  { src: Portfolio31, description: 'Notification Display' },
  { src: Portfolio32, description: 'Information Page' },
  { src: Portfolio33, description: 'About Daily Algorithm' },
  { src: Portfolio34, description: 'About Weekly Algorithm' },
  { src: Portfolio35, description: 'About Daily-Weekly Algorithm' },
  { src: Portfolio36, description: 'About RSI Trading Algorithm' },
  { src: Portfolio37, description: 'Graphical Representation of Algorithms' },
];

export default function ImageDetailInvestWise() {
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
      <div className="imageDetailInvestWiseContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailInvestWiseTitle">InvestWise - Project</h2>
        <div className="imageDetailInvestWiseIntro">
          <p>InvestWise is an Equity Analysis Mobile Application, developed with a robust combination of Python for algorithms, Flutter for the user interface, and Firebase for database management, offers a comprehensive suite of features. It includes four distinct algorithms: daily, weekly, daily-weekly, and RSI, all designed to enhance your trading experience. The app maintains detailed transaction reports and an extensive portfolio for each user. Additionally, it features an M-CAP Fetcher and provides graphical representations of the algorithms for better visualization and understanding.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailInvestWiseItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailInvestWiseImg" />
              <p className="imageDetailInvestWiseDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
