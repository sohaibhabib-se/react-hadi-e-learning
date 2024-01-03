import { Col, Row, /** Grid*/ } from 'antd'
import React from 'react'
import LayoutHeader from './LayoutHeader';

const Layout = () => {

    // const points = Grid.useBreakpoint();

  return (
    <>
      <Row style={{ minHeight: '100vh' }}>
        <Col className='fixedColumn leftColumn' md={4} xs={0}>
          Left Sidebar
        </Col>
        <Col className='centerColumn' md={16} xs={24}>
          <LayoutHeader />


        </Col>
        {/** Only this will scroll according to the css */}
        <Col className='fixedColumn rightColumn' md={4} xs={0}>
          Right Sidebar
        </Col>
      </Row>
    </>
  )
}

export default Layout
