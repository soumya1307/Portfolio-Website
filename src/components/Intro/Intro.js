import React, { useState, useEffect, useMemo } from 'react'
import './Intro.css'
import bg from '../../assets/image-2bg.png'
import btnImg from '../../assets/hireme.png'
import resumePath from '../../assets/Soumya Sanket Soni - Resume.pdf'
import { Link } from 'react-scroll'

export default function Intro() {
  const [jobTitle, setJobTitle] = useState(''); 
  const [titleIndex, setTitleIndex] = useState(0);

  const jobTitles = useMemo(() => ['Graphic Designer', 'Web Developer'], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitle((prevTitle) => {
        const nextIndex = (titleIndex + 1) % jobTitles.length
        setTitleIndex(nextIndex)
        return jobTitles[nextIndex]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [titleIndex, jobTitles])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'Soumya Soni - Resume.pdf'
    link.click()
  }
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Soumya Soni</span> <br />{jobTitle}</span>
            <p className="introPara">Passionate coding enthusiast with a keen interest in graphic design. <br />Eager to embark on a dynamic career journey, leveraging technical <br /> and creative skills.</p>
            <Link to="#"><button className="btn" onClick={downloadResume}><img src={btnImg} alt="Resume" className='btnImg' />Resume</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}
