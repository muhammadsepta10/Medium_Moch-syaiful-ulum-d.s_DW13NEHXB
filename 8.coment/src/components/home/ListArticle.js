import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';

export default class ListArticle extends Component {
	render() {
		return (
			<div>
				<Row className='mb-3'>
					<Col lg='4'><Image src={this.props.img} style={{ width: 100, height: 100 }} rounded /></Col>
					<Col lg='8' className=''>
						<p className='h5'><strong>{this.props.title}</strong></p>
						<br />
						<p style={{ marginTop: -30 }}><a>{this.props.subTitle}</a><br />
							<small >{this.props.infoDate}</small></p>
					</Col>
				</Row>
			</div>
		)
	}
}