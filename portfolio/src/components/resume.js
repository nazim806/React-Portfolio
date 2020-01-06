import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img src="Nazim.jpg" alt="avatar" className="avatar-img" />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Nazim Uddin</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>Berkeley Coding boot camp</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Location</h5>
            <p>Berkeley, CA 94702</p>
            <h5>Email</h5>
            <p>umnazim@gmail.com</p>
            <h5>Web</h5>
            <p>nazimonline.info</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h3>Summary</h3>
            <p>
              Passionate full-stack web developer with a background in science.
              Educated at the University of California-Berkeley Extension with
              skills in HTML5, CSS, JavaScript and React. Innovative problem
              solver who is passionate about developing apps with cutting-edge
              design. Strengths in creativity, teamwork, and building projects
              from ideation to execution. Some of the technologies I work with
              are mySQL, MongoDB, Node.JS, Linux/Unix, Amazon Web Services, Git,
              C#, Python and Java. Excited to leverage skills in the future as
              part of a fast-paced, quality-driven team in order to build better
              experiences on the web.
            </p>
            <h3>Skills</h3>
            <p>
              <ul>
                <li>HTML5/CSS3</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>React</li>
                <li>mySQL</li>
                <li>MongoDB</li>
                <li>Python, Java, C#</li>
              </ul>
            </p>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h3>Projects</h3>
            <h4>Google Book Search App</h4>
            <p>
              Summary: Google book search is a React-based books search app.
              This Single Page Application uses react-router-dom to navigate,
              hide and show your React components without changing the route
              within Express. Technologies used:HTML, CSS, Javascript,
              Bootstrap, Express, Node.js, React, MongoDB, and Heroku.
            </p>
            <h6>Github Link</h6>
            <a
              href="https://github.com/nazim806/google-book-search"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Repo
            </a>

            <h6>Live Link</h6>
            <a
              href="https://damp-reaches-94807.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google book search
            </a>

            <h4>Mongo Scraper Digest</h4>
            <p>
              Summary:Read articles scraped from New York Times. This is an app
              that uses Cheerio to scrape the New York Times US section and pull
              the most recent articles. Technology Used:HTML5, CSS3, Bootstrap,
              Javascript, React, Node.js, Express.js, Cheerios, MongoDB,
              Mongoose, Handlebars.
            </p>
            <h6>Github Link</h6>
            <a
              href="https://github.com/nazim806/mongo-scraper-digest"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Repo
            </a>
            <h6>Live Link</h6>
            <a
              href="https://mongo-scraper-digest.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              NYT Digest
            </a>

            <h4>Train Scheduler</h4>
            <p>
              Summary: This is a Firebase backed train schedule application. It
              uses HTML, CSS and jQuery to render the schedule and admin panel
              on the web page. The app uses Firebase to host a globally
              available set of data that will be retrieved and manipulated using
              Moment.js to provide up-to-date information about various trains
              arrival times and minutes until arrival. Technology Used: HTML,
              CSS, Javascript, and Firebase
            </p>
            <h6>Github Link</h6>
            <a
              href="https://github.com/nazim806/Train-Scheduler"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Repo
            </a>
            <h6>Live Link</h6>
            <a
              href="https://nazim806.github.io/Train-Scheduler/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Train Scheduler
            </a>

            <h3>Experience</h3>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Scientist I, Zymergen Inc., Emeryville, CA"
              jobDescription="Development of adhesives and coatings materials from bio-reachable molecules."
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Research Associate, Michigan State University, East Lansing, MI"
              jobDescription="Developed anti-smudge, self-healing coatings"
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName="Postdoctoral Research Associate, Utah State University, Logan, UT"
              jobDescription="Developed bio-based adhesives from pyrolysis bio-fuel."
            />
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Scientist, R&D, MilliporeSigma, Milwaukee, WI"
              jobDescription="Custom synthesis and development of organometallic catalysts."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h3>Education</h3>
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="UC-Berkeley Extenstion"
              schoolDescription="Berkeley Coding boot camp on full-stack web development"
            />
            <Education
              startYear={2015}
              endYear={2009}
              schoolName="University of Wisconsin-Milwaukee"
              schoolDescription="PhD from the Department of Chemistry and Biochemistry. Researched on Asymmetric Organic Synthesis and catalysis."
            />
            <p>
              {" "}
              <strong>Publications:</strong>
              <a
                href="https://github.com/nazim806/Train-Scheduler"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Google Scholar{" "}
              </a>
            </p>

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h3>Skills</h3>
            <Skills skill="javascript" progress={85} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="React" progress={65} />
            <Skills skill="MongoDB" progress={60} />
            <Skills skill="Python" progress={75} />
            <skills skill="Java" progress={60} />
            <skills skill="C# " progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
