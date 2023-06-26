import React, {useState} from 'react'
import "./Project.css"
import {FcExpand, FcCollapse} from "react-icons/fc"

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const ProjectList = ({name,des,projectlink, techused}) => { 

    const [show,setShow] = useState(false)

    const handleShow = () => {
        setShow(!show);
    }

    const colors = [
    "#eea38d",
    "#731a00",
    "#b6a0f9",
    "#FA8072"
    
  ]
    return (
    <Slide right>
        <div className={show ? "project-list-opened project-list" : "project-list"} onClick={handleShow}
        onMouseEnter={()=> { setShow(true) }}>

        <Fade top>
            <div  className='title-collapse-option'>

                <h4>{name}</h4>

                <p>
                    {show ? <FcExpand size={20}/> : <FcCollapse size={20} />}
                </p>

            </div>
            <div className='description '>
                <p>
                    {show ? (<p>{des}</p>) : (<p> {des.substring(0,50)}...<p style={{color:'green'}}>See More</p> </p>) }
                </p>

            </div>

        </Fade>


        <Fade bottom>
            <div className='row'>
                {techused &&  techused.map((tech, index)=>{
                    return (
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index} > 
                            <div className='tech-used-in-project' > 
                                <p style={{backgroundColor: colors[index]}}>{tech.techname}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='live-demo-button'>
                <a target="_"href={projectlink}>Live Demo</a>
            </div>
        </Fade>


        </div>
    </Slide>
  )
}

export default ProjectList