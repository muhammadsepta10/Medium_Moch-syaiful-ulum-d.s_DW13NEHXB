import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col, Image, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const article = [
    {
        id: 1,
        title: 'this title',
        content: 'lorem ipsum dolor sit amet',
        name: 'jhon',
        date: 'dec 11',
        min: '5 min read'
    },
    {
        id: 2,
        title: 'this title',
        content: 'lorem ipsum dolor sit amet',
        name: 'jhon',
        date: 'dec 11',
        min: '5 min read'
    },
    {
        id: 3,
        title: 'this title',
        content: 'lorem ipsum dolor sit amet',
        name: 'jhon',
        date: 'dec 11',
        min: '5 min read'
    },
    {
        id: 4,
        title: 'this title',
        content: 'lorem ipsum dolor sit amet',
        name: 'jhon',
        date: 'dec 11',
        min: '5 min read'
    },
]

export default class CategoryPage extends Component {
    render() {
        return (
            <Container className="mt-5 mb-5">
                <Row className="mx-auto">
                    <Col sm='3' ><Image src={require('./../one_zero.png')} style={{ width: 200 }}></Image></Col>
                    <Col sm='5' ><p className='h5' style={{ width: 350, fontFamily: 'sans-serif' }}><div style={{ color: '#6A0BFF' }}>The fron lines of the fitire.</div> A Medium publication about tech and science</p></Col>
                    <Col sm='4' ><Button className='float-right' variant='outline-primary' >Follow</Button></Col>
                </Row>

                {/*Banner*/}
                <Row className="bg-primary mt-5">
                    <Col sm='12' lg='8' md='8'><Image className='mx-auto' style={{ height: 300, width: 700 }} src={require('./../default.jpg')} ></Image></Col>
                    <Col className='bg-primary' style={{ backgroundSize: 'auto' }} sm='12' lg='4' md='4' style={{ margin: 'auto' }} >
                        <div className="text-center" >
                            <p className='h3' style={{ fontFamily: 'sans-serif', color: 'white', }}>Lorem Ipsum dolor sit amet</p>
                            <p className='h5' style={{ fontFamily: 'sans-serif', color: 'white', }}>Lorem Ipsum dolor sit amet</p><br />
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: '#D3F832', }}>ian Frisc</p>
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: 'white', }}>Dec . 24 min read</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm='12' lg='4' md='4' style={{ margin: 'auto' }} >
                        <div className="text-center" >
                            <p className='h3' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet</p>
                            <p className='h5' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet</p><br />
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: '#6A0BFF' }}>ian Frisc</p>
                            <p className='h6' style={{ fontFamily: 'sans-serif' }}>Dec . 24 min read</p>
                        </div>
                    </Col>
                    <Col sm='12' lg='8' md='8'><Image className='mx-auto' style={{ height: 300, width: 700 }} src={require('./../default.jpg')} ></Image></Col>
                </Row>
                <Row className="bg-primary mt-5">
                    <Col sm='12' lg='8' md='8'><Image className='mx-auto' style={{ height: 300, width: 700 }} src={require('./../default.jpg')} ></Image></Col>
                    <Col className='bg-primary' style={{ backgroundSize: 'auto' }} sm='12' lg='4' md='4' style={{ margin: 'auto' }} >
                        <div className="text-center" >
                            <p className='h3' style={{ fontFamily: 'sans-serif', color: 'white', }}>Lorem Ipsum dolor sit amet</p>
                            <p className='h5' style={{ fontFamily: 'sans-serif', color: 'white', }}>Lorem Ipsum dolor sit amet</p><br />
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: '#D3F832', }}>ian Frisc</p>
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: 'white', }}>Dec . 24 min read</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm='12' lg='4' md='4' style={{ margin: 'auto' }} >
                        <div className="text-center" >
                            <p className='h3' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet</p>
                            <p className='h5' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet</p><br />
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: '#6A0BFF' }}>ian Frisc</p>
                            <p className='h6' style={{ fontFamily: 'sans-serif' }}>Dec . 24 min read</p>
                        </div>
                    </Col>
                    <Col sm='12' lg='8' md='8'><Image className='mx-auto' style={{ height: 300, width: 700 }} src={require('./../default.jpg')} ></Image></Col>
                </Row>

                {/* Info*/}
                <Row className="mt-5" style={{ backgroundColor: '#DAF832' }}>
                    <Col sm='12' lg='4' md='4' className="my-5">
                        <Container className="text-left" style={{ marginLeft: '40%' }} >
                            <p className='h1 blockquote' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet<p className="blockquote-footer">Lorem ipsum</p></p>
                            <p className='h5' style={{ fontFamily: 'sans-serif' }}>Lorem Ipsum dolor sit amet</p><br />
                            <p className='h6' style={{ fontFamily: 'sans-serif', color: '#6A0BFF' }}>ian Frisc</p>
                            <p className='h6' style={{ fontFamily: 'sans-serif' }}>Dec . 24 min read</p>
                        </Container>
                    </Col>
                </Row>
                <div className="border-top border-info mt-5 mx-auto" style={{ marginBottom: -60, width: "50%" }}></div>

                {/*Article*/}
                {article.map(item =>
                    <Row className="border-bottom border-info mt-5 mx-auto" style={{ width: "50%" }}>

                        <Col sm='8' className='mt-5 mb-5'>
                            <a className='h5'>{item.title}</a> <br />
                            <a className="h6">{item.content}</a> <br /> <br />
                            <a style={{ color: "#950BFF" }}>{item.name}</a> <br />
                            <a><small>{item.date}</small></a><a><small>{item.min}</small></a>
                        </Col>

                        <Col sm='4' className='mt-5 mb-5'>
                            <Image className='mx-auto' style={{ width: 200, height: 200 }} src={require('./../default.jpg')} ></Image>
                        </Col>
                    </Row>
                )}
            </Container >

        )
    }
}
