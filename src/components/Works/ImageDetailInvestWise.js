import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import './ImageDetailInvestWise.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import Portfolio38 from '../../assets/portfolio-38.jpg';
import Portfolio39 from '../../assets/portfolio-39.jpg';
import Portfolio40 from '../../assets/portfolio-40.jpg';
import Portfolio41 from '../../assets/portfolio-41.jpg';
import Portfolio42 from '../../assets/portfolio-42.jpg';
import Portfolio43 from '../../assets/portfolio-43.jpg';

const allPortfolioImages = [
  { src: Portfolio28, description: 'Splash Screen' },
  { src: Portfolio29, description: 'Login Page' },
  { src: Portfolio30, description: 'Sign Up Page' },
  { src: Portfolio31, description: 'Home Page' },
  { src: Portfolio32, description: 'Market Cap Fetcher Page' },
  { src: Portfolio33, description: 'Algorithms Page' },
  { src: Portfolio34, description: 'Transaction Report Page' },
  { src: Portfolio35, description: 'User Profile Page' },
  { src: Portfolio36, description: 'Notifications Page' },
  { src: Portfolio37, description: 'Notification Display' },
  { src: Portfolio38, description: 'Information Page' },
  { src: Portfolio39, description: 'About Daily Algorithm' },
  { src: Portfolio40, description: 'About Weekly Algorithm' },
  { src: Portfolio41, description: 'About Daily-Weekly Algorithm' },
  { src: Portfolio42, description: 'About RSI Trading Algorithm' },
  { src: Portfolio43, description: 'Graphical Representation of Algorithms' },
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
  );
}
