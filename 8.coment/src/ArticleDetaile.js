import React, { Component } from "react";
import PageHead from "./components/PageHead";
import FooterArticle from "./components/article/FooterArticle";
import Author from "./components/article/Author";
import Content from "./components/article/Content";
import Releated from "./components/article/Releated";

export default class ArticleDetaile extends Component {
  constructor() {
    super();
    this.state = {
      flw: false
    };
  }
  follow = () => {
    this.setState({ flw: !this.state.flw });
  };

  render() {
    return (
      <div>
        <PageHead />
        <div>
          <Author
            follow={this.state.flw ? "unfollow" : "follow"}
            onClickFollow={this.follow}
          />
          <Content />
          <FooterArticle
            follow={this.state.flw ? "unfollow" : "follow"}
            onClickArticle={this.follow}
          />
          <Releated />
        </div>
      </div>
    );
  }
}
