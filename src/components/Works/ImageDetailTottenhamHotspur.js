import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailTottenhamHotspur.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TotNavyBlueHoodie from '../../assets/Tot_Navy Blue Hoodie.jpg';
import TotNavyBlueTShirt from '../../assets/Tot_Navy Blue T-Shirt.jpg';
import TotNavyBluePillow from '../../assets/Tot_Navy Blue Pillow.jpg';
import TotNavyBlueMug from '../../assets/Tot_Navy Blue Mug.jpg';
import TotNavyBlueBottle from '../../assets/Tot_Navy Blue Bottle.jpg';
import TotBlackHoodie from '../../assets/Tot_Black Hoodie.jpg';
import TotBlackTShirt from '../../assets/Tot_Black T-Shirt.jpg';
import TotBlackPillow from '../../assets/Tot_Black Pillow.jpg';
import TotBlackMug from '../../assets/Tot_Black Mug.jpg';
import TotBlackBottle from '../../assets/Tot_Black Bottle.jpg';


const allPortfolioImages = [
  { src: TotNavyBlueHoodie, description: 'Tottenham Hotspur Navy Blue Hoodie' },
  { src: TotNavyBlueTShirt, description: 'Tottenham Hotspur Navy Blue T-Shirt' },
  { src: TotNavyBluePillow, description: 'Tottenham Hotspur Navy Blue Pillow' },
  { src: TotNavyBlueMug, description: 'Tottenham Hotspur Navy Blue Mug' },
  { src: TotNavyBlueBottle, description: 'Tottenham Hotspur Navy Blue Bottle' },
  { src: TotBlackHoodie, description: 'Tottenham Hotspur Black Hoodie' },
  { src: TotBlackTShirt, description: 'Tottenham Hotspur Black T-Shirt' },
  { src: TotBlackPillow, description: 'Tottenham Hotspur Black Pillow' },
  { src: TotBlackMug, description: 'Tottenham Hotspur Black Mug' },
  { src: TotBlackBottle, description: 'Tottenham Hotspur Black Bottle' },
];

export default function ImageDetailTot() {
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
      <div className="imageDetailTotContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailTotTitle">Tottenham Hotspur - The Goodie Box</h2>
        <div className="imageDetailTotIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Tottenham Hotspur fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "Come On You Spurs", a passionate rallying cry that embodies unity and pride among fans, motivating both players and supporters.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailTotItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailTotImg" />
              <p className="imageDetailTotDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
