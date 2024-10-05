import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import discoverkerala from "../../Assets/Projects/discoverkerala.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discoverkerala}
              isBlog={false}
              title="Discover Kerala"
              description="Discover Kerala is a project based on kerala tourism shows land of Lush Greenery and Timeless Traditions. This project is done using HTML, CSS, JavaScript, Bootstrap and React."
              ghLink="https://github.com/Derick456git/client"
              demoLink="https://discover-kerala-pjt.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
