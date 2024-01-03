import { Col, Row, /** Grid*/ } from 'antd'
import React from 'react'
import LayoutHeader from './LayoutHeader';
import LeftSidebar from './leftsidebar';

const Layout = () => {

    // const points = Grid.useBreakpoint();

  return (
    <>
      <Row style={{ minHeight: '100vh' }}>
        <Col className='fixedColumn leftColumn border-end' md={4} xs={0}>
          <LeftSidebar />
        </Col>
        <Col className='centerColumn' md={16} xs={24}>
          <LayoutHeader />


        </Col>
        {/** Only this will scroll according to the css */}
        <Col className='fixedColumn rightColumn border-start' md={4} xs={0}>
          Right Sidebar
        </Col>
      </Row>
    </>
  )
}

export default Layout
