import React from 'react'
import { Activity } from 'react-feather'

const Sidebar = () => {
  return (
    <div>
      <div className='p-3 h3'>
        <b>Systems Limited</b>
      </div>

      <div className='p-3' style={{fontSize: "1px"}}>
        <div className='d-flex justify-content-start align-items-center gap-2'>
          <Activity size={15} />
          <span>Cover </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
