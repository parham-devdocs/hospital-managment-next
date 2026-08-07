'use client'

import TabHeader from './tabHeader'
import TabBody from './tabBody'
import { useState } from 'react'
import { TabList } from './types'
import { useParams } from 'next/navigation'

const Tab = () => {
  const [activeTab, setActiveTab] = useState<TabList>("about")
  const params = useParams()
  const doctorId = params?.slug as string

  return (
    <div className='space-y-5'>
      <TabHeader activeTab={activeTab} onChange={setActiveTab} />
      <TabBody activeTab={activeTab} doctorId={doctorId} />
    </div>
  )
}

export default Tab