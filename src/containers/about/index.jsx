import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const jobSummary =
  "We are a passionate team of web developers and marketing specialists dedicated to helping businesses thrive online. We understand the power of a well-crafted website and a strategic marketing approach. From sleek and user-friendly web design to targeted social media campaigns, we provide a comprehensive solution to elevate your brand and achieve your digital goals. Whether you're a startup launching for the first time or an established business looking to expand your reach, we're here to guide you every step of the way.";

const About = () => {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Us"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__c">
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>hey there,</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
           
           
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="red" />
              </div>
              <div>
                <DiAndroid size={60} color="green" />
              </div>
              <div>
                <FaDatabase size={60} color="rgb(91, 91, 91)" />
              </div>
              <div>
                <DiApple size={60} color="black" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
      </div>
      
    </section>
    
  );
  
};
export default About;
