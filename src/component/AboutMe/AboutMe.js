import React from "react";
import './AboutMe.css';
import photo from "../../profile.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me mx-auto">
      <img src={photo} alt="" />
      <figcaption className="mb-3">Mahiuddin Habib</figcaption>
      <p className="text-start">
        From my childhood, I was curious about technologies around me. Over
        time, technology achieved it’s new dimensions. <br />
        I enrolled in this course to learn serious web development and to start
        a carrier with it. My goal is to grab a job or an internship at least
        within august of this year. <br />
        To achieve this goal, I will worked hard as much as I can. I will proper
        use of the next vacation to cover up the modules I understands less or
        don't understand . Thus I want to achieve my goal.{" "}
      </p>
    </div>
  );
};

export default AboutMe;
