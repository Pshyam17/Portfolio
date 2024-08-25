import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b> Computer science student </b> at
        Vishveshvaraiah Technological institute. At the same time, I am an intern at 
         <b> Company </b> in <b>role </b>at{" "}
        <a href="https://www.ox.ac.uk/about">link</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science, playing tunes on my violin and content writing.
      </p>
    );

    const tech_stack = [
      "Java",
      "Python",
      "R",
      "C++",
      "ReactJS",
      "HTML/CSS"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Preethi Shyam" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
