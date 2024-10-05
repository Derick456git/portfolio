import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiBootstrap } from "react-icons/si";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
} from "react-icons/di";


function Techstack() {
  return (
<>    
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
      </Col>      

      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
