import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, Form, Row, Col, Image, Modal } from 'react-bootstrap';


export default function Register(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Row>
                    <Col sm='3'><Image src={require('./../back.png')} style={{ margin: -16 }} /></Col>
                    <Col sm='6' className='text-center'>
                        <p className='h3'>Join Medium</p><br />
                        <p>Create One Account to recive great stories in your inbox, personalize your homepage, and follow authors and topics that you love</p>
                        <Form>
                            <Form.Group controlId="formGroupUsername">
                                <Form.Control type="Username" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Regristration</Button>
                            <p className="inline">Alredy have an acount? <a href='' >SignIn</a></p><br />
                            <p>To make medium work, we log user data and share it with service providers. click "SignUp" abovr to accept Medium's <a>Terms Service</a> and <a>privacy Policy</a>
                            </p>

                        </Form>
                    </Col>
                    <Col sm='3'><Image src={require('./../back2.png')} style={{ margin: -17, float: 'right' }} /></Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}