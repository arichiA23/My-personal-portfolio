import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDotnet,
  DiFirebase,
  DiCss3,
  DiHtml5,
  
} from "react-icons/di";
import {
  SiR,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiDotnet,
  SiPython,
  SiGit,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCplusplus
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus/>
        <h6 className="name">
          C++
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <h6 className="name">
          JavaScript
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6 className="name">
          Node.js
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6 className="name">
          React.js
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h6 className="name">
          Mongodb
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6 className="name">
          HTML
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6 className="name">
        Git
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h6 className="name">
        CSS
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6 className="name">
          Python
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR/>
        <h6 className="name">
        R Language
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet/>
        <h6 className="name">
        .Net
        </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/>
        <h6 className="name">
        Firebase
        </h6>
      </Col>
    </Row>
  );
}

export default Techstack;
