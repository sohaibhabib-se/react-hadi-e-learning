import React from 'react';
import {MenuOutlined} from '@ant-design/icons';

const LayoutHeader = () => {
  return (
    // <div className='pb-2 pt-2 border-bottom d-flex justify-content-between align-items-center'>
    <div className='py-2 border-bottom d-flex justify-content-between align-items-center'>
      <MenuOutlined />
      <div>center</div>
      <div>right</div>
    </div>
  )
}

export default LayoutHeader
