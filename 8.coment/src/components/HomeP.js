import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';
import ListArticle from './ListArticle';
import Popular from './Popular';
import ArticleBottom from './ArticleBottom';
const articles = [
    {
        id: 1,
        title: 'Sample Title 1',
        subTitle: 'Lorem ipsum dolor sit amet amet',
        infoDate: '10 Des - 6min read',
        img: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
    },
    {
        id: 2,
        title: 'Sample Title 2',
        subTitle: 'Lorem ipsum dolor sit amet amet',
        infoDate: '10 Des - 6min read',
        img: 'https://miro.medium.com/max/1024/1*uOvSY5yb5Fx-rUtcvW2whQ.png'
    },
    {
        id: 3,
        title: 'Sample Title 3',
        subTitle: 'Lorem ipsum dolor sit amet amet',
        infoDate: '10 Des - 6min read',
        img: 'https://miro.medium.com/max/1100/1*aBObP5jRncclNJk2Z9RUYg.png'
    },
    {
        id: 4,
        title: 'Sample Title 4',
        subTitle: 'Lorem ipsum dolor sit amet amet',
        infoDate: '10 Des - 6min read',
        img: 'https://miro.medium.com/max/4201/1*jNBqB0_9_fIUd451abvrjA.jpeg'
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
        img: "https://miro.medium.com/max/1920/1*sVjlf2VlXRhi6zglSUyVoQ.png",
        url: '/Article'

    },
    {
        id: 2,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/3264/1*t5fyXt0P5-RYYPIYWafE1A.jpeg",
        url: '/Article'

    },
    {
        id: 3,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/1354/1*2ns2l6w5Jn8zrnWoDXRVng.png",
        url: '/Article'

    },
    {
        id: 4,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/2500/1*RHyp8nsc9Wj1cpDWj1DPlg.jpeg",
        url: '/Article'

    },
    {
        id: 5,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/800/1*_pJWY5BIF6TTTfIEKOcfug.gif",
        url: '/Article'

    },
    {
        id: 6,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/699/1*pMUHe42kIC3wNbdfu8oeFw.png",
        url: '/Article'

    },
    {
        id: 7,
        category: 'Productivity',
        topic: 'Popula Topic',
        title: '10 Bad Habits of Unsuccessful People',
        content: 'Instead of looking for traits to emulate, focus on ones to avoid Darius Foroux in Forge',
        name: 'jhon',
        date: 'ul 9 . 5 min read',
        img: "https://miro.medium.com/max/5568/1*wrF30OHMbyFYRbXr0S0Sng.jpeg",
        url: '/Article'

    }
]

export default function HomeP() {
    return (
        <div>
            <body>

                {/* BANNER */}
                {/* Left Top Articel */}
                <div style={{ marginRight: 100, marginLeft: 100 }}>
                    <Row >
                        <Col>
                            <a href=''><Image src='https://miro.medium.com/max/5472/1*8yz3hkO3ynHV2qYGARynJg.jpeg' style={{ width: 400, height: 150 }} /></a>
                            <div className='mt-3 text-left' style={{ marginLeft: 100 }}>
                                <a className='h3 text-dark text-decoration-none' href=''>How I structure my React Apps</a>
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
                                    infoDate={item.infoDate}
                                    img={item.img} />
                            )}
                        </Col>
                        <Col>
                            <Col>
                                <a href=''><Image src='https://miro.medium.com/max/590/1*cBFSQ9Ytv_D0jwGtpuL5WA.png' style={{ width: 250, height: 150, float: 'right', marginTop: -17 }} /></a>
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
                                    url={item.url}
                                />)}
                        </Col>
                    </Row>
                </div>
            </body>
        </div>
    )
}
