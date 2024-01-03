import React from 'react';
import {MenuOutlined} from '@ant-design/icons';
import { Grid } from 'antd';

const LayoutHeader = () => {
    const points = Grid.useBreakpoint(); 
  return (
    // <div className='pb-2 pt-2 border-bottom d-flex justify-content-between align-items-center'>
    <div className='py-2 border-bottom d-flex justify-content-between align-items-center'>
      {points.md && <MenuOutlined />}
      <span>Welcome Systems Limited</span>
      <div><span>Update</span><span>Assets</span></div>
    </div>
  )
}

export default LayoutHeader
