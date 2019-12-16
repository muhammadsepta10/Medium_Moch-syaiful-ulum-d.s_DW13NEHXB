import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';

export default class ArticleBottom extends Component {
    render() {
        return (
            <Row className='mt-5'>
                <Col sm='8'>
                    <a className='h5'><small>{this.props.category} <em>{this.props.topic}</em></small>
                        <br />
                        <strong>{this.props.title}</strong>
                    </a>
                    <p>{this.props.content}
                    </p>
                    <p><a>{this.props.name}</a><br />
                        <small>{this.props.date}</small></p>
                </Col>
                <Col sm='4'>
                    <a href=''><Image src={this.props.img} style={{ width: 150, height: 150 }} /></a>
                </Col>
            </Row>
        )
    }
}
