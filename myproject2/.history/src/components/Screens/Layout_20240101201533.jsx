import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
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
          <Sidebar />
        </Col>

        {/** Content */}
        <Col className='m-1'>
          {/** Header */}
          <Row>
            <Col
              className='d-flex justify-content-between-center align-items-center p-1 rounded'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
              <div
                className='d-block d-md-none'
                onClick={() => {
                  setShowSidebar(true)
                }}
              >
                Open Side
              </div>
              <div>Login</div>
            </Col>
          </Row>

          <Row>
            <Col className='p-1'>{children}</Col>
          </Row>
        </Col>
      </Row>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
    </>
  );
};

export default Layout;
