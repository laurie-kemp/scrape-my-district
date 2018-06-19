import React from "react";
import ReactDOM from "react-dom";
import HotTable from "react-handsontable";
import PropTypes from "prop-types";
//import { rows } from "../lib";

export default class ListGrid extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = [
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
  }

  render() {
    return (
      <div id="example-component">
        <HotTable
          root="hot"
          data={this.handsontableData}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          height="300"
          stretchH="all"
        />
      </div>
    );
  }
}
