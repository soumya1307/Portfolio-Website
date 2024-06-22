import React, { useState } from 'react';
import './Works.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio13 from '../../assets/portfolio-13.png';
import Portfolio20 from '../../assets/portfolio-20.png';
import Portfolio28 from '../../assets/portfolio-28.jpg';
import Portfolio44 from '../../assets/portfolio-44.png';

export default function Works() {
  const initialVisibleImages = 3;
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages);
  const allPortfolioImagesSS = [
    { src: Portfolio4, description: 'Sports Series - Poster Concept', link: '/sportsseries' },
  ];
  const allPortfolioImagesInvestWise = [
    { src: Portfolio28, description: 'InvestWise - Project', link: '/investwise' },
  ];
  const allPortfolioImagesUL = [
    { src: Portfolio13, description: 'Urban Leaf - Company Branding', link: '/urbanleaf' },
  ];
  const allPortfolioImagesTS = [
    { src: Portfolio44, description: 'Tech Savvy - Company Branding', link: '/techsavvy' },
  ];
  const allPortfolioImagesIntern = [
    { src: Portfolio20, description: 'UA Kathachitra Pvt. Ltd. - Internship', link: '/internship' },
  ];

  const showMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
  };

  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <div className="worksDescBox">
          <span className="worksDesc">Discover a world of creativity in my portfolio. Immerse yourself in visually stunning designs, where each piece tells a unique story. Explore my passion for transforming ideas into captivating visual narratives. Dive into the cards for more.</span>
        </div>
        <div className="worksImgs">
          {allPortfolioImagesSS.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesInvestWise.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesUL.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesTS.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesIntern.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleImages < allPortfolioImagesSS.length + allPortfolioImagesUL.length + allPortfolioImagesTS + allPortfolioImagesInvestWise + allPortfolioImagesIntern && (
          <button className="worksBtn" onClick={showMoreImages}>See More</button>
        )}
      </section>
    </div>
  );
}