import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import LogInPage from "./pages/LogInPage";
import Izvjestaj from "./pages/Izvjestaj";
import Rezervacije from "./pages/Rezervacije";
import helpPage from "./pages/helpPage";
import Header from "./pages/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {window.localStorage.getItem("loggedIn") && <Header />}
        <Switch>
          <Route exact path="/" component={LogInPage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Izvjestaj} />
          <Route path="/page5" component={Rezervacije} />
          <Route path="/page6" component={helpPage} />
        </Switch>
      </div>
    );
  }
}
