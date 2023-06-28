import React, {useState} from 'react'
import "./Education.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcGraduationCap } from 'react-icons/fc';


function Education({playSound}) {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const data = [
    {
        name: "Udemy",
        course: "\"The Complete 2023 Web Development Bootcamp \" Created By: Dr. Angela Yu",
        courselink: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        courseprogress: "50%",
        year: "2023",
        des: "This course transformed my understanding of web development. It provided me with the knowledge and skills necessary to create professional and functional websites. The practical projects allowed me to apply the concepts learned and reinforced my understanding of web development principles. The author's teaching style helped me to be self-sufficient and what I loved most about this course is that it teaches you the fundamental concept of programming most specifically in web development that will benefit you in the long-run rather than making you memorize code."
    },
  ]

  const colors = [
    "darkblue",
  ]

  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>
          <h3> Education </h3>
          <span className='line'></span>
        </div>

        <VerticalTimeline lineColor={'blue'}>
            {data.map((item, index) => {
                return (
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid '+ colors[index] }}
                        date={item.year}
                        dateClassName='date-class' 
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<FcGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.name}</h3>

                        <div className="vertical-timeline-element-subtitle">
                          <h3><a target='_' href='https://www.udemy.com/course/the-complete-web-development-bootcamp/' onClick={playSound}>{item.course}</a></h3>
                        </div>
                        <h3>

                          course-progress: {item.courseprogress} 
                        </h3>
                        <div className="education-description" onClick={handleShow}>
                          <p onClick={playSound}>
                              
                              {show ? (<p>{item.des} <p style={{color:"lightgreen"}}>Show less</p></p>) : (<p > {item.des.substring(0,50)}...<p style={{color:'lightgreen'}}>See More</p> </p>) }
                          </p>

                        </div>
                    </VerticalTimelineElement>
                    
                )

            })}

        
        </VerticalTimeline>

    </div>
  )
}

export default Education