import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageHead() {
  return (
    <Navbar bg="light" className="shadow sticky-top" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={require("./../medium.png")} style={{ width: 50 }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
          <Col></Col>
        </Row>
        <a href="">
          <Image
            src="https://miro.medium.com/max/1434/1*TheYckj9udF4qLjoJW8sjg.png"
            style={{ width: 40, height: 40 }}
            roundedCircle
          />
        </a>
      </Container>
    </Navbar>
  );
}
