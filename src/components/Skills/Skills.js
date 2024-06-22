import React from 'react'
import './Skills.css'
import WebDevelopment from '../../assets/web-dev.png'
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
                            <p>
                                • <span>Front-End</span>: HTML, CSS, JavaScript, React.js <br/>
                                • <span>Back-End</span>: Node.js, Express.js, Firebase <br/>
                                • <span>Database</span>: MySQL, MongoDB <br/>
                                I specialize in crafting responsive, visually stunning UIs, developing interactive websites, and dynamic web solutions.
                            </p>
                        </div>
                    </div>
                    <div className="skillBar even">
                        <img src={GraphicDesign} alt="Graphic Design" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Graphic Design</h2>
                            <p> Proficient in Adobe Illustrator, Photoshop, and Canva, I excel in creating visually stunning designs that communicate messages effectively.</p>
                        </div>
                    </div>
                    <div className="skillBar odd">
                        <img src={Code} alt="Code Design" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Other Skillset</h2>
                            <p>Proficient in Python, I develop robust backend solutions with algorithms and manage databases, creating efficient, data-driven applications for enhanced functionality.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
