import React, {useState}  from 'react'
import "./WorkExperience.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsPersonWorkspace } from 'react-icons/bs';

import Fade from 'react-reveal/Fade';

function WorkExperiece({playSound}) {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }


    const data = [
        {
            position: "No work experience",
            des: "Driven by an unwavering passion for web development and an ardent desire to launch my career in this field, I am actively seeking opportunities to showcase my skills and embark on a journey of professional growth. My motivation knows no bounds, and I wholeheartedly embrace any challenge that comes my way, approaching it with unwavering determination to acquire invaluable experience. If given the chance, I am prepared to immerse myself in a vibrant work environment that allows me to apply my knowledge, glean insights from seasoned mentors, and make a valuable contribution to the team's success. I am thrilled to channel my enthusiasm, unwavering dedication, and strong work ethic into a web development role, aiming to leave a profound and lasting impact within the organization.",
            year: "2023",
        },
        
    ]

    const colors = [
        "#311fc8",
        "#bb7200",
        "#3998B6",
        "darkorange",
        "#7735F9",
        "purple",
        "#0d7f9a"
        
      ]

  return (
    <div className='container workexperience-section' id='work-experience'>
        <div className='section-title'>
          <h3> Work Experiece</h3>
          <span className='line'></span>

        </div>

                        
        <VerticalTimeline lineColor={'red'}>
            {data.map((item, index) => {
                return (
                    <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "darkblue" , color: 'whitesmoke' }}
                            contentArrowStyle={{ borderRight: '7px solid '+ colors[index] }}
                            date={item.year}
                            dateClassName='date-class' 
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<BsPersonWorkspace />}
                        >
                        <Fade bottom>
                            <h3 className="vertical-timeline-element-title">{item.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.companyname}</h4>
                            
                            {/* <div className='row  '>
                                {item.techskills.map((tech, index) => {
                                    return (
                                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6' key={index}>
                                            <div className='tech-skills' style={{backgroundColor: colors[index + 1]}}>
                                                <p >
                                                    {tech.techname}
                                                </p>

                                            </div>
                                        </div>  
                                    )
                                })}
                            </div> */}
                            <div className="workexperience-description" onClick={handleShow}>
                                <p onClick={playSound}>
                                    
                                    {show ? (<p>{item.des} <p style={{color:"lightgreen"}}>Show less</p></p>) : (<p > {item.des.substring(0,50)}...<p style={{color:'lightgreen'}}>See More</p> </p>) }
                                </p>

                            </div>
                        </Fade>
                    </VerticalTimelineElement>
                )

            })}

        
        </VerticalTimeline>



    </div>
  )
}

export default WorkExperiece