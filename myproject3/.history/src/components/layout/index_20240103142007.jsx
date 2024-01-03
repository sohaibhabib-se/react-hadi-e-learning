import { Col, Row } from 'antd'
import React from 'react'

const Layout = () => {
  return (
    <>
      <Row style={{ minHeight: '100vh' }}>
        <Col className='bg-danger fixedColumn leftColumn' md={4} xs={0}>
          Left Sidebar
        </Col>
        <Col className='bg-warning centerColumn' md={16} xs={24}>
          <div className='d-flex justify-content-center align-items-between'>
            <div>left</div>
            <div>center</div>
            <div>right</div>
          </div>
        </Col>
        {/** Only this will scroll according to the css */}
        <Col className='bg-primary fixedColumn rightColumn' md={4} xs={0}>
          Right Sidebar
        </Col>
      </Row>
    </>
  )
}

export default Layout
