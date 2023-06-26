import React, {useState, createContext} from 'react'
import Sidebar from "./Components/Sidebar/Sidebar.js"
import About from "./Components/About/About.js" 
import TechStack from './Components/TechStack/TechStack.js'
import Project from './Components/Projects/Project.js'
import WorkExperiece from './Components/WorkExperience/WorkExperiece.js'
import Education from './Components/Education/Education.js'
import Testimonial from './Components/Testimonial/Testimonial.js'
import ScrollToTop from "react-scroll-to-top";
import "./App.css"
import NavbarMobileView from './Components/Sidebar/NavbarMobileView.js'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ?  "dark" : "light") )
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>

      <div id={theme} className={theme}>
        <NavbarMobileView  changeTheme={changeTheme} theme={theme}/>

        <Sidebar  changeTheme={changeTheme} theme={theme}/>
        <About />
        <WorkExperiece />
        <TechStack /> 
        <Education />
        <Project />
        <Testimonial />

      </div>

      <ScrollToTop 
        smooth={true}
        color='whitesmoke' 
        style={{borderRadius: " 30px", backgroundColor: "black",}}
      />
    </ThemeContext.Provider>
  )
}

export default App