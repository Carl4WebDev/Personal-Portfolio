import React from 'react'
import "./WorkExperience.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcHome } from 'react-icons/fc';

import Fade from 'react-reveal/Fade';

function WorkExperiece() {

    const data = [
        {
            companyname: "google",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
        {
            companyname: "facebook",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
        {
            companyname: "CIA",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
        {
            companyname: "6X1",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
        {
            companyname: "concentrix",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
        {
            companyname: "Ghouji",
            position: "full stack dev",
            des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            year: "2018-2020",
            techskills: [
                {
                    techname: "Node.js"
                },
                {
                    techname: "react.js"
                },
                {
                    techname: "vue.js"
                },
                {
                    techname: "vue.js"
                },
            ]
        },
    ]

    const colors = [
        "#27eaef",
        "#0af125",
        "#8361f8",
        "#addba0",
        "#dba0b2",
        "#daa0f2",
        "#4ce4be",
        "#111816",
        "#47023b",
        "#ecd181",
        "#8a836d",
        "#eea38d",
        "#731a00",
        "#b6a0f9",
        "#FA8072"
        
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
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid '+ colors[index] }}
                            date={item.year}
                            dateClassName='date-class' 
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<FcHome />}
                        >
                        <Fade bottom>
                            <h3 className="vertical-timeline-element-title">{item.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.companyname}</h4>
                            
                            <div className='row  '>
                                {item.techskills.map((tech, index) => {
                                    return (
                                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6' key={index}>
                                            <div className='tech-skills'>
                                                <p>
                                                    {tech.techname}
                                                </p>

                                            </div>
                                        </div>  
                                    )
                                })}
                            </div>
                            <p>
                                {item.des}
                            </p>
                        </Fade>
                    </VerticalTimelineElement>
                )

            })}

        
        </VerticalTimeline>



    </div>
  )
}

export default WorkExperiece