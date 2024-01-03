import { Col, Row } from 'antd';
import React from 'react';

const Layout = () => {
  return (
    <>
    <Row>
        <Col md={4}  xs={0}>Left Sidebar</Col>
        <Col md={16} xs={24}>Center</Col>
        <Col md={4} xs={0}>Right Sidebar</Col>
    </Row>
    </>
  )
}

export default Layout