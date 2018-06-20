import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

const rows = [
  {
    id: 1,
    company_name: "22tracks",
    website: "22tracks.com",
    email: "info@22tracks.com",
    city: "Amsterdam"
  },
  {
    id: 2,
    company_name: "44tips",
    website: "www.44tips.com",
    email: "eric@44tips.com",
    city: "The Hague"
  },
  {
    id: 3,
    company_name: "absrd.com",
    website: "absrd.com",
    email: "info@absrd.com",
    city: "Utrecht"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
