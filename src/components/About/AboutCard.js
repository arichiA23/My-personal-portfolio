import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="black">Arichi Chhajer </span>
            from <span className="black"> Balotra, Rajasthan, India.</span>
            <br />I am a 3rd Year student pursuing Computer Science Engineering in SGU, Kolhapur.
            <br />
            <br />
            In addition to coding, I find joy in pursuing these activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mandala Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and exploring different genres of books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing new cultures and cuisines.
            </li>
          </ul>

          <p style={{ color: "grey" }}>
            "Programming is the art of turning logic into reality."{" "}
          </p>
          <footer className="blockquote-footer">Arichi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
