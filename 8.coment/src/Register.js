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
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

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
                <h1>Join Medium</h1>
                <p className="">
                  Create an account to receive great stories in your inbox,
                  personalize your homepage, and follow authors and topics that
                  you love.
                </p>
                <Form style={{ marginTop: 30, marginBottom: 30 }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="username"
                      placeholder="Enter username"
                    />
                  </Form.Group>
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
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/Login">
                    Sign in
                  </Link>
                </p>
                <p>
                  To make Medium work, we log user data and share it with
                  service providers. Click “Sign Up” above to accept Medium’s
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
