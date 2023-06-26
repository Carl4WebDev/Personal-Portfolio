import React from 'react'
import "./SidebarList.css"
import profilepic from "../../image/profile.jpg"
import { FcNightPortrait,FcHome, FcTodoList, FcContacts,FcFactory,FcSalesPerformance, FcGraduationCap,FcSteam, } from "react-icons/fc";
 
import {Link} from "react-scroll"


function SidebarList({expandSidebar}) {
  return (
    <React.Fragment >
        {expandSidebar ? (
            <div className='navbar-items' >
                <div className='sidebar-profile'>
                    <img  src={profilepic} alt='profile picture'/>
                </div>

                <ul>
                    <li className='nav-item'>
                    <Link to='home'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                            <FcHome size={25}/>Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='about'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <FcNightPortrait size={25}/>About
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='work-experience'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <FcFactory size={25}/>Work Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='tech-stack'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcSteam size={25} color='orange'/>Tech stack
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='education'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcGraduationCap size={25}/>Education
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='project'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcSalesPerformance size={25}/>Project
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='testimonial'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcTodoList size={25}/>Testimonial
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='contact'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcContacts size={25}/>Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
        ) : (
            <div className='navbar-items-icons-only'>
            <ul>
                    <li className='nav-item'>
                    <Link to='home'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                            <FcHome size={25}/>
                        </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='about'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <FcNightPortrait size={25}/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='work-experience'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <FcFactory size={25}/> 
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='tech-stack'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcSteam size={25} color='orange'/> 
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='education'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcGraduationCap size={25}/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='project'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcSalesPerformance size={25}/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='testimonial'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcTodoList size={25}/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='contact'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >

                        <FcContacts size={25}/>
                        </Link>
                    </li>
                </ul>
            </div>
        )} 
        

    </React.Fragment>
  )
}

export default SidebarList