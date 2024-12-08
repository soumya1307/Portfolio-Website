import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailChelsea.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CheBlueHoodie from '../../assets/Che_Blue Hoodie.jpg';
import CheBlueTShirt from '../../assets/Che_Blue T-Shirt.jpg';
import CheBluePillow from '../../assets/Che_Blue Pillow.jpg';
import CheBlueMug from '../../assets/Che_Blue Mug.jpg';
import CheBlueBottle from '../../assets/Che_Blue Bottle.jpg';
import CheBlackHoodie from '../../assets/Che_Black Hoodie.jpg';
import CheBlackTShirt from '../../assets/Che_Black T-Shirt.jpg';
import CheBlackPillow from '../../assets/Che_Black Pillow.jpg';
import CheBlackMug from '../../assets/Che_Black Mug.jpg';
import CheBlackBottle from '../../assets/Che_Black Bottle.jpg';


const allPortfolioImages = [
  { src: CheBlueHoodie, description: 'Chelsea Blue Hoodie' },
  { src: CheBlueTShirt, description: 'Chelsea Blue T-Shirt' },
  { src: CheBluePillow, description: 'Chelsea Blue Pillow' },
  { src: CheBlueMug, description: 'Chelsea Blue Mug' },
  { src: CheBlueBottle, description: 'Chelsea Blue Bottle' },
  { src: CheBlackHoodie, description: 'Chelsea Black Hoodie' },
  { src: CheBlackTShirt, description: 'Chelsea Black T-Shirt' },
  { src: CheBlackPillow, description: 'Chelsea Black Pillow' },
  { src: CheBlackMug, description: 'Chelsea Black Mug' },
  { src: CheBlackBottle, description: 'Chelsea Black Bottle' },
];

export default function ImageDetailChe() {
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
      <div className="imageDetailCheContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailCheTitle">Chelsea - The Goodie Box</h2>
        <div className="imageDetailCheIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Chelsea fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design incorporates "The Blues" and "Pride of London" celebrating the club's iconic blue kit and emphasizing its legacy as one of London’s most successful football teams.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailCheItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailCheImg" />
              <p className="imageDetailCheDesc">{image.description}</p>
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
