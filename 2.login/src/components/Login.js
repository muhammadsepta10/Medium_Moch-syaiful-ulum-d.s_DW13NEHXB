import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col, ButtonToolbar, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

export default function Login(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modallgShow, setModallgShow] = React.useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Row>
                    <Col sm='3'></Col>
                    <Col sm='6' className='text-center'>
                        <p className='h3 mb-4'>Sign With Email</p><br />
                        <p>Enter the email address associated  with your acount, and we'll send a magic link to your inbox.</p>
                        <Form>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Continue</Button><br />
                            <ButtonToolbar>
                                <Button variant="link" className='text-success' type="submit" onClick={() => setModalShow(true)}>
                                    All sign in option</Button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </ButtonToolbar>
                        </Form>
                    </Col>
                    <Col sm='3'></Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}