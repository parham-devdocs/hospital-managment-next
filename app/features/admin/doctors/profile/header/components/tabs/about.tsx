

import React from 'react'

const About = ({text}:{text:string}) => {
  return (
    <div className=' animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10'>{text}</div>
  )
}

export default About