

import React from 'react'
import About from './about'
import Schedule from './schedule'
import { AboutDoctor, availability, doctorServices } from './data'
import Services from './services'

const TabBody = ({tab}:{tab:"schedule"|"about"|"services"}) => {
  return (
    <div className=' w-full h-full anim '>
        {tab==="about" && <About text={AboutDoctor} />}
        {tab==="schedule" && <Schedule availability={availability}/>}
        {tab==="services" && <Services services={doctorServices}/>}
    </div>
  )
}

export default TabBody