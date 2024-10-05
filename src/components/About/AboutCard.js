import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings 👋! I am <span className="purple">Derick Johny </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            A dedicated and enthusiastic full-stack developer with a Master's degree in Computer
            Applications (MCA) from MG University. My journey in the tech world began during my Bachelor's in Computer
            Applications (BCA), where I developed a strong foundation in programming languages like C, C++ and JavaScript. Over
            the years, I have expanded my expertise in web development, working with cutting-edge frameworks such as
            React.js and Node.js.
            <br></br>
            I am passionate about creating dynamic, user-friendly web applications and am always eager to learn new
            technologies to stay at the forefront of the ever-evolving digital landscape. Currently, I am looking for
            entry-level opportunities where I can leverage my skills and passion to contribute to meaningful projects
            and grow within a forward-thinking team.
            <br></br>
            Let’s connect and explore how I can bring value to your organization while continuing to develop my
            expertise in web development!
            <br />
            <br />
            
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Derick</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
