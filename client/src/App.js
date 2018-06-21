import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import List from "./components/List"
// /Users/fong/code/scrape-rwapp/scrape-my-district/client/src/components
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route exact path="/list" component={List} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          {/* Laurie" lastName="Kemp" email="laurie.kemp@scaleupnation.com"
          password="Laurie999" */}
        </div>
      </Router>
    );
  }
}

export default App;
