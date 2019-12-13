import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, Row, Col, Image, ButtonToolbar } from 'react-bootstrap';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import Login from './components/Login';
import CategoryScroll from './components/CategoryScroll';
import HomeP from './components/HomeP';
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

// 
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modallgShow, setModallgShow] = React.useState(false);
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand ><Link to="/">MEDIUM </Link></Navbar.Brand>
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
            <div className="h4" style={{ marginLeft: '50%' }}><IoIosSearch
            /><IoIosNotificationsOutline /> </div>
            <a href=''><Image src={require('./default.jpg')} style={{ width: 40, height: 40 }} roundedCircle /></a>
          </Container>
        </Navbar>

        <div className="mx-auto my-4" >
          <Container>
            <CategoryScroll />
          </Container>
        </div>
      </header>
      <HomeP />
    </div>
  );
}

export default App;
