import React from 'react'
import { Activity } from 'react-feather'

const Sidebar = () => {
  return (
    <div>
        <span className='text-center p-3'>Systems Limited</span>

        <div className='p-3'>
            <div><Activity size={15}/><span>Cover </span></div>
        </div>
    </div>
  )
}

export default Sidebar