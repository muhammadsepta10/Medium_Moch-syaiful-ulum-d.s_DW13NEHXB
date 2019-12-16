import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col, Image, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import Login from './components/Login';
import CategoryScroll from './components/CategoryScroll';
import CategoryPage from './components/CategoryPage';
import HomeP from './components/HomeP';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modallgShow, setModallgShow] = React.useState(false);
  return (
    <div>
      <Router>
        <header>
          <Navbar bg="light" expand="lg">
            <Container >
              <Navbar.Brand ><Link to="/">MEDIUM</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Row >
                <Col >
                  <ButtonToolbar style={{ clear: 'both' }}>
                    <Button style={{ marginLeft: 200 }} variant="outline-success" onClick={() => setModalShow(true)}>
                      JOIN</Button>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </ButtonToolbar>
                </Col>
                <Col>
                  <ButtonToolbar style={{ clear: 'both' }}>
                    <Button variant="outline-success" onClick={() => setModallgShow(true)}>
                      LOGIN</Button>
                    <Login
                      show={modallgShow}
                      onHide={() => setModallgShow(false)}
                    />
                  </ButtonToolbar>
                </Col>
              </Row>
              <a href=''><Image src={require('./default.jpg')} style={{ width: 40, height: 40 }} roundedCircle /></a>
            </Container>
          </Navbar>
          <Container className="sticky-top">
            <CategoryScroll />
          </Container>
        </header>
        <Switch>
          <Route path="/OneZero">
            <OneZero />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function OneZero() {
  return <CategoryPage />
}
function Home() {
  return <HomeP />
}

export default App;
