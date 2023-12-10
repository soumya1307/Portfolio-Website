import React, {useState} from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import Portfolio7 from '../../assets/portfolio-7.png'
import Portfolio8 from '../../assets/portfolio-8.png'
import Portfolio9 from '../../assets/portfolio-9.png'
import Portfolio10 from '../../assets/portfolio-10.png'
import Portfolio11 from '../../assets/portfolio-11.png'
import Portfolio12 from '../../assets/portfolio-12.png'

export default function Works() {
  const initialVisibleImages = 3;
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages)
  const allPortfolioImages = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7, 
    Portfolio8, 
    Portfolio9, 
    Portfolio10, 
    Portfolio11, 
    Portfolio12, 
  ]

  const showMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
  }

  return (
    <div>
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <div className="worksDescBox">
              <span className="worksDesc">Discover a world of creativity in my portfolio. Immerse yourself in visually stunning designs, where each piece tells a unique story. Explore my passion for transforming ideas into captivating visual narratives.</span>
            </div>
            <div className="worksImgs">
              {allPortfolioImages.slice(0, visibleImages).map((image, index) => (
              <img key={index} src={image} alt={`Portfolio ${index + 1}`} className="worksImg" />
              ))}
            </div>
            {visibleImages < allPortfolioImages.length && (
              <button className="worksBtn" onClick={showMoreImages}>See More</button>
            )}
        </section>
    </div>
  )
}
