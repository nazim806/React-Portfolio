import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="nazim.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer </h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | MySQL | NodeJS | Express | MongoDB | Python</p>

        <div className="social-links">
       
            <a href="https://www.linkedin.com/in/nazim-u-8168231ba/" rel="noopener noreferrer" target="_blank">
            
            <i className="fa fa-linkedin-square" 
              aria-hidden="true" />
            
          </a>
          
          <span > &nbsp;
            <a href="https://github.com/nazim806" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </span>
            
          
         <span > &nbsp;
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-google" aria-hidden="true" />
          </a> 
          </span>
        
          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;