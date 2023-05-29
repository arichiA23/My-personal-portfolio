import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKalilinux,
  SiLinux,
  SiVisualstudiocode,
  SiVirtualbox,
  SiRstudio,
  SiJupyter,
  SiMysql,
  SiOracle,
  SiSlack
} from "react-icons/si";
import {
  DiLinux,
  DiVisualstudio,
  DiMysql,
  
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <h6 className="name"> Kali Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <h6 className="name">Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6 className="name">Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
        <h6 className="name">Virtual Box</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <h6 className="name">R Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h6 className="name">Jupyter Notebook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6 className="name">MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <h6 className="name">Oracle</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h6 className="name">Slack</h6>
      </Col>
    </Row>
    
  );
}

export default Toolstack;
