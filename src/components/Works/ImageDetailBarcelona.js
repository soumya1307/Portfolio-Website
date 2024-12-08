import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ImageDetailBarcelona.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BarBlueHoodie from '../../assets/Bar_Blue Hoodie.jpg';
import BarBlueTShirt from '../../assets/Bar_Blue T-Shirt.jpg';
import BarBluePillow from '../../assets/Bar_Blue Pillow.jpg';
import BarBlueMug from '../../assets/Bar_Blue Mug.jpg';
import BarBlueBottle from '../../assets/Bar_Blue Bottle.jpg';
import BarMaroonHoodie from '../../assets/Bar_Maroon Hoodie.jpg';
import BarMaroonTShirt from '../../assets/Bar_Maroon T-Shirt.jpg';
import BarMaroonPillow from '../../assets/Bar_Maroon Pillow.jpg';
import BarMaroonMug from '../../assets/Bar_Maroon Mug.jpg';
import BarMaroonBottle from '../../assets/Bar_Maroon Bottle.jpg';
import BarBlackHoodie from '../../assets/Bar_Black Hoodie.jpg';
import BarBlackTShirt from '../../assets/Bar_Black T-Shirt.jpg';
import BarBlackPillow from '../../assets/Bar_Black Pillow.jpg';
import BarBlackMug from '../../assets/Bar_Black Mug.jpg';
import BarBlackBottle from '../../assets/Bar_Black Bottle.jpg';


const allPortfolioImages = [
  { src: BarBlueHoodie, description: 'Barcelona Blue Hoodie' },
  { src: BarBlueTShirt, description: 'Barcelona Blue T-Shirt' },
  { src: BarBluePillow, description: 'Barcelona Blue Pillow' },
  { src: BarBlueMug, description: 'Barcelona Blue Mug' },
  { src: BarBlueBottle, description: 'Barcelona Blue Bottle' },
  { src: BarMaroonHoodie, description: 'Barcelona Maroon Hoodie' },
  { src: BarMaroonTShirt, description: 'Barcelona Maroon T-Shirt' },
  { src: BarMaroonPillow, description: 'Barcelona Maroon Pillow' },
  { src: BarMaroonMug, description: 'Barcelona Maroon Mug' },
  { src: BarMaroonBottle, description: 'Barcelona Maroon Bottle' },
  { src: BarBlackHoodie, description: 'Barcelona Black Hoodie' },
  { src: BarBlackTShirt, description: 'Barcelona Black T-Shirt' },
  { src: BarBlackPillow, description: 'Barcelona Black Pillow' },
  { src: BarBlackMug, description: 'Barcelona Black Mug' },
  { src: BarBlackBottle, description: 'Barcelona Black Bottle' },
];

export default function ImageDetailBar() {
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
      <div className="imageDetailBarContainer">
        <button className="backButton" onClick={() => navigate(-1)}>←</button>
        <h2 className="imageDetailBarTitle">Barcelona - The Goodie Box</h2>
        <div className="imageDetailBarIntro">
          <p>A collection of Hoodies, T-Shirts, Pillows, Mugs and Bottles is specially designed for Barcelona fans! These fan-focused goodies will let you celebrate your team spirit in style. <br />The design highlights "Blaugrana" representing the club's iconic blue and claret colors, and "Força Barça," a rallying chant symbolizing encouragement for the players and unity among fans.</p>
        </div>
        <Slider {...settings}>
          {allPortfolioImages.map((image, index) => (
            <div key={index} className="imageDetailBarItem">
              <img src={image.src} alt={`Portfolio ${index + 1}`} className="imageDetailBarImg" />
              <p className="imageDetailBarDesc">{image.description}</p>
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
