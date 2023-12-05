import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
// import bg from '../../Sources/timg.jpeg'
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Tanya</span><br />Website Designer</span>
            <p className='introPara'>I am skilled web desingner <br /> and aim to earn a job which provide me job satisfaction and self-development. </p>
            <Link><button className="btn">Hire me</button></Link>
        </div>
       {/* <img src={bg } alt="" className="tbg" /> */}
       
      </section>
    </div>
  )
}

export default Intro

