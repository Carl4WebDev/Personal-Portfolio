import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'

function Project({playSound}) {

  const data =   [
    {
        name:"Portfolio",
        des: "This platform serves as a showcase of my skills and expertise in web development and design. With a passion for creating visually appealing and user-friendly digital experiences, I have crafted this website to highlight my projects, capabilities, and professional achievements.",
        projectlink: "https://carl4dev-porfolio.netlify.app/?fbclid=IwAR2dvUwEwgw8PmKmJJS8pXZgf1_6fhy4XGBduMgYMsa6RC1gULTgcBMd-AU",
        sourcecode: "https://github.com/Carl4WebDev/Personal-Portfolio",
        techused: [
            {
                techname: "HTML"
            },
            {
                techname: "CSS"
            },
            {
                techname: "JAVASCRIPT"
            },
            {
                techname: "BOOSTRAP"
            },
            {
                techname: "REACT.JS"
            },
        ]
    },
    {
        name:"Hunting-game",
        des: "A Simple game I created for fun. In this game, players embark on a thrilling hunt where their objective is to track down hidden targets within a given time limit. Sharpen your observation skills and put your reflexes to the test as you navigate through the game environment. As a prototype, the game offers a limited gameplay experience. It serves as a foundation for future development, with plans to add more levels, features, and optimizations in the near future.",
        projectlink: "https://hunt-game.netlify.app",
        sourcecode: "https://github.com/Carl4WebDev/hunt-game/blob/master/script.js",
        techused: [
            {
                techname: "HTML"
            },
            {
                techname: "CSS"
            },
            {
                techname: "JAVASCRIPT"
            },
        ]
    },
    {
        name:"Simon game",
        des: "The Simon game is a classic electronic memory game where players must replicate a sequence of colored lights and sounds. This is a web-based simon game inspired by the web development course I'm taking to learn web development. I contributed to the project by fixing an issue that previously made the game unplayable on devices without a keyboard. Now, the game is accessible and enjoyable across different devices. Including this project in my portfolio showcases my web development skills and problem-solving abilities.",
        projectlink: "https://carl4devsimongame.netlify.app/",
        sourcecode: "https://github.com/Carl4WebDev/Simon-Game",
        techused: [
            {
                techname: "HTML"
            },
            {
                techname: "CSS"
            },
            {
                techname: "JAVASCRIPT"
            },
            {
                techname: "JQUERY"
            },
        ]
    },
    {
        name:"Pizza-Landing-Page",
        des: "This is a prototype of a landing page created for a pioneering pizza business. It has been designed and developed to adapt seamlessly to various screen sizes and devices, ensuring optimal user experience across desktop computers, laptops, tablets, and mobile phones. The responsive nature of the project demonstrates my proficiency in creating websites that are accessible and visually appealing, regardless of the device being used to access them. But still requires further development. ",
        projectlink: "https://carl4dev-pizza-landing-page.netlify.app/",
        sourcecode: "https://github.com/Carl4WebDev/Pizza-Landing-Page",
        techused: [
            {
                techname: "HTML"
            },
            {
                techname: "Flex-box"
            },
            {
                techname: "Grid"
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
                        <ProjectList  {...item} playSound={playSound}/>

                    </div>

                )

            })}



        </div>

    </div>
  )
}

export default Project