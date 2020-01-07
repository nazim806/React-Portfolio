import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.fitsumbelayneh.com/images/clicky%20game.png) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>Clicky Game:</strong> Clicky game is a React memory game
              app using HTML, CSS, Javascript and React.js . Click on an image
              to earn points, but don't click on any more than once! At the end
              of the game you will see your total score.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/clicky-game"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://whispering-hollows-87010.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://bloximages.newyork1.vip.townnews.com/lancasteronline.com/content/tncms/assets/v3/editorial/8/f1/8f1e40aa-dc41-11e3-99ad-0017a43b2370/5374d68354085.image.jpg) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>Food Truck Finder:</strong>
              This App allows users to find Food Trucks in the San Francisco
              Area, It provides information about food trucks location and their
              current address, recipes and vendor registration(Book events). The
              App uses Node JS/React Router Dom, Redux, and Axios for the server
              and routing, MongoDB/Mongoose for the database coming from our
              local and Remote DB. For the layout of our site we used pure React
              to implement master components that make it easy and simple to
              navigate in the most convenient way.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/Food-Truck-Finder"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="http://foodtruck-finder.s3-website-us-west-1.amazonaws.com/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

        </div>
      );

      //JAVASCRIPT
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.krogerkrazy.com/wp-content/uploads/2012/01/Redbox-Movie-Trivia.jpg) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>Movie Trivia Game:</strong> Test your knowledge of
              Hollywood movies with this multiple choice trivia game. When you
              click Start, you will be given 10 multiple-choice questions
              covering hollywood movie trivia. You have 10 seconds to answer
              each question before time runs out; if you finish early, you can
              quit sooner by clicking Done. When the game ends, your score will
              be displayed for you.This project was built with: HTML5, CSS3,
              JavaScript, jQuery, and Bootstrap
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/Trivia-Game"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://nazim806.github.io/Trivia-Game/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://specials-images.forbesimg.com/imageserve/5d7254a944f2b2000803d3fe/960x0.jpg?fit=scale) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>Train Scheduler:</strong>This is an app using Moment.js
              that allows a user to view train schedules. Moment.js calculates
              the time until the next train. This app is a Firebase backed train
              schedule application. It uses HTML, CSS and jQuery to render the
              schedule and admin panel on the web page. The app uses Firebase to
              host a globally available set of data that will be retrieved and
              manipulated using Moment.js to provide up-to-date information
              about various trains arrival times and minutes until arrival.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/Train-Scheduler"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://nazim806.github.io/Train-Scheduler/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media3.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>GifTastic:</strong> GifTastic is a fun and interactive
              game for web browsers. The app dynamically update HTML pages with
              the jQuery library. This web application searches the GIPHY API,
              an online database and search engine that allows users to search
              for and share short looping videos with no sound, that resemble
              animated GIF files. The buttons on screen are predefined, but
              users can create new buttons using the form on the right. Gifs can
              be played by clicking on them, they are also presented with their
              rating.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/GifTastic"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://nazim806.github.io/GifTastic/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </div>
      );

      //MYSQL MONGODB.
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://9to5google.com/wp-content/uploads/sites/4/2015/10/google-books.png?w=1000) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>Google Books Search App:</strong> React-based Google Books
              Search app. This SPA (Single Page Application) uses
              [react-router-dom]to navigate, hide and show your React components
              without changing the route within Express. Using helper/util
              functions and React lifecycle methods to query and display books
              based on user searches, this is a full MERN stack application
              allows users to save books to a database to refer to at a later
              date. Built with Node, Express and MongoDB, and React-Toastify for
              custom alerts.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/google-book-search"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button
                href="https://damp-reaches-94807.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/474x/b4/c7/b0/b4c7b07468b71b8ef6292c571dc6794d--new-york-times-summary.jpg) center / cover"
              }}
            ></CardTitle>
            <CardText>
              <strong>New York Times Mongo Digest:</strong> Read articles
              scraped from New York Times.This is an app that uses Cheerio to
              scrape the New York Times US section and pull the most recent
              articles. Technologies used: HTML5, CSS3, Bootstrap, Javascript,
              React, Node.js, Express.js, Cheerios, MongoDB, Mongoose,
              Handlebars.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/nazim806/mongo-scraper-digest"
                rel="noopener noreferrer"
                target="_blank"
                colored
              >
                GitHub
              </Button>

              <Button href="" rel="noopener noreferrer" target="_blank" colored>
                Live Demo
              </Button>
            </CardActions>
          </Card>

        </div>
      );

      //LAST PAGE
    // } else if (this.state.activeTab === 3) {
    //   return (
    //     <div className="projects-grid">
    //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //         <CardTitle
    //           style={{
    //             color: "#fff",
    //             height: "176px",
    //             background:
    //               "url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover"
    //           }}
    //         ></CardTitle>
    //         <CardText></CardText>
    //         <CardActions border>
    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             GitHub
    //           </Button>

    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             Live Demo
    //           </Button>
    //         </CardActions>
    //       </Card>

    //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //         <CardTitle
    //           style={{
    //             color: "#fff",
    //             height: "176px",
    //             background:
    //               "url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover"
    //           }}
    //         ></CardTitle>
    //         <CardText></CardText>
    //         <CardActions border>
    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             GitHub
    //           </Button>

    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             Live Demo
    //           </Button>
    //         </CardActions>
    //       </Card>
    //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
    //         <CardTitle
    //           style={{
    //             color: "#fff",
    //             height: "176px",
    //             background:
    //               "url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover"
    //           }}
    //         ></CardTitle>
    //         <CardText></CardText>
    //         <CardActions border>
    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             GitHub
    //           </Button>

    //           <Button href="" rel="noopener noreferrer" target="_blank" colored>
    //             Live Demo
    //           </Button>
    //         </CardActions>
    //       </Card>
    //     </div>
    //   );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>MySql/MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
