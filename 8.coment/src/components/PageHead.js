import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Row, Col, Image, ButtonToolbar } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Login from './Login';
import { Link } from "react-router-dom";
import App from '../App'


export default function PageHead() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modallgShow, setModallgShow] = React.useState(false);
    return (
        <Navbar bg="light" className='shadow sticky-top' expand="lg">
            <Container >
                <Navbar.Brand >
                    <Link to='/'>
                        <Image src={require('./../medium.png')} style={{ width: 50 }} />
                    </Link>
                </Navbar.Brand>
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
                <a href=''><Image src={require('./../default.jpg')} style={{ width: 40, height: 40 }} roundedCircle /></a>
            </Container>
        </Navbar>
    )
}
