import React, { Component } from "react";
import Papa from "papaparse/papaparse.min.js";
import { updateCSV } from "../actions/list";
import { connect } from "react-redux";

export class FileSelector extends Component {
  state = {
    docs: null,
    data: null
  };

  handleChange = selectorFiles => {
    Papa.parse(selectorFiles[0], {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  };

  updateData = result => {
    const { updateCSV } = this.props;
    const data = result.data;
    this.setState({ data });
    updateCSV(this.state.data);
    console.log(this.state.data, "this is uploaded data");
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <input type="file" onChange={e => this.handleChange(e.target.files)} />
      </div>
    );
  }
}
// const mapStateToProps = ({ listRed, databases }) => ({
//   listRed: fetchAllData(),
//   databases
// });

export default connect(
  null,
  { updateCSV }
)(FileSelector);
