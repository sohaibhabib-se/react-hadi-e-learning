import { Col, Row } from 'antd'
import React from 'react'
import LeftSidebar from './LeftSidebar'
import LayoutHeader from './LayoutHeader'

const Layout = ({children}) => {
  return (
    <>
    <Row style={{ minHeight: '100vh' }}>
        {/** Left side bar */}
        <Col className='fixedColumn leftColumn border-end' md={4} xs={0}><LeftSidebar /></Col>

        {/** Content */}
        <Col className='centerColumn' md={16} xs={24}>
          <LayoutHeader />  {/** Top Header */}
          {/* <div className='p-4'>{children}</div> */}
        </Col>

        {/** Right side bar */}
        <Col className='fixedColumn rightColumn border-start' md={4} xs={0}>
          Right Sidebar
        </Col>
    </Row>
    

    </>
  )
}

export default Layout