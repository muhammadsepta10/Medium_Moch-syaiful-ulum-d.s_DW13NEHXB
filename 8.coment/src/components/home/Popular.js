import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Popular extends Component {
  render() {
    return (
      <dl class="row">
        <dt class="col-sm-2 h2 text-muted">{this.props.number}</dt>
        <dd class="col-sm-10 ">
          <strong className="h4">{this.props.title}</strong>
          <br />
          <small>
            {this.props.name} <br />
            {this.props.date}
          </small>
        </dd>
      </dl>
    );
  }
}
