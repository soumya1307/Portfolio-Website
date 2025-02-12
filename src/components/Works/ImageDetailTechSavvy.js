import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageDetailTechSavvy.css';
import Portfolio39 from '../../assets/portfolio-39.png';

export default function ImageDetailTechSavvy() {
    const navigate = useNavigate();

    return (
        <div className="pageContainer">
            <div className="imageDetailTSContainer">
                <button className="backButton" onClick={() => navigate(-1)}>←</button>
                <h2 className="imageDetailTSTitle">Tech Savvy - Company Branding</h2>
                <div className="imageDetailTSIntro">
                    <p>Tech Savvy is a new technology consulting firm that provides innovative tech solutions for businesses of all sizes. Their services include IT consulting, software development, cybersecurity, cloud solutions, and digital transformation strategies. Tech Savvy aims to help businesses navigate the ever-evolving tech landscape, ensuring they stay ahead of the curve with cutting-edge solutions.<br />The logo is created using Adobe Illustrator, where in the idea was to use letter 'S' as the central concept for the brand name and create the modern technology design around it.</p>
                </div>
                <div className="imageDetailTSImage">
                    <img src={Portfolio39} alt="Tech Savvy" className="imageDetailTSImg" />
                </div>
            </div>
        </div>
    );
}
