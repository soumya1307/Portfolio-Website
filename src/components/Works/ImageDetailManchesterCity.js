import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailManchesterCity.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MCLightBlueHoodie from '../../assets/MC_Light Blue Hoodie.jpg';
import MCLightBlueTShirt from '../../assets/MC_Light Blue T-Shirt.jpg';
import MCLightBluePillow from '../../assets/MC_Light Blue Pillow.jpg';
import MCLightBlueMCg from '../../assets/MC_Light Blue Mug.jpg';
import MCLightBlueBottle from '../../assets/MC_Light Blue Bottle.jpg';
import MCBlackHoodie from '../../assets/MC_Black Hoodie.jpg';
import MCBlackTShirt from '../../assets/MC_Black T-Shirt.jpg';
import MCBlackPillow from '../../assets/MC_Black Pillow.jpg';
import MCBlackMCg from '../../assets/MC_Black Mug.jpg';
import MCBlackBottle from '../../assets/MC_Black Bottle.jpg';


const allPortfolioImages = [
  { src: MCLightBlueHoodie, description: 'Manchester City Light Blue Hoodie' },
  { src: MCLightBlueTShirt, description: 'Manchester City Light Blue T-Shirt' },
  { src: MCLightBluePillow, description: 'Manchester City Light Blue Pillow' },
  { src: MCLightBlueMCg, description: 'Manchester City Light Blue Mug' },
  { src: MCLightBlueBottle, description: 'Manchester City Light Blue Bottle' },
  { src: MCBlackHoodie, description: 'Manchester City Black Hoodie' },
  { src: MCBlackTShirt, description: 'Manchester City Black T-Shirt' },
  { src: MCBlackPillow, description: 'Manchester City Black Pillow' },
  { src: MCBlackMCg, description: 'Manchester City Black Mug' },
  { src: MCBlackBottle, description: 'Manchester City Black Bottle' },
];

export default function ImageDetailMC() {
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
      <div className="imageDetailMCContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailMCTitle">Manchester City - The Goodie Box</h2>
        <div className="imageDetailMCIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Manchester City fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "Cityzens" representing the passionate supporters and celebrating the historic achievement of winning four consecutive Premier League titles.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailMCItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailMCImg" />
              <p className="imageDetailMCDesc">{image.description}</p>
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
