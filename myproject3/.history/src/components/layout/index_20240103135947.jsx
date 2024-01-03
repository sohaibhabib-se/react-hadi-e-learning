import { Col, Row } from 'antd'
import React from 'react'

const Layout = () => {
  return (
    <>
    <Row>
        <Col md={4}>Left Sidebar</Col>
        <Col md={16}>Center</Col>
        <Col md={4}>Right Sidebar</Col>
    </Row>
    </>
  )
}

export default Layout