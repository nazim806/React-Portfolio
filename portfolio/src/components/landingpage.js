import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="Nazim.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer </h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | MySQL | NodeJS | Express | MongoDB | Python</p>

        <div className="social-links">

          
          
          <span> 
            <a href="https://www.linkedin.com/in/nazim-uddin-5158ba17/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          </span>
          <span>
            <a href="https://github.com/nazim806" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </span>
          

        
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-google" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;