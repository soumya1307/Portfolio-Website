import React, { useState, useEffect, useMemo } from 'react';
import './Intro.css';
import bg from '../../assets/image-2bg.png';
import btnImg from '../../assets/hireme.png';
import resumePath1 from '../../assets/Soumya Sanket Soni - SE Resume.pdf';
import resumePath2 from '../../assets/Soumya Sanket Soni - GD Resume.pdf';

export default function Intro() {
  const [jobTitle, setJobTitle] = useState(''); 
  const [titleIndex, setTitleIndex] = useState(0);

  const jobTitles = useMemo(() => ['Software Engineer', 'Web Developer', 'Graphic Designer'], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitle((prevTitle) => {
        const nextIndex = (titleIndex + 1) % jobTitles.length;
        setTitleIndex(nextIndex);
        return jobTitles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [titleIndex, jobTitles]);

  const downloadResume = (resumePath, fileName) => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = fileName;
    link.click();
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Soumya Soni</span> <br />{jobTitle}</span>
        <p className="introPara">Passionate coding enthusiast with a keen interest in graphic design. <br />Eager to embark on a dynamic career journey, leveraging technical <br /> and creative skills.</p>
        
        <div className="resumeButtons">
          <button className="btn" onClick={() => downloadResume(resumePath1, 'Soumya Soni_SE Resume.pdf')}>
            <img src={btnImg} alt="Resume" className='btnImg' /> 
            <p>Software Engineer Resume</p>
          </button>

          <button className="btn" onClick={() => downloadResume(resumePath2, 'Soumya Soni_GD Resume_.pdf')}>
            <img src={btnImg} alt="Resume" className='btnImg' /> 
            <p>Graphic Designer Resume</p>
          </button>
        </div>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  );
}
