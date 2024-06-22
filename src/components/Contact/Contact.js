import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ka6cur6', 'template_mvaug3e', form.current, 'AHCZMTvvdHGbUem6V')
            .then((result) => {
                console.log(result.text)
                e.target.reset()
                alert("Email Sent")
            }, (error) => {
                console.log(error.text)
            })
    }
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please find my LinkedIn and E-Mail below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                    {/* <input type="text" className="name" placeholder='Your Name' name='from_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="message" rows="4" placeholder='Your Message' ></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button> */}
                    <div className="links">
                        <a href="https://www.linkedin.com/in/soumyasoni7/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        {/* <a href="https://github.com/soumya1307" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a> */}
                        <a href="mailto:soni.soumya132@gmail.com">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-phone"></i>
                        <p className='number'>+91 80822 99699</p>
                    </div>
                </form>
            </div>
        </section>
    )
}
