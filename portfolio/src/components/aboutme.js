import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>
          {" "}
          <h5>Hi, my name is Nazim Uddin, I am a full-stack software developer. 
          I am very much enthusiastic about software development and learning new things.
          Recently, I have graduated from a coding boot camp at the UC-Berkeley Extension. My
          skills are broad: front end to back end web development. I enjoy each and
          every aspect of software development, and love building sites & mobile
          apps from start to finish. I'm available for full-time software developer position.
          </h5>
        </p>
        <br></br>
        <p>
         <h5><strong>Skills:</strong></h5> 
        </p>

        <p>
          <strong>Front-end: </strong> HTML5, CSS3, Javascript, ES6, ReactJS
          <br></br>
          <strong>Back-end:</strong> NodeJS, PHP, APIs
          <br></br>
          <strong>Apps:</strong> Mobile, ReactJS
          <br></br>
          <strong>Cloud:</strong> AWS, Google, Firebase
          <br></br>
          <strong>Database:</strong> Firebase, MySQL, MongoDB
           <br></br>
          <strong>Languages:</strong> Python, Java, C#
        </p>
      </div>
    );
  }
}

export default About;
