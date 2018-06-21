import React from "react";
import { connect } from "react-redux";
import HotTable from "react-handsontable";
import { changeCell, fetchAllData, updateData } from "../actions/list";

export class List extends React.Component {
  constructor(props) {
    super(props);
    // this.handsontableData = [
    //   ["Comany Name", "Website", "Email", "City"],
    //   [null, null, null, null]
    //   // ["22tracks", "22tracks.com", "info@22tracks.com", "Amsterdam"],
    //   // ["44tips", "www.44tips.com", "eric@44tips.com", "The Hague"],
    //   // ["absrd", "absrd.com", "info@absrd.com", "Utrecht"]
    // ];
  }

  componentWillMount() {
    this.props.fetchAllData();
  }

  render() {
    const { listRed, databases } = this.props;
    //this.handsontableData = listRed
    let dbArray = [];
    if (databases) dbArray = Object.keys(databases).map(i => databases[i]);
    console.log(dbArray, "DATABASE ARRAY");
    let columnNames = [];
    if (dbArray[0]) columnNames = Object.keys(dbArray[0]).map(i => i);
    console.log(columnNames, "COLUMNS");
    let data = [];
    let values = [];
    if (dbArray) {
      values = dbArray.map(entry => {
        return Object.values(entry).map(i => i);
      });
      console.log(values, "VALUES");
      // let entry = [];
      // if (dbArray[0]) entry = Object.keys(dbArray[0]).map(i => dbArray[0][i]);
      // console.log(entry, "ENTRY");
      //let data = [];
      const newNames = columnNames.map(name => name.replace("_", " "))
      data.push(newNames);
      values.map(entry => data.push(entry));
    }
    console.log(data, "DATA");

    return (
      <div id="example-component">
        <HotTable
          root="hot"
          settings={{
            data: data,
            colHeaders: true,
            rowHeaders: true,
            onAfterChange: (listRed, source) => {
              if (source !== "loadData") {
                let payload = {
                  id: listRed.length,
                  row: listRed[0][0],
                  column: listRed[0][1],
                  oldValue: listRed[0][2],
                  newValue: listRed[0][3]
                };
                const name = columnNames[payload.column];
                const value = payload.newValue;
                const newPayload = { [name]: value };
                this.props.changeCell(payload.row + 1, newPayload);
                console.log(payload.row + 1, "ID");
                console.log(newPayload, "Payload");
                // store.dispatch({
                //   id: store.getState().changes.length,
                //   type: 'change',
                //   row: changes[0][0],
                //   column: changes[0][1],
                //   oldValue: changes[0][2],
                //   newValue: changes[0][3]
                // });
              }
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ listRed, databases }) => ({
  listRed: fetchAllData(),
  databases
});

export default connect(
  mapStateToProps,
  { changeCell, fetchAllData }
)(List);
