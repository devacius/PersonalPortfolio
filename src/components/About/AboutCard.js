import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepansh Gupta </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br /> I am a final year student pursuing a Bachelor of Technology (B.Tech)
            in Maths and Computing at Ajay Kumar Garg Engineering College, Ghaziabad.
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watcing Anime!!
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to Gym.
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitve Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build small things to create big impact."{" "}
          </p>
          <footer className="blockquote-footer">DG</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
