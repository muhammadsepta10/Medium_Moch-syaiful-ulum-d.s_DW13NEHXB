import React, { Component } from "react";
import PageHead from "./components/PageHead";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { IoIosHeartEmpty, IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";
import CComent from "./components/coment/CComent";
import Write from "./components/coment/Write";

export default class Coment extends Component {
  render() {
    return (
      <div>
        <PageHead />
        <div style={{ marginLeft: "25%", marginRight: "25%" }}>
          <div className="mt-5">
            <p className="h6">Showing respone for :</p>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col lg="9">
                      <p className="h6">React Component Patterns</p>
                    </Col>
                    <Col lg="3">
                      <IoIosHeartEmpty />
                      8.4K
                      <IoIosChatbubbles className="ml-2" />
                      13
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>William Whatley</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <Write />
          <CComent />
        </div>
      </div>
    );
  }
}
