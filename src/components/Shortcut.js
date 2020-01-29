import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Shortcut extends Component {
  render() {
    return (
      <div className="col s12 l3">
        <Link to={this.props.href}>
          <div className="card">
            <div className="card-image">
              <img src="https://placeimg.com/340/180/tech" alt="Imagem" />
            </div>
            <div className="card-content">
              <span className="card-title">{this.props.title}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
