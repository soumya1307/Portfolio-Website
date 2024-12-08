import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailJuventus.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JuvBlackHoodie from '../../assets/Juv_Black Hoodie.jpg';
import JuvBlackTShirt from '../../assets/Juv_Black T-Shirt.jpg';
import JuvBlackPillow from '../../assets/Juv_Black Pillow.jpg';
import JuvBlackMug from '../../assets/Juv_Black Mug.jpg';
import JuvBlackBottle from '../../assets/Juv_Black Bottle.jpg';


const allPortfolioImages = [
  { src: JuvBlackHoodie, description: 'Juventus Black Hoodie' },
  { src: JuvBlackTShirt, description: 'Juventus Black T-Shirt' },
  { src: JuvBlackPillow, description: 'Juventus Black Pillow' },
  { src: JuvBlackMug, description: 'Juventus Black Mug' },
  { src: JuvBlackBottle, description: 'Juventus Black Bottle' },
];

export default function ImageDetailJuv() {
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
      <div className="imageDetailJuvContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailJuvTitle">Juventus - The Goodie Box</h2>
        <div className="imageDetailJuvIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Juventus fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design incoporates "The Old Lady" reflecting the club's long history, tradition and enduring dominance in Italian football.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailJuvItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailJuvImg" />
              <p className="imageDetailJuvDesc">{image.description}</p>
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
