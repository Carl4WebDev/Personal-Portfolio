import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'

function Project() {

  const data =   [
    {
        name:"Mern Stack Job Portal",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Node.js"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "React.js"
            },
            {
                techname: "Next.js"
            },
        ]
    },
    {
        name:"Mern Stack Event Management Portal",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "vue.js"
            },
            {
                techname: "Nuxt.js"
            },
        ]
    },
    {
        name:"Mern Stack Social Media",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Node"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "Typescript.js"
            },
            {
                techname: "Nuxt.js"
            },
        ]
    },
    {
        name:"Mern Stack Online Learning Platform",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "vue.js"
            },
            {
                techname: "Nuxt.js"
            },
        ]
    },
    {
        name:"Mern Stack E-commerce",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "vue.js"
            },
            {
                techname: "Nuxt.js"
            },
        ]
    },
    {
        name:"Mern Stack Video streaming",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        projectlink: "https//google.com",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "Express.js"
            },
            {
                techname: "vue.js"
            },
            {
                techname: "Nuxt.js"
            },
        ]
    },
  ]
  return (
    <div className='container' id='project'>
        <div className='section-title'>
            <h3>Project</h3> 
            <span className='line'></span>
        </div>

        <div className='row'>
            {data.map((item, index)=> {

                return (

                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                        <ProjectList  {...item}/>

                    </div>

                    

                )

            })}



        </div>

    </div>
  )
}

export default Project