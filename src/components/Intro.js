import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, I'm "}
            <span className="intro-name">{"Preethi"}</span>
            
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I like to build things.</div>
          <div className="intro-desc">
            I'm a programmer from India fascinated by solutions with high consumer impact.
          </div>
          <a
            href="mailto:p.shyam.1701@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Contact me"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
