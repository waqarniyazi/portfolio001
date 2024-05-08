import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill, BsGithub } from "react-icons/bs"; 
import "./styles.scss"; 
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSix from "../../images/image6.png";
import ImageSeven from "../../images/image7.png";
import ImageEight from "../../images/image8.jpeg";
import ImageNine from "../../images/image9.png";
import ImageTen from "../../images/image10.png";
import ImageEleven from "../../images/image11.png";
import ImageTwelve from "../../images/image12.png";
import ImageFifteen from "../../images/image15.png"
import ImageFourteen from "../../images/image14.png"
import ImageSixteen from "../../images/image16.png"
import ImageSeventeen from "../../images/image17.png"
import ImageEighteen from "../../images/image18.png"
import ImageNineteen from "../../images/image19.png"
import ImageTwenty from "../../images/image20.png"
import ImageTwentyOne from "../../images/image21.png"
import ImageTwentyTwo from "../../images/image22.png"
import ImageTwentyThree from "../../images/image23.png"
import ImageTwentyFour from "../../images/image24.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioData = [
  {
    id: 2,
    name: "RigKatha",
    image: ImageTwentyFour,
    link: "https://rig-katha.vercel.app/",
    description:
      "A website created using ReactJs acting as a Gemini inspired design and also with functional working prompts integrating the Gemini API",
    github: "https://github.com/shivah12/RigKatha",
  },
  {
    id: 2,
    name: "Yosher",
    image: ImageOne,
    link: "https://yosher.vercel.app/",
    description:
      "A website created using ReactJs acting as a search engine with active API calls with the logo being designed by myself using Figma",
    github: "https://github.com/shivah12/Yosher",
  }
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000 
    });
  }, []);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData
            .filter(
              (item) =>
                filteredValue === 1 || item.id === filteredValue
            )
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="fade-up" // Define AOS animation here
                data-aos-duration="1000" // Define duration here (in milliseconds)
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      {item.github && ( // Check if github link exists
                        <BsGithub
                          size={30}
                          className="github-icon"
                          onClick={() =>
                            window.open(item.github, "_blank")
                          }
                        />
                      )}
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => window.open(item.link, "_blank")}>
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
