import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <Row>
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
        <Col>
          <Row>
            <Col className='bg-warning'>Hadi E-Learning</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
