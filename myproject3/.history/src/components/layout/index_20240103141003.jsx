import { Col, Row } from 'antd';
import React from 'react';

const Layout = () => {
  return (
    <>
    <Row style={{minHeight: "100vh"}}>
        <Col className='bg-danger fixedColumn leftColumn' md={4}  xs={0}>Left Sidebar</Col>
        <Col className='bg-warning' md={16} xs={24}>Center</Col>
        <Col className='bg-primary fixedColumn rightColumn' md={4} xs={0}>Right Sidebar</Col>
    </Row>
    </>
  )
}

export default Layout