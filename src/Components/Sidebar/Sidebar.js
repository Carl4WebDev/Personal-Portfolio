import React, {useState} from 'react'
import "./Sidebar.css"
import Home from "../Home/Home.js"
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";


import "./SidebarList.js"
import SidebarList from './SidebarList.js';

function SideBar({theme, changeTheme}) {
  const[expandSidebar, setExpandSidebar] = useState(false);  
  
  const handleExpandClick = () => {

    setExpandSidebar(!expandSidebar)
  } 

  return (

    <div className='container-fluid sidebar-section'>
        <div className={expandSidebar ? "sidebar-expand sidebar" :  "sidebar"}> 

         
          <div className='icon-expand-collapse' >
            <p onClick={handleExpandClick}>

              {expandSidebar ? (<BsChevronDoubleLeft size={30}/>) :
                (<BsChevronDoubleRight  size={30}/>)}
            </p>
          </div>

          <SidebarList  expandSidebar={expandSidebar}/>

        </div>

        <div className='container' >
          <Home changeTheme={changeTheme} theme={theme} />
        </div>
    </div>
  )
}

export default SideBar