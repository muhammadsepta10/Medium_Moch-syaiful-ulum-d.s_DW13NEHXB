import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col, Image, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ListArticle from './components/ListArticle';
import Popular from './components/Popular';
import ArticleBottom from './components/ArticleBottom';
import Register from './components/Register';
import Login from './components/Login';
import { StickyContainer, Sticky } from 'react-sticky';


const dataMenus = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Profile" }
]
// 
const articles = [
  {
    id: 1,
    title: 'Sample Title 1',
    subTitle: 'Lorem ipsum dolor sit amet amet',
    infoDate: '10 Des - 6min read',
    img: './default.jpg'
  },
  {
    id: 2,
    title: 'Sample Title 2',
    subTitle: 'Lorem ipsum dolor sit amet amet',
    infoDate: '10 Des - 6min read',
    img: './default.jpg'
  },
  {
    id: 3,
    title: 'Sample Title 3',
    subTitle: 'Lorem ipsum dolor sit amet amet',
    infoDate: '10 Des - 6min read',
    img: './default.jpg'
  },
  {
    id: 4,
    title: 'Sample Title 4',
    subTitle: 'Lorem ipsum dolor sit amet amet',
    infoDate: '10 Des - 6min read',
    img: './default.jpg'
  }
]
// 
const populars = [
  {
    id: 1,
    number: '01',
    title: 'A description list is perfect for defining terms.',
    name: 'Darius Faroux in Forge',
    date: 'Nov 26 . 6 min read'
  },
  {
    id: 2,
    number: '02',
    title: 'A description list is perfect for defining terms.',
    name: 'Darius Faroux in Forge',
    date: 'Nov 26 . 6 min read'
  },
  {
    id: 3,
    number: '03',
    title: 'A description list is perfect for defining terms.',
    name: 'Darius Faroux in Forge',
    date: 'Nov 26 . 6 min read'
  },
  {
    id: 4,
    number: '04',
    title: 'A description list is perfect for defining terms.',
    name: 'Darius Faroux in Forge',
    date: 'Nov 26 . 6 min read'
  },
]
// 
const articleBottoms = [
  {
    id: 1,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 2,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 3,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 4,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 5,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 6,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  },
  {
    id: 7,
    category: 'Productivity',
    topic: 'Popula Topic',
    title: '10 Bad Habits of Unsuccessful People',
    content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
    name: 'jhon',
    date: 'ul 9 . 5 min read',
    img: "{require('./../default.jpg')}",

  }
]
// 
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modallgShow, setModallgShow] = React.useState(false);
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand href="#home">MEDIUM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Row>
              <Col>
                <ButtonToolbar style={{ clear: 'both' }}>
                  <Button variant="outline-success" onClick={() => setModalShow(true)}>
                    JOIN</Button>
                  <Register
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </Col>
              <Col>
                <ButtonToolbar style={{ clear: 'both' }}>
                  <Button variant="outline-success" onClick={() => setModallgShow(true)}>
                    LOGIN</Button>
                  <Login
                    show={modallgShow}
                    onHide={() => setModallgShow(false)}
                  />
                </ButtonToolbar>
              </Col>
            </Row>
            <a href=''><Image src={require('./default.jpg')} style={{ width: 40, height: 40 }} roundedCircle /></a>
          </Container>
        </Navbar>
        <StickyContainer>
          <Sticky>
            {({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
                <header style={style}>
                  <Navbar bg="light" expand="lg" className='pb-4 mb-2'>
                    <Nav className="mx-auto" >

                      {dataMenus.map(item =>
                        <Nav.Link href="#home">{item.name}</Nav.Link>
                      )}
                    </Nav>
                  </Navbar>
                </header>
              )}
          </Sticky>
        </StickyContainer>
      </header>
      <body>

        {/* BANNER */}
        {/* Left Top Articel */}
        <div style={{ marginRight: 100, marginLeft: 100 }}>
          <Row >
            <Col>
              <a href=''><Image src={require('./default.jpg')} style={{ width: 400, height: 150 }} /></a>
              <div className='mt-3 text-left' style={{ marginLeft: 100 }}>
                <a className='h3 text-dark text-decoration-none' href=''>Lorem ipsum dolor</a>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vitae erat scelerisque pretium.</p>
                <br />
                <p><a>Darius Faroux in Forge</a><br />
                  <small>jul 9 . 5 min read</small></p>
              </div>
            </Col>

            {/* Top Center Banner */}
            <Col>
              {articles.map(item =>
                <ListArticle
                  title={item.title}
                  subTitle={item.subTitle}
                  infoDate={item.infoDate} />
              )}
            </Col>
            <Col>
              <Col>
                <a href=''><Image src={require('./default.jpg')} style={{ width: 250, height: 150, float: 'right', marginTop: -17 }} /></a>
                <div className='mt-3 text-left' style={{ marginLeft: 65 }}>
                  <a className='h3 text-dark text-decoration-none' href=''>Lorem ipsum dolor</a>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus vitae erat scelerisque pretium.</p>
                  <br />
                  <p style={{ marginTop: -30 }}><a>Darius Faroux in Forge</a><br />
                    <small >jul 9 . 5 min read</small></p>
                  <div>
                    <a href=''>SEE ALL FEATURED ></a>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='sticky-top' lg='4'>
              <p className='h4 mt-4'>Popular on Medium</p>
              <hr />
              <div>
                {populars.map(item =>
                  <Popular
                    number={item.number}
                    title={item.title}
                    name={item.name}
                    date={item.date}
                  />)}
              </div>
            </Col>
            <Col lg='8'>
              {articleBottoms.map(item =>
                <ArticleBottom
                  category={item.category}
                  topic={item.topic}
                  content={item.content}
                  name={item.name}
                  date={item.date}
                  img={item.img}
                />)}
            </Col>
          </Row>
        </div>
      </body>
    </div >
  );
}

export default App;
