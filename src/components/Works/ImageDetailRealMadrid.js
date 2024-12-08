import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailRealMadrid.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RMBlueHoodie from '../../assets/RM_Blue Hoodie.jpg';
import RMBlueTShirt from '../../assets/RM_Blue T-Shirt.jpg';
import RMBluePillow from '../../assets/RM_Blue Pillow.jpg';
import RMBlueMug from '../../assets/RM_Blue Mug.jpg';
import RMBlueBottle from '../../assets/RM_Blue Bottle.jpg';
import RMBlackHoodie from '../../assets/RM_Black Hoodie.jpg';
import RMBlackTShirt from '../../assets/RM_Black T-Shirt.jpg';
import RMBlackPillow from '../../assets/RM_Black Pillow.jpg';
import RMBlackMug from '../../assets/RM_Black Mug.jpg';
import RMBlackBottle from '../../assets/RM_Black Bottle.jpg';


const allPortfolioImages = [
  { src: RMBlueHoodie, description: 'Real Madrid Blue Hoodie' },
  { src: RMBlueTShirt, description: 'Real Madrid Blue T-Shirt' },
  { src: RMBluePillow, description: 'Real Madrid Blue Pillow' },
  { src: RMBlueMug, description: 'Real Madrid Blue Mug' },
  { src: RMBlueBottle, description: 'Real Madrid Blue Bottle' },
  { src: RMBlackHoodie, description: 'Real Madrid Black Hoodie' },
  { src: RMBlackTShirt, description: 'Real Madrid Black T-Shirt' },
  { src: RMBlackPillow, description: 'Real Madrid Black Pillow' },
  { src: RMBlackMug, description: 'Real Madrid Black Mug' },
  { src: RMBlackBottle, description: 'Real Madrid Black Bottle' },
];

export default function ImageDetailRM() {
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
      <div className="imageDetailRMContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailRMTitle">Real Madrid - The Goodie Box</h2>
        <div className="imageDetailRMIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Real Madrid fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design features "Los Blancos" paying tribute to the club's iconic all-white kit..</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailRMItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailRMImg" />
              <p className="imageDetailRMDesc">{image.description}</p>
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
