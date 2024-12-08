import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailManchesterUnited.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MURedHoodie from '../../assets/MU_Red Hoodie.jpg';
import MURedTShirt from '../../assets/MU_Red T-Shirt.jpg';
import MURedPillow from '../../assets/MU_Red Pillow.jpg';
import MURedMug from '../../assets/MU_Red Mug.jpg';
import MURedBottle from '../../assets/MU_Red Bottle.jpg';
import MUBlackHoodie from '../../assets/MU_Black Hoodie.jpg';
import MUBlackTShirt from '../../assets/MU_Black T-Shirt.jpg';
import MUBlackPillow from '../../assets/MU_Black Pillow.jpg';
import MUBlackMug from '../../assets/MU_Black Mug.jpg';
import MUBlackBottle from '../../assets/MU_Black Bottle.jpg';


const allPortfolioImages = [
  { src: MURedHoodie, description: 'Manchester United Red Hoodie' },
  { src: MURedTShirt, description: 'Manchester United Red T-Shirt' },
  { src: MURedPillow, description: 'Manchester United Red Pillow' },
  { src: MURedMug, description: 'Manchester United Red Mug' },
  { src: MURedBottle, description: 'Manchester United Red Bottle' },
  { src: MUBlackHoodie, description: 'Manchester United Black Hoodie' },
  { src: MUBlackTShirt, description: 'Manchester United Black T-Shirt' },
  { src: MUBlackPillow, description: 'Manchester United Black Pillow' },
  { src: MUBlackMug, description: 'Manchester United Black Mug' },
  { src: MUBlackBottle, description: 'Manchester United Black Bottle' },
];

export default function ImageDetailMU() {
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
      <div className="imageDetailMUContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailMUTitle">Manchester United - The Goodie Box</h2>
        <div className="imageDetailMUIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Manchester United fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />Have used the iconic "Glory Glory Man United" chant to express fans pride symbolizing unity and celebration of their historic achievements.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailMUItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailMUImg" />
              <p className="imageDetailMUDesc">{image.description}</p>
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
