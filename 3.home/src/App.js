import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col, Image, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';

function App() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand href="#home">MEDIUM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <a href=''><Image src={require('./default.jpg')} style={{ width: 40, height: 40 }} roundedCircle /></a>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg" className='pb-4 mb-2'>
          <Nav className="mx-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
            <Nav.Link href="#pricing">Lorem</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <body>

        {/* BANNER */}
        {/* Left Top Articel */}
        <div style={{ marginRight: 100, marginLeft: 100 }}>
          <Row >
            <Col>
              <a href=''><Image src={require('./default.jpg')} style={{ width: 400, height: 150 }} /></a>
              <div className='mt-3 text-left' style={{ marginLeft: 100 }}>
                <a className='h3 text-dark text-decoration-none' href=''>Lorem ipsum dolor</a>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vitae erat scelerisque pretium.</p>
                <br />
                <p><a>Darius Faroux in Forge</a><br />
                  <small>jul 9 . 5 min read</small></p>
              </div>
            </Col>

            {/* Top Center Banner */}
            <Col>
              <Row className='mb-3'>
                <Col lg='4'><Image src={require('./default.jpg')} style={{ width: 100, height: 100 }} rounded /></Col>
                <Col lg='8' className=''>
                  <p className='h5'><strong>lorem ipsum dolor sit amet</strong></p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col lg='4'><Image src={require('./default.jpg')} style={{ width: 100, height: 100 }} rounded /></Col>
                <Col lg='8' className=''>
                  <p className='h5'><strong>lorem ipsum dolor sit amet</strong></p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col lg='4'><Image src={require('./default.jpg')} style={{ width: 100, height: 100 }} rounded /></Col>
                <Col lg='8' className=''>
                  <p className='h5'><strong>lorem ipsum dolor sit amet</strong></p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col lg='4'><Image src={require('./default.jpg')} style={{ width: 100, height: 100 }} rounded /></Col>
                <Col lg='8' className=''>
                  <p className='h5'><strong>lorem ipsum dolor sit amet</strong></p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Col>
                <a href=''><Image src={require('./default.jpg')} style={{ width: 250, height: 150, float: 'right', marginTop: -17 }} /></a>
                <div className='mt-3 text-left' style={{ marginLeft: 65 }}>
                  <a className='h3 text-dark text-decoration-none' href=''>Lorem ipsum dolor</a>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vitae erat scelerisque pretium.</p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                  <div>
                    <a href=''>SEE ALL FEATURED ></a>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='sticky-top' lg='4'>
              <p className='h4 mt-4'>Popular on Medium</p>
              <hr />
              <div>
                <dl class="row">
                  <dt class="col-sm-2 h2 text-muted">01</dt>
                  <dd class="col-sm-10 " ><strong className='h4'>A description list is perfect for defining terms.</strong><br />
                    <small>Corinne Purtill in OneZero <br />
                      Nov 26 . 6 min read
                    </small>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-2 h2 text-muted">02</dt>
                  <dd class="col-sm-10 " ><strong className='h4'>A description list is perfect for defining terms.</strong><br />
                    <small>Corinne Purtill in OneZero <br />
                      Nov 26 . 6 min read
                    </small>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-2 h2 text-muted">03</dt>
                  <dd class="col-sm-10 " ><strong className='h4'>A description list is perfect for defining terms.</strong><br />
                    <small>Corinne Purtill in OneZero <br />
                      Nov 26 . 6 min read
                    </small>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-2 h2 text-muted">04</dt>
                  <dd class="col-sm-10 " ><strong className='h4'>A description list is perfect for defining terms.</strong><br />
                    <small>Corinne Purtill in OneZero <br />
                      Nov 26 . 6 min read
                    </small>
                  </dd>
                </dl>
              </div>
            </Col>
            <Col lg='8'>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col sm='8'>
                  <a className='h5'><small>Productivity <em>Popula Topic</em></small>
                    <br />
                    <strong>10 Bad Habits of Unsuccessful People</strong>
                  </a>
                  <p>Instead of looking for traits to emulate, focus on ones to avoid
                                      Darius Foroux in Forge
                    </p>
                  <p><a>Darius Faroux in Forge</a><br />
                    <small>jul 9 . 5 min read</small></p>
                </Col>
                <Col sm='4'>
                  <a href=''><Image src={require('./default.jpg')} style={{ width: 150, height: 150 }} /></a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </body>

    </div>


  );
}

export default App;
