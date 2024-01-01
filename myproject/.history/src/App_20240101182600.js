import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <Row>
        {/** Sidebar */}
        <Col
          className='d-none d-md-block'
          style={{
            height: '100vh',
            width: '200px',
            flex: '0 0 auto',
            border: '0.01rem solid lightgrey',
          }}
        >
          Sidebar
        </Col>

        {/** Content */}
        <Col className='m-1'>
          <Row>
            <Col className='d-flex justify-content-between align-items-center p-1 bg-warning rounded'>
              <div>Open Side</div>
              <div>Login</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
