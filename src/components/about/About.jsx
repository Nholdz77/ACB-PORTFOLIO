import React from "react";
import "./about.css";
import MIG from "../../assets/image2.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MIG} alt="mig" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0+ Years Work as Web Developer</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>0+ Clients World Wide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a career shifter passionate about expanding my knowledge in web
            development using HTML, CSS, JavaScript, and JQuery to contribute to
            your company's growth. I am an adaptable team player with patience
            and resourcefulness, capable of efficiently handling multiple tasks
            to achieve objectives. My ultimate ambition is to become a
            proficient full-stack web developer skilled in designing,
            developing, testing, and deploying web applications. The experience
            gained from the Kodego Bootcamp aligns perfectly with my
            aspirations, making me well-prepared for the journey ahead.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
