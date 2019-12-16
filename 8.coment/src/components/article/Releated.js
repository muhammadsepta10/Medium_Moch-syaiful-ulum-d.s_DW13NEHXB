import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const releated = [
  {
    id: 1,
    img: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png",
    title: "Why you should use REACT native to program app?",
    icon: "https://miro.medium.com/fit/c/40/40/0*5x6EA_ECq_Yqc1Q5.",
    name: "christina cheesemen",
    date: "jun 8,2018",
    read: "5 min read"
  },
  {
    id: 2,
    img: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png",
    title: "Why you should use REACT native to program app?",
    icon: "https://miro.medium.com/fit/c/40/40/0*5x6EA_ECq_Yqc1Q5.",
    name: "christina cheesemen",
    date: "jun 8,2018",
    read: "5 min read"
  },
  {
    id: 3,
    img: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png",
    title: "Why you should use REACT native to program app?",
    icon: "https://miro.medium.com/fit/c/40/40/0*5x6EA_ECq_Yqc1Q5.",
    name: "christina cheesemen",
    date: "jun 8,2018",
    read: "5 min read"
  }
];
const footer = [
  {
    id: 1,
    title: "Discover Medium",
    content:
      "Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch"
  },
  {
    id: 2,
    title: "Make Meddium yours",
    content:
      "Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore"
  },
  {
    id: 1,
    title: "Become a member",
    content:
      "Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. Upgrade"
  }
];
export default class Releated extends Component {
  render() {
    return (
      <div className="mt-5">
        <Container>
          <p className="h5">More Article</p>
          <hr />
          <Row>
            {releated.map((item, i) => (
              <Col lg="4">
                <p className="text-secondary">Releated read</p>
                <Image
                  src={item.img}
                  style={{ width: "90%" }}
                  className="m-2"
                />
                <p className="h3">{item.title}</p>
                <Row>
                  <Col lg="2">
                    <Image
                      src={item.icon}
                      roundedCircle
                      style={{ width: 40 }}
                    />
                  </Col>
                  <Col lg="5">
                    <Row>
                      <p style={{ fontSize: 15 }}>{item.name}</p>
                    </Row>
                    <Row>
                      <p
                        className="text-secondary"
                        style={{ marginTop: -17, fontSize: 12 }}
                      >
                        {item.date}.{item.read}
                      </p>
                    </Row>
                  </Col>
                  <Col lg="5">
                    <Button key={i} id={i} variant="link">
                      <FaHeart style={{ fontSize: 15 }} />
                    </Button>
                    <Button variant="link">
                      <FaBookmark style={{ fontSize: 15 }} />
                    </Button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="mt-5 bg-dark">
          <Container>
            <Row className="pt-5 pb-2" style={{ width: "100%" }}>
              {footer.map((item, i) => (
                <Col lg="4" key={i} className=" text-left">
                  <Row className=" ml-1">
                    <p className="text-white h3">{item.title}</p>
                  </Row>
                  <Row className="ml-1">
                    <p className="text-secondary">{item.content}</p>
                  </Row>
                </Col>
              ))}
              <Row className="mt-5 mb-5" style={{ width: "100%" }}>
                <Col lg="6">
                  <p className="ml-3 text-white h3">MEDIUM</p>
                </Col>
                <Col lg="6">
                  <Row className="float-right">
                    <Col>
                      <Link
                        className=" text-secondary"
                        style={{ textDecoration: "none" }}
                      >
                        About
                      </Link>
                    </Col>
                    <Col>
                      <Link
                        className=" text-secondary"
                        style={{ textDecoration: "none" }}
                      >
                        Help
                      </Link>
                    </Col>
                    <Col>
                      <Link
                        className=" text-secondary"
                        style={{ textDecoration: "none" }}
                      >
                        Legal
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
