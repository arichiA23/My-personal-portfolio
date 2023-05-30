import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Hospital from "../../Assets/Projects/hospital.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="black">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ASC News"
              description="A news app is a mobile application that delivers the latest news and updates from various sources in a convenient and user-friendly format. It provides real-time news articles, personalized news recommendations, and notifications to keep users informed about current events. With a news app, users can easily access a wide range of news topics, stay updated on their interests, and have news content at their fingertips anytime, anywhere."
              ghLink="https://github.com/arichiA23/Dynamic-News-website"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="KNN Algorithm representation"
              description="The KNN algorithm is a versatile supervised learning technique used for classification and regression tasks. It assigns a label or predicts a value based on the majority vote or average of the nearest neighbors in the training set. It requires preprocessing, parameter tuning, and evaluation to build an accurate model for effective predictions."
              ghLink="https://github.com/arichiA23/KNN-Algortihm"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-Forecast"
              description="A weather forecast system made with JS and React is a web application that displays weather information for a specific location. The system collects data from various sources, including weather APIs, and uses JavaScript and React to create an interactive user interface that displays the information in an easy-to-understand format. The system can show current weather conditions, hourly and daily forecasts, and alerts for severe weather."
              ghLink="https://github.com/arichiA23/Weather-Forecast-in-react"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Hospital Management System"
              description="This is a Hospital management system made for adding new patients to the hospital database and managing them.The system can be customized according to the specific needs of the hospital or healthcare facility, and can help to improve efficiency, reduce errors, and enhance patient care. It built with HTML, PHP and Firebase."
              ghLink="https://github.com/arichiA23/Hospital-Managent"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
