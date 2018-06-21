import React, { Component } from 'react';
import Papa from 'papaparse/papaparse.min.js'

export default class FileSelector extends Component {

  state = {
    docs: null,
    data: null
  }

  handleChange = (selectorFiles) => {
    Papa.parse(selectorFiles[0], {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    })
  }

  updateData = (result) => {
    const data = result.data;
    this.setState({ data })
  }

  render () {

    console.log(this.state.data)
    return (
      <div>
        <input type="file" onChange={ (e) => this.handleChange(e.target.files) } />
      </div>
    )
  }
}