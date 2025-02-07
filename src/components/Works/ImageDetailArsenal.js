import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailArsenal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ARRedHoodie from '../../assets/AR_Red Hoodie.jpg';
import ARRedTShirt from '../../assets/AR_Red T-Shirt.jpg';
import ARRedPillow from '../../assets/AR_Red Pillow.jpg';
import ARRedARg from '../../assets/AR_Red Mug.jpg';
import ARRedBottle from '../../assets/AR_Red Bottle.jpg';
import ARBlackHoodie from '../../assets/AR_Black Hoodie.jpg';
import ARBlackTShirt from '../../assets/AR_Black T-Shirt.jpg';
import ARBlackPillow from '../../assets/AR_Black Pillow.jpg';
import ARBlackARg from '../../assets/AR_Black Mug.jpg';
import ARBlackBottle from '../../assets/AR_Black Bottle.jpg';


const allPortfolioImages = [
  { src: ARRedHoodie, description: 'Arsenal Red Hoodie' },
  { src: ARRedTShirt, description: 'Arsenal Red T-Shirt' },
  { src: ARRedPillow, description: 'Arsenal Red Pillow' },
  { src: ARRedARg, description: 'Arsenal Red Mug' },
  { src: ARRedBottle, description: 'Arsenal Red Bottle' },
  { src: ARBlackHoodie, description: 'Arsenal Black Hoodie' },
  { src: ARBlackTShirt, description: 'Arsenal Black T-Shirt' },
  { src: ARBlackPillow, description: 'Arsenal Black Pillow' },
  { src: ARBlackARg, description: 'Arsenal Black Mug' },
  { src: ARBlackBottle, description: 'Arsenal Black Bottle' },
];

export default function ImageDetailAR() {
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
    <div className="pageContainer">
      <div className="imageDetailARContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailARTitle">Arsenal - The Goodie Box</h2>
        <div className="imageDetailARIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Arsenal fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "The Gunners" symbolizing the iconic cannon and commemorating the historic unbeaten run of the 2003-2004 Premier League season.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailARItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailARImg" />
              <p className="imageDetailARDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
