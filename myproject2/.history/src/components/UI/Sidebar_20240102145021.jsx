import React from 'react'
import { Activity } from 'react-feather'
import { myStyle } from '../../assets/style/style'

const Sidebar = () => {
  return (
    <div>
      <div className='p-3 h3'>
        <b>Systems Limited</b>
      </div>

      <div className='p-3' style={{fontSize: "17px"}}>
        <div className='d-flex justify-content-start align-items-center gap-2' style={{border: `1px solid ${myStyle.primaryColor}`}}>
          <Activity size={15} />
          <span>Cover </span>
        </div>
        <div className='d-flex justify-content-start align-items-center gap-2 mt-3'>
          <Activity size={15} />
          <span>Dashboard </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
