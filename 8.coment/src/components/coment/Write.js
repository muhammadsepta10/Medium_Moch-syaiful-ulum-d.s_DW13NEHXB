import React, { Component } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Write extends Component {
  render() {
    return (
      <div className="my-4">
        <p className="h6">Responses</p>
        <Card className="shadow-sm">
          <Card.Body>
            <Row className="m-2">
              <Col lg="1">
                <Image
                  src="https://miro.medium.com/fit/c/96/96/1*KXfIi4glAyVbZFlBX3q0YQ.jpeg"
                  roundedCircle
                  style={{ width: 50 }}
                />
              </Col>
              <Col lg="11">
                <p className="ml-3" style={{ marginTop: "2%" }}>
                  Roy Hendrawan
                </p>
              </Col>
            </Row>
            <textarea
              style={{ height: 150, border: "none", width: "100%" }}
              placeholder="Write Reasponse Here!!"
            ></textarea>
            <div>
              <Button variant="outline-success m-2">Publish</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
