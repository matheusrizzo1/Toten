import React, { Component } from "react";
import "./site.css";
import { Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Checkin } from "./components/Checkin";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    var mousetimeout;
    var screensaver_active = false;
    var idletime = 60;

    mousetimeout = setTimeout(show_screensaver, 1000 * idletime); // 60 secs

    $(document).click(function() {
      clearTimeout(mousetimeout);
      if (screensaver_active) {
        stop_screensaver();
      }
      mousetimeout = setTimeout(show_screensaver, 1000 * idletime); // 60 secs
    });

    $(document).mousemove(function() {
      clearTimeout(mousetimeout);
      if (screensaver_active) {
        stop_screensaver();
      }
      mousetimeout = setTimeout(show_screensaver, 1000 * idletime); // 60 secs
    });

    function show_screensaver() {
      $("#screensaver").fadeIn("slow");
      screensaver_active = true;
    }

    function stop_screensaver() {
      $("#screensaver").fadeOut();
      screensaver_active = false;
    }

    const ele = document.getElementById("loader");
    if (ele) {
      // fade out
      ele.classList.add("fade-out");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 1000);
    }
  }

  render() {
    return (
      <div className="container-fluid animate-bottom">
        <p className="center-align">
          <Link to="/">
            <img
              src="images/br2.png"
              className="top-img"
              alt="Logo Brasil Risk"
            />
          </Link>
        </p>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/checkin" component={Checkin} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
