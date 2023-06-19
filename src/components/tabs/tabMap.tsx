import React from 'react'
import './tabMap.scss'

function TabMap(tab: { tab: number }): JSX.Element {
  return (
    <div className="tabMap">
      <div className="line"></div>
      <div className="circle active"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  )
}

export default TabMap
