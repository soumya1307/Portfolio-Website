import React, { useState } from 'react';
import './Works.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio13 from '../../assets/portfolio-13.png';
import Portfolio15 from '../../assets/portfolio-15.png';
import Portfolio22 from '../../assets/portfolio-22.jpg';
import Portfolio38 from '../../assets/portfolio-38.png';
import Portfolio40 from '../../assets/portfolio-40.png';
import Portfolio42 from '../../assets/portfolio-42.png';
import Portfolio44 from '../../assets/portfolio-44.png';
import Portfolio46 from '../../assets/portfolio-46.png';
import MU from '../../assets/MU.png';
import MC from '../../assets/MC.png';
import AR from '../../assets/AR.png';
import LIV from '../../assets/LIV.png';
import CHE from '../../assets/CHE.png';
import TOT from '../../assets/TOT.png';
import RM from '../../assets/RM.png';
import BAR from '../../assets/BAR.png';
import JUV from '../../assets/JUV.png';
import IM from '../../assets/IM.png';
import ACM from '../../assets/ACM.png';

export default function Works() {
  const initialVisibleImages = 3;
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages);
  const allPortfolioImagesSS = [
    { src: Portfolio5, description: 'Sports Series - Poster Concept', link: '/sportsseries' },
  ];
  const allPortfolioImagesInvestWise = [
    { src: Portfolio22, description: 'InvestWise - Project', link: '/investwise' },
  ];
  const allPortfolioImagesUL = [
    { src: Portfolio13, description: 'Urban Leaf - Company Branding', link: '/urbanleaf' },
  ];
  const allPortfolioImagesTS = [
    { src: Portfolio38, description: 'Tech Savvy - Company Branding', link: '/techsavvy' },
  ];
  const allPortfolioImagesFF = [
    { src: Portfolio40, description: 'Fit Fusion - Company Branding', link: '/fitfusion' },
  ];
  const allPortfolioImagesEP = [
    { src: Portfolio42, description: 'Eco Pulse - Company Branding', link: '/ecopulse' },
  ];
  const allPortfolioImagesTB = [
    { src: Portfolio44, description: 'Taste Buds - Company Branding', link: '/tastebuds' },
  ];
  const allPortfolioImagesGHH = [
    { src: Portfolio46, description: 'Green Haven Homes - Company Branding', link: '/greenhavenhomes' },
  ];
  const allPortfolioImagesMU = [
    { src: MU, description: 'Manchester United - The Goodie Box', link: '/manchesterunited' },
  ];
  const allPortfolioImagesMC = [
    { src: MC, description: 'Manchester City - The Goodie Box', link: '/manchestercity' },
  ];
  const allPortfolioImagesAR = [
    { src: AR, description: 'Arsenal - The Goodie Box', link: '/arsenal' },
  ];
  const allPortfolioImagesLIV = [
    { src: LIV, description: 'Liverpool - The Goodie Box', link: '/liverpool' },
  ];
  const allPortfolioImagesCHE = [
    { src: CHE, description: 'Chelsea - The Goodie Box', link: '/chelsea' },
  ];
  const allPortfolioImagesTOT = [
    { src: TOT, description: 'Tottenham Hotspur - The Goodie Box', link: '/tottenhamhotspur' },
  ];
  const allPortfolioImagesRM = [
    { src: RM, description: 'Real Madrid - The Goodie Box', link: '/realmadrid' },
  ];
  const allPortfolioImagesBAR = [
    { src: BAR, description: 'Barcelona - The Goodie Box', link: '/barcelona' },
  ];
  const allPortfolioImagesJUV = [
    { src: JUV, description: 'Juventus - The Goodie Box', link: '/juventus' },
  ];
  const allPortfolioImagesIM = [
    { src: IM, description: 'Inter Milan - The Goodie Box', link: '/intermilan' },
  ];
  const allPortfolioImagesACM = [
    { src: ACM, description: 'AC Milan - The Goodie Box', link: '/acmilan' },
  ];
  const allPortfolioImagesIntern = [
    { src: Portfolio15, description: 'UA Kathachitra Pvt. Ltd. - Internship', link: '/internship' },
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
          {allPortfolioImagesFF.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesEP.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesTB.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesGHH.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesMU.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesMC.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesAR.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesLIV.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesCHE.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesTOT.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesRM.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesBAR.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesJUV.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesIM.slice(0, visibleImages).map((image, index) => (
            <div key={index}>
              <Link to={image.link}>
                <img src={image.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              </Link>
              <div className="worksImgDescBox">
                <span className="worksImgDesc">{image.description}</span>
              </div>
            </div>
          ))}
          {allPortfolioImagesACM.slice(0, visibleImages).map((image, index) => (
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
        {visibleImages < allPortfolioImagesSS.length + allPortfolioImagesUL.length + allPortfolioImagesTS + allPortfolioImagesFF + allPortfolioImagesEP + allPortfolioImagesTB + allPortfolioImagesGHH + allPortfolioImagesInvestWise + allPortfolioImagesMU + allPortfolioImagesMC + allPortfolioImagesAR + allPortfolioImagesIntern && (
          <button className="worksBtn" onClick={showMoreImages}>See More</button>
        )}
      </section>
    </div>
  );
}