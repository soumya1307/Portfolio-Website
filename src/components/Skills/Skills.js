import React from 'react'
import './Skills.css'
import WebDevelopment from '../../assets/website-design-2.png'
import GraphicDesign from '../../assets/graphic-design.png'
import Code from '../../assets/code-design.png'

export default function Skills() {
  return (
    <div>
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <div className="skillDescBox">
                <span className="skillDesc">I specialize in crafting seamless digital experiences through web development. From conceptualization to deployment, I bring ideas to life by leveraging a diverse skill set. As a graphic designer, I create visually stunning designs that communicate compelling narratives effectively. I bring a keen eye for aesthetics and a deep understanding of design principles to every project.</span>
            </div>
            <div className="skillBars">
                <div className="skillBar odd">
                    <img src={WebDevelopment} alt="Web Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Proficient in front-end technologies like HTML, CSS, JavaScript, React.js and Django, I ensure visually stunning and responsive user interfaces. Whether it's developing interactive websites or creating dynamic web solutions, I thrive in turning visions into code.</p>
                    </div>
                </div>
                <div className="skillBar even">
                    <img src={GraphicDesign} alt="Graphic Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Graphic Design</h2>
                        <p> Proficient in industry-standard tools like Adobe Illustrator, Adobe Photoshop and Canva, I bring a keen eye for aesthetics and a deep understanding of design principles to every project. My expertise lies in creating visually stunning designs that communicate messages effectively.</p>
                    </div>
                </div>
                <div className="skillBar odd">
                    <img src={Code} alt="Code Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Other Skillset</h2>
                        <p>Proficient in Python and MySQL, I leverage these skills to develop robust backend solutions and manage databases. My expertise extends to creating efficient, data-driven applications for enhanced functionality.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
