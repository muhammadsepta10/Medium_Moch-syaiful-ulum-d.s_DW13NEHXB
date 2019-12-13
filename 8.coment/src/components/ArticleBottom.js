import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ArticleBottom extends Component {
    render() {
        return (
            <Row className='mt-5'>
                <Col sm='8'>
                    <p className='h5'><small>{this.props.category} <em>{this.props.topic}</em></small>
                        <br />
                        <strong><Link to={this.props.url}>{this.props.title}</Link></strong>
                    </p>
                    <p><Link to={this.props.url}>{this.props.content}</Link>
                    </p>
                    <p><Link>{this.props.name}</Link><br />
                        <small>{this.props.date}</small></p>
                </Col>
                <Col sm='4'>
                    <Link to={this.props.url}><Image src={this.props.img} style={{ width: 150, height: 150 }} /></Link>
                </Col>
            </Row>
        )
    }
}
