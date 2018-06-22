import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import List from "./components/List"
import Reports from "./components/reports/Reportspage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/list" component={List} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          {/* Laurie" lastName="Kemp" email="laurie.kemp@scaleupnation.com"
          password="Laurie999" */}
        </div>
      </Router>
    );
  }
}

export default App;
