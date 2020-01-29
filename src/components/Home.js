import React, { Component } from "react";
import { Shortcut } from "./Shortcut";

export class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 shortcuts">
          <Shortcut title="Check In" href="checkin" />
        </div>
      </div>
    );
  }
}
