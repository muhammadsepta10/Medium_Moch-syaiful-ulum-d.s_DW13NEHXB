import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image, Button } from "react-bootstrap";

export default class Author extends Component {
  render() {
    return (
      <header className="mt-5 mx-auto" style={{ width: "50%" }}>
        <p className="h1">
          The most important lessons I’ve learned after a year of working with
          React
        </p>
        <div className="mt-4">
          <Row>
            <Col sm="12" md="12" lg="2" style={{ marginRight: -45 }}>
              <Image
                src="https://miro.medium.com/fit/c/48/48/0*6IXk3RuAXJI_v-fk."
                roundedCircle
              />
            </Col>
            <Col sm="12" md="6" lg="5">
              <Row>
                <Col>Thomas Egliska</Col>
              </Row>
              <Row>
                <small className="ml-3">May 30, 2018 . 6 min read</small>
              </Row>
            </Col>
            <Col sm="12" md="6" lg="5">
              <Button
                className="btn-sm"
                variant="outline-success"
                size="lg"
                block
                onClick={() => this.props.onClickFollow()}
              >
                {this.props.follow}
              </Button>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}
