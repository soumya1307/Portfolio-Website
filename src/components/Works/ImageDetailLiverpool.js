import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailLiverpool.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LivRedHoodie from '../../assets/Liv_Red Hoodie.jpg';
import LivRedTShirt from '../../assets/Liv_Red T-Shirt.jpg';
import LivRedPillow from '../../assets/Liv_Red Pillow.jpg';
import LivRedMug from '../../assets/Liv_Red Mug.jpg';
import LivRedBottle from '../../assets/Liv_Red Bottle.jpg';
import LivBlackHoodie from '../../assets/Liv_Black Hoodie.jpg';
import LivBlackTShirt from '../../assets/Liv_Black T-Shirt.jpg';
import LivBlackPillow from '../../assets/Liv_Black Pillow.jpg';
import LivBlackMug from '../../assets/Liv_Black Mug.jpg';
import LivBlackBottle from '../../assets/Liv_Black Bottle.jpg';


const allPortfolioImages = [
  { src: LivRedHoodie, description: 'Liverpool Red Hoodie' },
  { src: LivRedTShirt, description: 'Liverpool Red T-Shirt' },
  { src: LivRedPillow, description: 'Liverpool Red Pillow' },
  { src: LivRedMug, description: 'Liverpool Red Mug' },
  { src: LivRedBottle, description: 'Liverpool Red Bottle' },
  { src: LivBlackHoodie, description: 'Liverpool Black Hoodie' },
  { src: LivBlackTShirt, description: 'Liverpool Black T-Shirt' },
  { src: LivBlackPillow, description: 'Liverpool Black Pillow' },
  { src: LivBlackMug, description: 'Liverpool Black Mug' },
  { src: LivBlackBottle, description: 'Liverpool Black Bottle' },
];

export default function ImageDetailLiv() {
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
      <div className="imageDetailLivContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailLivTitle">Liverpool - The Goodie Box</h2>
        <div className="imageDetailLivIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Liverpool fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design highlights the iconic anthem "You'll Never Walk Alone" representing unity, unwavering support, and resilience shared by the fans and the team.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailLivItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailLivImg" />
              <p className="imageDetailLivDesc">{image.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
