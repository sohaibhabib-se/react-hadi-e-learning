import React from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Grid } from 'antd'

const LayoutHeader = () => {
  const points = Grid.useBreakpoint()
  return (
    // <div className='pb-2 pt-2 border-bottom d-flex justify-content-between align-items-center'>
    <>
    <div className='py-2 border-bottom d-flex justify-content-between align-items-center _db-primary'>
      {!points.md && <MenuOutlined />}
      <span>Welcome Systems Limited</span>
      <div className='d-flex justify-content-center align-items-center gap-2'>
        <span className='border-end'>Update</span>
        {!points.md && <span>Assets</span>}
      </div>
    </div>

    <Drawer title="Basic Drawer" placement="left" onClose={()=>{}} open={true}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default LayoutHeader
