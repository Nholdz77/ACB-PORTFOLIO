import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/Image1.webp";
import Image2 from "../../assets/Image2.webp";
import Image3 from "../../assets/Image3.webp";
import Image4 from "../../assets/Image4.webp";
import Image5 from "../../assets/Image5.webp";
import Image6 from "../../assets/Image6.webp";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: Image2,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 3,
    image: Image3,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 4,
    image: Image4,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 5,
    image: Image5,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 6,
    image: Image6,
    title: "Crypto Currency Dashboard and Finacial Visualization",
    github: "http;//github.com",
    demo: "http://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
