import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nazim Uddin</h2>
            <img src="Nazim.jpg" alt="avatar" style={{ height: "200px" }} />
            <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
              
              Full stack web developer, recently graduated from Berkeley coding
              boot camp at UC Berkeley Extension.  
              <br></br>
              <strong> 
              Skills: HTML5, CSS3,
              Javascript, Node.js, React.js, MySQL, MongoDB, Python, Java, C#.
              </strong>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (435) 265-2303
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                    <a
                      href="https://github.com/nazim806"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Check my projects{" "}
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    umnazim@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/nazim-uddin-5158ba17/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn{" "}
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
