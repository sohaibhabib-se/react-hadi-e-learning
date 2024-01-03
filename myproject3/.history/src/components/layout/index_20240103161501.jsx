import { Col, Drawer, Row, /** Grid*/ } from 'antd'
import React, { useState } from 'react'
import LayoutHeader from './LayoutHeader';
import LeftSidebar from './leftsidebar';
import FloatBtn from './FloatBtn';

import '../../assets/darkBlue.css';
import '../../assets/darkGrey.css';
import '../../assets/darkPurple.css';

const Layout = ({children}) => {

    // const points = Grid.useBreakpoint();
    const [theme, setTheme] = useState('blue');

  return (
    <>
      <Row style={{ minHeight: '100vh' }} className={`${theme === 'grey' ? "main-dg _layout" : "main-db_layout"}`}>
        <Col className='fixedColumn leftColumn border-end' md={4} xs={0}>
          <LeftSidebar />
        </Col>
        <Col className='centerColumn' md={16} xs={24}>
          <LayoutHeader />
          <div className='p-4'>{children}</div>
        </Col>
        {/** Only this will scroll according to the css */}
        <Col className='fixedColumn rightColumn border-start' md={4} xs={0}>
          Right Sidebar
        </Col>

        <FloatBtn />
      </Row>

      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default Layout
