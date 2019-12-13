import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Row, Col, Image } from 'react-bootstrap';
import { FaEllipsisH, FaBookmark, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const tag = [
    {
        name: 'Tech'
    },
    {
        name: 'React'
    },
    {
        name: 'JavaScript'
    },
    {
        name: 'Technology'
    },
    {
        name: 'Programming'
    },
]
export default class FooterArticle extends Component {
    render() {
        return (
            <div className="mx-auto mb-5" style={{ width: '50%' }}>
                <ButtonGroup aria-label="Basic">
                    {tag.map(item =>
                        <Button className='mx-2 btn-sm' variant="Light">{item.name}</Button>)}
                </ButtonGroup>
                <Row className='mt-5'>
                    <Col>
                    </Col>
                    <Col>
                        <div style={{ float: 'right' }} className='h4'>
                            <Link><FaTwitter style={{ color: 'black', margin: 10 }} /></Link>
                            <Link><FaFacebookSquare style={{ color: 'black', margin: 10 }} /></Link>
                            <Link><FaBookmark style={{ color: 'black', margin: 10 }} /></Link>
                            <Link><FaEllipsisH style={{ color: 'black', margin: 10 }} /></Link>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-5 mt-5 pt-5 border-top'>
                    <Col sm='12' md='12' lg='3' style={{ marginRight: -45 }}><Image style={{ width: '50%' }} src="https://miro.medium.com/fit/c/160/160/0*6IXk3RuAXJI_v-fk." roundedCircle /></Col>
                    <Col sm='12' md='6' lg='5' >
                        <Row>
                            <Col className='h6'>Thomas Egliska</Col>
                        </Row>
                        <Row><small className="ml-3">May 30, 2018 . 6 min read</small></Row>
                    </Col>
                    <Col sm='12' md='6' lg='4'><Button className="btn-sm" size='lg' block variant='outline-success'>Follow</Button></Col>
                </Row>

                <Row className='mb-5 mt-5 pb-5 border-bottom'>
                    <Col sm='12' md='12' lg='3' style={{ marginRight: -45 }}><Image style={{ width: '50%' }} src="https://miro.medium.com/fit/c/160/160/1*MotlWcSa2n6FrOx3ul89kw.png" rounded /></Col>
                    <Col sm='12' md='6' lg='5' >
                        <Row>
                            <Col className='h6'>Thomas Egliska</Col>
                            <Col></Col>
                        </Row>
                        <Row><small className="ml-3">May 30, 2018 . 6 min read</small></Row>
                    </Col>
                    <Col sm='12' md='6' lg='4'><Button className="btn-sm" variant='outline-success' size='lg' block>Follow</Button></Col>
                </Row>
                <Row>
                    <Button variant="outline-success" size="lg" block>
                        See response (58)</Button>
                </Row>
            </div>
        )
    }
}
