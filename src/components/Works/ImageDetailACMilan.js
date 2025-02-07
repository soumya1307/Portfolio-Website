import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailACMilan.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ACMRedHoodie from '../../assets/ACM_Red Hoodie.jpg';
import ACMRedTShirt from '../../assets/ACM_Red T-Shirt.jpg';
import ACMRedPillow from '../../assets/ACM_Red Pillow.jpg';
import ACMRedMug from '../../assets/ACM_Red Mug.jpg';
import ACMRedBottle from '../../assets/ACM_Red Bottle.jpg';
import ACMBlackHoodie from '../../assets/ACM_Black Hoodie.jpg';
import ACMBlackTShirt from '../../assets/ACM_Black T-Shirt.jpg';
import ACMBlackPillow from '../../assets/ACM_Black Pillow.jpg';
import ACMBlackMug from '../../assets/ACM_Black Mug.jpg';
import ACMBlackBottle from '../../assets/ACM_Black Bottle.jpg';


const allPortfolioImages = [
  { src: ACMRedHoodie, description: 'AC Milan Red Hoodie' },
  { src: ACMRedTShirt, description: 'AC Milan Red T-Shirt' },
  { src: ACMRedPillow, description: 'AC Milan Red Pillow' },
  { src: ACMRedMug, description: 'AC Milan Red Mug' },
  { src: ACMRedBottle, description: 'AC Milan Red Bottle' },
  { src: ACMBlackHoodie, description: 'AC Milan Black Hoodie' },
  { src: ACMBlackTShirt, description: 'AC Milan Black T-Shirt' },
  { src: ACMBlackPillow, description: 'AC Milan Black Pillow' },
  { src: ACMBlackMug, description: 'AC Milan Black Mug' },
  { src: ACMBlackBottle, description: 'AC Milan Black Bottle' },
];

export default function ImageDetailACM() {
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
      <div className="imageDetailACMContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailACMTitle">AC Milan - The Goodie Box</h2>
        <div className="imageDetailACMIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for AC Milan fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "Rossoneri" referring to AC Milan’s iconic red-and-black striped kits and "Milanisti" symbolizing club’s passionate fan base.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailACMItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailACMImg" />
              <p className="imageDetailACMDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
