import React, {useState}from 'react'
import "./TechStack.css"
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

import Zoom from 'react-reveal/Zoom';
function TechStack({playSound}) {
 

  const data = [
    {
      name:"HTML"
    }, 
    {
      name:"CSS"
    }, 
    {
      name:"JavaScript"
    }, 
    {
      name:"JQuery"
    }, 
    {
      name:"Bootstrap"
    }, 
    {
      name:"React.js"
    }, 
    {
      name:"Node.js"
    }, 
    {
      name:"Express.js",
      status: "(Currently learning)"
    }, 

  ];

  const colors = [
    "#99faf5",
    "#ebfb7b",
    "#7bfb0a",
    "#fcbd5a",
    "#fa6a44",
    "#e876fc",
    "#8dfec0",
    "#fe58cb",
    "#47023b",
    "#ecd181",
    "#8a836d",
    "#eea38d",
    "#731a00",
    "#b6a0f9",
    "#FA8072"
    
  ]

  const [showMoreTechStack, setShowMoreTechStack] = useState(3);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3)
    playSound()
  }
  const loadLess = () => {
    setShowMoreTechStack((prev) => prev - 6)
    playSound()
  }

 
  return (
    <div className='container techstack-section' id='tech-stack' >

      <div className='section-title'>
          <h3> TechStack</h3>
          <span className='line'></span>
      </div>
        <div className='row'>
            {data.slice(0, showMoreTechStack).map((item,index) => {

              return (
              <Slide left>
                  <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className={index === 0 ? "tech-content-marked tech-content" : "tech-content"}>
                  <Flip top> 
                      <span className='tech-number ' style={{backgroundColor: colors[index]}}>
                        {index + 1}
                      </span>
                  </Flip>
                  <Flip bottom> 
                      <p>{item.name}</p>
                      <p>{item.status}</p>
                  </Flip>
                    </div>
                  </div>
              </Slide>
              )


            })}
        </div>
        {showMoreTechStack >= data.length ? (
        <Zoom>
          <span className='load-more-techstack' onClick={loadLess}>
            Show Less
          </span>
        </Zoom>
        ) : (
        <Zoom>
          <span className='load-more-techstack' onClick={loadMore}>
            Load More
          </span>
        </Zoom>
        )}


    </div>
  )
}

export default TechStack