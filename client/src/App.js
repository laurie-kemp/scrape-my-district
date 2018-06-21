import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import TopBar from "./components/layout/TopBar";

// /Users/fong/code/scrape-rwapp/scrape-my-district/client/src/components
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <TopBar />
            test
          </nav>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          LoginForm
        </div>
      </Router>
    );
  }
}

export default App;
