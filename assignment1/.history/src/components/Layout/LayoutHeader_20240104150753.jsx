import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Grid } from 'antd'
import React, { useState } from 'react'

const LayoutHeader = () => {
    const points = Grid.useBreakpoint()

  const [showLeft, setshowLeft] = useState(false)

  return (
    <>
      <div className='py-2 border-bottom d-flex justify-content-between align-items-center _db-primary'>
        {!points.md && <MenuOutlined onClick={() => setshowLeft(true)} />}
        <span>Welcome Systems Limited</span>
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <span className='border-end'>Update</span>
          {!points.md && <span>Assets</span>}
        </div>
      </div>

      <Drawer
        style={{ width: '250px' }}
        title='Basic Drawer'
        placement='left'
        onClose={() => setshowLeft(false)}
        open={showLeft}
      >
        <LeftSidebar title={false} />
      </Drawer>
    </>
  )
}

export default LayoutHeader
