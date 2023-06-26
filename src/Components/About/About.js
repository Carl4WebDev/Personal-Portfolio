import React from 'react'
import "./About.css"
import Profile from "../../image/main-profile.jpg"

import Slide from 'react-reveal/Slide';
function About() {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Slide left>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={Profile} alt="profile-photo" />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="about-details">
              <div className="about-title">
                <h3>About Me</h3>
                <span className="line"></span>
              </div>

              <p>
                Aspiring Web Developer with a solid foundation in HTML, CSS,
                Bootstrap, JavaScript, jQuery, React.js. Currently learning and
                gaining proficiency in node and express.js for backend. Passionate 
                about creating
                engaging and user-friendly web experiences. Eager to apply my
                knowledge and continue growing in the field of web development.
                Strong problem-solving skills, a keen eye for detail, and a
                commitment to staying updated with industry trends. Excited to
                contribute to a dynamic team and gain hands-on experience in a
                professional environment. Open to entry-level opportunities to
                kickstart my career and further develop my skills.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default About