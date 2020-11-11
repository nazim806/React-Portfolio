import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="React-Portfolio/" component={LandingPage} />
    <Route path="/React-Portfolio/aboutme" component={About} />
    <Route path="/React-Portfolio/contact" component={Contact} />
    <Route path="/React-Portfolio/projects" component={Projects} />
    <Route path="/React-Portfolio/resume" component={Resume} />
  </Switch>
);

export default Main;
