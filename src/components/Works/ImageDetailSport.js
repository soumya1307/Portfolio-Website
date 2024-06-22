import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import './ImageDetailSport.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio7 from '../../assets/portfolio-7.png';
import Portfolio8 from '../../assets/portfolio-8.png';
import Portfolio9 from '../../assets/portfolio-9.png';
import Portfolio10 from '../../assets/portfolio-10.png';
import Portfolio11 from '../../assets/portfolio-11.png';
import Portfolio12 from '../../assets/portfolio-12.png';

const allPortfolioImages = [
  { src: Portfolio4, description: 'Cristiano Ronaldo Poster Concept' },
  { src: Portfolio6, description: 'Lionel Messi Poster Concept' },
  { src: Portfolio7, description: 'Tom Brady Poster Concept' },
  { src: Portfolio8, description: 'Tom Brady Poster Concept 2' },
  { src: Portfolio9, description: 'Lebron James Poster Concept' },
  { src: Portfolio10, description: 'Novak Djokovic Poster Concept' },
  { src: Portfolio11, description: 'Rafael Nadal Poster Concept' },
  { src: Portfolio12, description: 'Roger Federer Poster Concept' },
];

export default function ImageDetailSport() {
  const navigate = useNavigate();

  // Slick carousel settings
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
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
    <div className="imageDetailSportContainer">
      <button className="backButton" onClick={() => navigate(-1)}>←</button>
      <h2 className="imageDetailSportTitle">Sports Series - Poster Concept</h2>
      <div className="imageDetailSportIntro">
        <p>These are some of the Sports Poster Concept consisting of prominent athletes in their respective sports field. <br/> Designed for Sports Fans like me. I have always wanted a poster for my favourite sports person and have come up with these for other fans as well. Using Adobe Photoshop, the tools enabled me to customize the concept and present the athlete with the unique color scheme.</p>
      </div>
      <Slider {...settings}>
        {allPortfolioImages.map((image, index) => (
          <div key={index} className="imageDetailSportItem">
            <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailSportImg" />
            <p className="imageDetailSportDesc">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
