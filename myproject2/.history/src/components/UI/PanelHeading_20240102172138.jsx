import React from 'react'

const PanelHeading = ({title, icon   }) => {
  return (
    <div className='d-flex justify-content-start align-items-center gap-2 mb-3'>
        {icon}
        <h2>{title}</h2>
      </div>

  )
}

export default PanelHeading