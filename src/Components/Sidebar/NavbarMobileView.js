import React, {useState}from 'react'
import "./NavbarMobileView.css"

import {GiHamburgerMenu} from "react-icons/gi"
import { FcNightPortrait,FcHome, FcTodoList, FcContacts,FcFactory,FcSalesPerformance, FcGraduationCap,FcSteam, } from "react-icons/fc";
import {Link} from "react-scroll"



function NavbarMobileView({theme, changeTheme,playSound}) {
  const [open,setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p onClick={playSound}>
          <GiHamburgerMenu size={25} onClick={handleClick}/>
        </p>
      </div>

      {open ? (
        <div className="mobile-nav ">
        <ul>
          <li className="nav-item-mobileview">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcHome size={25} />
              Home
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcNightPortrait size={25} />
              About
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link
              to="work-experience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcFactory size={25} />
              Work Experience
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcSteam size={25} color="orange" />
              Tech stack
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcGraduationCap size={25} />
              Education
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcSalesPerformance size={25} />
              Project
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              onClick={playSound}
            >
              <FcTodoList size={25} />
              Testimonial
            </Link>
          </li>

        </ul>
      </div>
      ): null}
    </div>
  );
}

export default NavbarMobileView