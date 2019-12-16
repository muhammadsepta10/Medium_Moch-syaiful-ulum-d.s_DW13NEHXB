import React, { Component } from "react";
import {
  Navbar,
  Container,
  Button,
  Row,
  Col,
  Image,
  Dropdown,
  ButtonGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";

export default class AppHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Row className="mx-auto" style={{ width: "100%" }}>
              <Col className="">
                <Navbar.Brand>
                  <Link
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    MEDIUM
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col className="">
                <input
                  type="search"
                  class="search-box float-right mt-1"
                  style={{ marginRight: -40 }}
                  placeholder="Search"
                />
              </Col>
              <Col lg="1" className="">
                <IoIosNotificationsOutline className="float-right mt-1 h3" />
              </Col>
              <Col lg="1" className="" style={{ marginRight: -30 }}>
                <Link
                  className="float-right"
                  to="/Register"
                  style={{ marginLeft: "50%" }}
                >
                  <Button>Join</Button>
                </Link>
              </Col>
              <Col lg="1" className="">
                <Dropdown
                  className=""
                  style={{ marginTop: -7 }}
                  as={ButtonGroup}
                >
                  <Dropdown.Toggle
                    split
                    variant="link"
                    id="dropdown-split-basic"
                  >
                    <Image
                      src={require("./../../default.jpg")}
                      style={{ width: 40, height: 40 }}
                      roundedCircle
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ width: 50 }}>
                    <Dropdown.Item>
                      <Link to="/WriteStories">New story</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Stories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Series</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Medium Partner Program
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Bookmarks</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Publlication
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Costumize your interests
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
