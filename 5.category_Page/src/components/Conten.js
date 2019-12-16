import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col, Image, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Conten() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modallgShow, setModallgShow] = React.useState(false);
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand ><Link to="/">
                        <Image src={require('./../medium.png')} />

                    </Link></Navbar.Brand>
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
        </Router>
    )
}
