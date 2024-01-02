import React, { useState } from 'react'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap'
import { LogIn, Menu } from 'react-feather'
import { Outlet } from 'react-router-dom'
import Sidebar from '../UI/Sidebar'

const Layout = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false)

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
            {/* <Sidebar /> */}
            <Sidebar title={'Systems Limited'} />
          </Col>

          {/** Content */}
          <Col className='m-1'>
            {/** Header */}
            <Row>
              <Col
                className='d-flex justify-content-between align-items-center p-3 rounded'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              >
                <div>
                  <div
                    className='d-block d-md-none'
                    onClick={() => {
                      setShowSidebar(true)
                    }}
                  >
                    <Menu size={15} />
                  </div>
                </div>
                <div className='d-flex justify-content-between-center align-items-center gap-2'>
                  Login <LogIn size={15} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className='p-1'>
                <div className='p-3'>
                  {/* <Outlet /> */}
                  {children}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Offcanvas
          style={{ width: '250px ' }}
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Systems Limited</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  )
}

export default Layout
