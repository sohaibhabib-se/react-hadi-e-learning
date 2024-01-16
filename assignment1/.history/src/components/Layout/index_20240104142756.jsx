import { Col, Row } from 'antd'
import React from 'react'
import LeftSidebar from './LeftSidebar'

const Layout = () => {
  return (
    <>
    <Row style={{ minHeight: '100vh' }}>
        {/** Left side bar */}
        <Col className='fixedColumn leftColumn border-end' md={4} xs={0}><LeftSidebar /></Col>
    </Row>
    

    </>
  )
}

export default Layout