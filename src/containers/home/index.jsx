import React from "react";
import { BsGithub } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import "./styles.scss";

const Home = () => {
  const portfolioData = [
    {
      id: 2,
      name: "MERN Stack",
      image: ImageOne,
      link: "/ecofolio",
      description: "Dynamic web experiences with our MERN stack development. We build modern websites with a focus on user experience.",
    },
    {
      id: 2,
      name: "Wordpress",
      image: ImageTwo,  
      link: "/truthwuth",
      description:
        "Want a powerful website, hassle-free? We build stunning WordPress sites that grow with your business.",
    },
  ];

  return (
    <section id="home" className="home">
      <div className="centered-content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div
              onClick={() => window.open(item.link, "_blank")}
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
