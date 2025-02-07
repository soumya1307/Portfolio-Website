import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailInterMilan.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMBlueHoodie from '../../assets/IM_Blue Hoodie.jpg';
import IMBlueTShirt from '../../assets/IM_Blue T-Shirt.jpg';
import IMBluePillow from '../../assets/IM_Blue Pillow.jpg';
import IMBlueMug from '../../assets/IM_Blue Mug.jpg';
import IMBlueBottle from '../../assets/IM_Blue Bottle.jpg';
import IMBlackHoodie from '../../assets/IM_Black Hoodie.jpg';
import IMBlackTShirt from '../../assets/IM_Black T-Shirt.jpg';
import IMBlackPillow from '../../assets/IM_Black Pillow.jpg';
import IMBlackMug from '../../assets/IM_Black Mug.jpg';
import IMBlackBottle from '../../assets/IM_Black Bottle.jpg';


const allPortfolioImages = [
  { src: IMBlueHoodie, description: 'Inter Milan Blue Hoodie' },
  { src: IMBlueTShirt, description: 'Inter Milan Blue T-Shirt' },
  { src: IMBluePillow, description: 'Inter Milan Blue Pillow' },
  { src: IMBlueMug, description: 'Inter Milan Blue Mug' },
  { src: IMBlueBottle, description: 'Inter Milan Blue Bottle' },
  { src: IMBlackHoodie, description: 'Inter Milan Black Hoodie' },
  { src: IMBlackTShirt, description: 'Inter Milan Black T-Shirt' },
  { src: IMBlackPillow, description: 'Inter Milan Black Pillow' },
  { src: IMBlackMug, description: 'Inter Milan Black Mug' },
  { src: IMBlackBottle, description: 'Inter Milan Black Bottle' },
];

export default function ImageDetailIM() {
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
      <div className="imageDetailIMContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailIMTitle">Inter Milan - The Goodie Box</h2>
        <div className="imageDetailIMIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Inter Milan fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "Nerazzurri" referring to Inter’s iconic black-and-blue striped kits and "Forza Inter" a powerful chant that energizes both the players and fans.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailIMItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailIMImg" />
              <p className="imageDetailIMDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
