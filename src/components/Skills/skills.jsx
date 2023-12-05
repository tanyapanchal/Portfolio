import React from 'react'
import './skills.css'
import html from '../../Sources/html.png';
import css from '../../Sources/css.png';
import bsp from '../../Sources/bsp.png';
import js from '../../Sources/js.png';
import react from '../../Sources/react.png';

const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I am a skilled and passionate web designer. i have a strong understanding of design. i am proficient in HTML, CSS, BootStrap, JavaScript and React.</span>
       <div className="skillBars">
        <div className="skillBar skillBar1">
            <img src={html} alt="" className="skillBarImg  skillBarImg1" />
        </div>
        <div className="skillBar skillBar1 ">
            <img src= {css} alt="" className="skillBarImg skillBarImg1 " />
        </div>
        <div className="skillBar skillBar2">
            <img src={bsp} alt="" className="skillBarImg skillBarImg2 " />
        </div>
        <div className="skillBar skillBar3">
            <img src={js} alt="" className="skillBarImg skillBarImg3" />
        </div>
        <div className="skillBar skillBar4 ">
            <img src={react} alt="" className="skillBarImg skillBarImg3 " />
        </div>
       </div>
    </section>
  )
}

export default Skills
