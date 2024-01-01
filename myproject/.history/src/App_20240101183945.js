import React, { useState } from 'react'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap'

const App = () => {

  const [showSidebar, setshowSidebar] = useState(true);

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
            <Col className='d-flex justify-content-between-center align-items-center p-1 rounded' style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <div className='d-block d-md-none'>Open Side</div>
              <div>Login</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Offcanvas show={showSidebar} onHide={() => setshowSidebar(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default App;