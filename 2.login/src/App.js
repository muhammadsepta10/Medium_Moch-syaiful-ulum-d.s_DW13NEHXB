import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, Form, Row, Col, Image, ButtonToolbar, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import Login from './components/Login';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modallgShow, setModallgShow] = React.useState(false);
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ButtonToolbar style={{ clear: 'both' }}>
              <Button variant="outline-success" onClick={() => setModalShow(true)}>
                JOIN</Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ButtonToolbar style={{ clear: 'both' }}>
              <Button variant="outline-success" onClick={() => setModallgShow(true)}>
                LOGIN</Button>
              <Login
                show={modallgShow}
                onHide={() => setModallgShow(false)}
              />
            </ButtonToolbar>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
