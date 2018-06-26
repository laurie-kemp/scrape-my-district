import React, { Component } from "react";
import Papa from "papaparse/papaparse.min.js";
import { updateCSV } from "../actions/list";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FileUpload from "@material-ui/icons/FileUpload";

export class FileSelector extends Component {
  state = {
    docs: null,
    data: null,
    filename: null
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
    this.setState({ filename: selectorFiles[0].name });
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
        {/* <input type="file" onChange={e => this.handleChange(e.target.files)} /> */}
        <input
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={e => this.handleChange(e.target.files)}
        />
        <label htmlFor="contained-button-file">
          {this.state.filename}
          <Button
            // variant="contained"
            component="div"
            // color="primary"
            className="upload-button"
          >
            Upload
            <FileUpload />
          </Button>
        </label>
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
