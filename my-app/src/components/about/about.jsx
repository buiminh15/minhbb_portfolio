import React from "react";
import Heading from "../common/heading/heading";
import { skillsData } from "../../services/data";

const About = () => {
  return (
    <section name="about" className="section section--about">
      <Heading title="about me" number="01" section="about" />
      <div className="about-flex">
        <div className="about-group">
          <h2 className="about-group__title">Who am i?</h2>
          <p>
            I'm serious about writing clean code and I'm always looking for an opportunity
            to improve on this existing skill, I suppose that's why I enjoy code
            reviews with my peers so much. 
          </p>
          <p>
            I'm passionate about programming and I enjoy learning
            new things, I take advantage of that to expand my skill set.
          </p>
          <p>
            In my spare time, I'm usually code pet projects and tools. And of course, read programming books ^-^.
          </p>
        </div>
        <div className="about-group about-group--skills">
          <h2 className="about-group__title">Skill set</h2>
          <div className="skills-grid">
            {skillsData.map((e) => (
              <div key={e.id} className="skills-grid__item">
                {e.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
