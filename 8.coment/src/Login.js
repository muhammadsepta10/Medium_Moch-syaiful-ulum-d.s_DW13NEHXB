import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
    return (
      <Container>
        <Card className="shadow" style={{ margin: "10%" }} body>
          <Row>
            <Col lg="3">
              <Image
                style={{ marginLeft: -20, marginTop: -20 }}
                src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png"
              ></Image>
            </Col>
            <Col lg="6">
              <div className="text-center" style={{ margin: "10%" }}>
                <h1>Welcome back.</h1>
                <p className="">
                  Sign in to get personalized story recommendations, follow
                  authors and topics you love, and interact with stories.
                </p>
                <Form style={{ marginTop: 30, marginBottom: 30 }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Password"
                      type={this.state.hidden ? "password" : "text"}
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={this.toggleShow}
                        style={{
                          textDecoration: "none",
                          fontSize: 20
                        }}
                        variant="link text-dark"
                      >
                        {this.state.hidden ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  No account?
                  <Link style={{ textDecoration: "none" }} to="/Register">
                    Sign Up
                  </Link>
                </p>
                <p>
                  To make Medium work, we log user data and share it with
                  service providers. Click “Sign In” above to accept Medium’s
                  <Link style={{ textDecoration: "none" }}>
                    Terms of Service
                  </Link>{" "}
                  &{" "}
                  <Link style={{ textDecoration: "none" }}>
                    Privacy Policy.
                  </Link>
                </p>
              </div>
            </Col>
            <Col lg="3">
              <Link
                to="/"
                className="text-dark position-absolute h4"
                style={{ textDecoration: "none", right: 0, top: -15 }}
              >
                X
              </Link>
              <Image
                style={{ marginRight: -20, marginTop: -20 }}
                src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"
              ></Image>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
