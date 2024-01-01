import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>Sidebar</Col>
        <Col>Content</Col>
      </Row>
    </Container>  
  )
}
 
export default App  