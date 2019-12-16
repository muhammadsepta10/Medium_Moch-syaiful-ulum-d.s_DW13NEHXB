import React, { Component } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default class CComent extends Component {
  constructor() {
    super();

    this.state = {
      like: false,
      bookmark: false
    };
  }

  clickLike = () => {
    this.setState({ like: !this.state.like });
  };
  clickBookmark = () => {
    this.setState({ bookmark: !this.state.bookmark });
  };
  render() {
    return (
      <div>
        <Card className="shadow-sm my-4">
          <Card.Body>
            <p className="text-secondary" style={{ fontSize: 15 }}>
              Applause from dhenraj Acharya (author)
            </p>
            <Row className="">
              <Col lg="1" className="">
                <Image
                  src="https://cdn-images-1.medium.com/fit/c/36/36/0*-ZliVbanMYNsApZ-.jpg"
                  roundedCircle
                  style={{ width: 40 }}
                />
              </Col>
              <Col lg="9">
                <Row>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <p className="text-success ml-3">Lusi Ambrada</p>
                  </Link>
                </Row>
                <Row>
                  <p
                    className="text-secondary ml-3"
                    style={{ fontSize: 11, marginTop: -15 }}
                  >
                    May 29 . 1 min read
                  </p>
                </Row>
              </Col>
            </Row>
            <Row>
              <p className="text-secondary mx-auto" style={{ width: "80%" }}>
                Great article! Nice to get things started with Redux and
                understand the main concept behind it. Thank you for sharing.
                One small suggestion: the lodash dependency may not be needed at
                all and could save you some bytes overall now that we have ES6.
                where you have: let newState = _.cloneDeep; could turn into: //
                this should give you a brand new object with the state’s data
                let newState = ; Do you think that would be useful? :Thank you.
              </p>
            </Row>
            <Row>
              <Col lg="8">
                <Button onClick={this.clickLike} variant="link">
                  {this.state.like ? (
                    <FaHeart style={{ fontSize: 23 }} />
                  ) : (
                    <FaRegHeart style={{ fontSize: 23 }} />
                  )}
                </Button>
              </Col>
              <Col lg="4" className="d-flex">
                <p className="text-secondary">2 responses</p>
                <Button onClick={this.clickBookmark} variant="link">
                  {this.state.bookmark ? (
                    <FaBookmark style={{ fontSize: 23 }} />
                  ) : (
                    <FaRegBookmark style={{ fontSize: 23 }} />
                  )}
                </Button>
                <Button variant="link">
                  <MdKeyboardArrowDown style={{ fontSize: 23 }} />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
