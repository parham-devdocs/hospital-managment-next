"use client"

import { useState } from 'react'
import TabHeader from './tabHeader'
import { TabList } from './types'
import TabBody from './tabBody'

const Tab = () => {
    const [activeTab,setActiveTab]=useState<TabList>("schedule")
  return (
    <div className=' space-y-5'>
        <TabHeader activeTab={activeTab} onChange={setActiveTab}/>
        <TabBody tab={activeTab}/>
    </div>
  )
}

export default Tab