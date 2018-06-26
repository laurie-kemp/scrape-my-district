import React, { Component } from "react";
import Papa from "papaparse/papaparse.min.js";
import { updateCSV, companiesToAdd } from "../actions/list";
import { connect } from "react-redux";
import { newCompanies } from "../../src/lib/functions";

export class FileSelector extends Component {
  state = {
    docs: null,
    data: null
  };

  handleChange = selectorFiles => {
    Papa.parse(selectorFiles[0], {
      delimiter: ";",
      escapeChar: '"""',
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  };

  updateData = result => {
    const { updateCSV, databases, csv } = this.props;
    let dbArray = [];
    if (databases) dbArray = Object.keys(databases).map(i => databases[i]);
    let csvArray = [];
    if (csv) csvArray = Object.keys(csv).map(i => csv[i]);
    // console.log(dbArray, "DB IN FILE SELECTOR");
    // console.log(csvArray, "CSV IN FILE SELECTOR");
    // console.log(this.state.data);

    const data = result.data;
    this.setState({ data });

    updateCSV(this.state.data);

    // const companies = newCompanies(databases, csv);
    // companiesToAdd(newCompanies(dbArray, csvArray));
    // if (dbArray && csvArray.length > 0) {
    //   console.log("calling new companies from file selector");
    //   console.log(dbArray, "DB ARRAY");
    //   console.log(csvArray, "CSV ARRAY");
    //   let payload;
    //   if (csvArray.length > 0) payload = newCompanies(dbArray, csvArray);
    //   console.log(payload, "THIS IS THE PAYLOAD");
    //   if (payload) this.props.companiesToAdd(payload);
    // }
    // console.log(this.state.data, "this is uploaded data");
  };

  render() {
    const { databases, csv, companiesToAdd } = this.props;
    let dbArray = [];
    if (databases) dbArray = Object.keys(databases).map(i => databases[i]);
    let csvArray = [];
    if (csv) csvArray = Object.keys(csv).map(i => csv[i]);
    if (dbArray.length > 0 && csvArray.length > 0) {
      companiesToAdd(newCompanies(dbArray, csvArray));
    }
    return (
      <div>
        <input type="file" onChange={e => this.handleChange(e.target.files)} />
      </div>
    );
  }
}

const mapStateToProps = ({ databases, csv }) => ({
  databases,
  csv,
  newCompanies
});

export default connect(
  mapStateToProps,
  { updateCSV, companiesToAdd }
)(FileSelector);
