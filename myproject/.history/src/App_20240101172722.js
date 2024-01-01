import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='d-none d-md-block'>Sidebar</Col>
        <Col>Content</Col>
      </Row>
    </Container>  
  )
}
 
export default App  