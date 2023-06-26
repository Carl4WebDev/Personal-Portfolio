import React from 'react'
import "./Home.css"
import myCv from "./cv.pdf"
import Typewriter from 'typewriter-effect';
import { BsMoonFill,BsFillSunFill, BsGithub, BsFacebook} from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";



import Slide from 'react-reveal/Slide';

import {Link} from "react-scroll"

function Home({theme, changeTheme}) {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p className="moon-theme-icon">
            <BsMoonFill size={30} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={30} />
          </p>
        )}
      </div>
      <div className='row home-section'>
          
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='home-content-left'>
              
              <Slide left>
                <h1>Hi I'm Carl</h1>
                <h2>
                  <Typewriter
                    options={{
                      strings: ["Fullstack Web Dev", "MERN stack"],
                      autoStart: true,
                      loop: true,
                      delay: "natural",
                      pauseFor: "100ms",
                    }}
                  />
                </h2>

              </Slide>


            </div>

              <Slide right>
                  
                  <div className="button-for-action">
                    <div className="hire-me-button">
                    <Link to='contact'
                      spy={true} 
                      smooth={true} 
                      duration={100}
                      offset={-100}
                    >

                      Hire me
                    </Link>
                    </div>

                    <div className="get-resume-button">
                      <a href={myCv} download="Carl_Ivan_Sampan.pdf">
                        My resume
                      </a>
                    </div>
                  </div>
              </Slide>
          </div>

          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
            <div className='home-content-right'>
            <div className='section-title'>
              <h3 className='contact-title'> Contact Me  </h3>
              <span className='line'></span>
            </div>

                <h3 className='my-email'>
                    <MdAttachEmail /> 
                  <a href='https://mail.google.com/mail/u/0/?pli=1#inbox'> 
                      carlforwebdev@gmail.com
                  </a>  
                </h3>
                <h3 className='my-github'>
                    <BsGithub />
                  <a href='https://mail.google.com/mail/u/0/?pli=1#inbox'>
                    https://github.com/Carl4WebDev
                  </a>
                </h3>
                <h3 className='my-facebook'>
                    <BsFacebook />
                  <a href="https://www.youtube.com/watch?v=-Pa5nqYXEnY" >
                    Carl Ivan Sampan
                  </a>
                </h3>
                <h3 className='my-number'>
                      <IoIosContact />
                    <a>
                      09276168478
                    </a>
                </h3>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home