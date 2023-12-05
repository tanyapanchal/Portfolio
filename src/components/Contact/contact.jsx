import React, { useRef } from 'react'
import './contact.css'
import insta from '../../Sources/insta.png'
import git from '../../Sources/git.png'
import linkid from '../../Sources/linkid.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_efaz2nd', 'template_v7ilgkh', form.current, 'Cr1bj-_sRNv4fjAGL')
      .then((result) => {
          console.log(result.text);
          alert('EMAIL SENT')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <div id='contact'>
        <h1 className="contactTitle">Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss my work opportunities</span>
        <form className='contactForm'  ref={form} onSubmit={sendEmail}>
        <input type="name" className='name' placeholder='Your Name' name='from_name'/>
        <input type="email" className='email' placeholder='Your Email' name='from_email' />
        <textarea name="message" cols="30" rows="5" placeholder='YourMessage' className='msg'></textarea>
        <button className="sbmitbtn" type='submit' value='send'>Submit</button>
        <div className="links">
          
       
         <a href="https://instagram.com/tanyapanchal.13?igshid=M2RkZGJiMzhjOQ=="><img src={insta} alt='INSTA' className='link' /></a>
          <a href="https://github.com/tanyapanchal"><img src={git} alt='github' className="link" /></a>
         <a href="https://linkedin.com/in/tanya-panchal-0b29a31b7"> <img src={linkid} alt='linkdin'  className="link" /></a>
          
        </div>
        </form>
      </div>
      

  )
}

export default Contact
