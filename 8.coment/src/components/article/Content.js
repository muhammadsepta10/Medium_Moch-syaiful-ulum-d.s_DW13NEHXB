import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image } from "react-bootstrap";

export default class Content extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto mt-5 mb-5">
          <Image
            style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}
            src="https://miro.medium.com/max/1434/1*TheYckj9udF4qLjoJW8sjg.png"
          />
        </div>
        <div className="mx-auto mb-5" style={{ width: "50%" }}>
          <p className="h4 text-left mt-2" style={{ textIndent: 30 }}>
            Starting out with a new technology can be quite troublesome. You
            usually find yourself in a sea of tutorials and articles, followed
            by millions of personal opinions. And every single one states that
            they found the “right and perfect way.” This leaves us debating
            whether our chosen tutorial will be a waste of time or not. Before
            diving into the ocean, we must understand the underlying concepts of
            a technology. Then we need to develop a technology-based mindset. If
            we are starting to learn React, we first have to think in React.
            Only later on we can start mixing various mindsets into one. In this
            article we’ll be covering some lessons I learned regarding this
            mindset from my personal experiences with React. We’ll go over the
            days at work and nights with personal projects and even the talk I
            gave at a local JavaScript event. So let’s go!
          </p>
          <p className="h4 text-left mt-2" style={{ textIndent: 30 }}>
            React is evolving, so you must be up to date If you remember the
            initial announcement of version 16.3.0, you’ll remember how excited
            everyone was. Here are some of the changes and improvements we
            received: Official Context API createRef API forwardRef API
            StrictMode Component Lifecycle Changes The React Core team and all
            the contributors are doing a great job trying to improve the
            technology we all adore. And in version 16.4.0 we received Pointer
            Events. Further changes are surely coming, and it’s only a matter of
            time: Async Rendering, Caching, version 17.0.0 and many others not
            yet known. So if you want to be at the top, you have to be up to
            date with things that are happening in the community. Know how
            things work and why they are being developed. Learn what problems
            are being solved and how development is being made easier. It’ll
            really help you out. Don’t be afraid to split your code into smaller
            chucks React is component-based. So you should leverage this concept
            and not be afraid to split bigger pieces into smaller ones.
            Sometimes a simple component can be made of 4–5 lines of code, and
            in some cases, it is totally fine. Make it so that if a new person
            jumps in, they won’t need days to understand how everything works.
          </p>
        </div>
      </div>
    );
  }
}
