import React from "react";
import { connect } from 'react-redux'
import HotTable from "react-handsontable";
import { changeCell } from "../actions/list";

// export default class ListGrid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handsontableData = [
//       {
//         id: 1,
//         company_name: "22tracks",
//         website: "22tracks.com",
//         email: "info@22tracks.com",
//         city: "Amsterdam"
//       },
//       {
//         id: 2,
//         company_name: "44tips",
//         website: "www.44tips.com",
//         email: "eric@44tips.com",
//         city: "The Hague"
//       },
//       {
//         id: 3,
//         company_name: "absrd.com",
//         website: "absrd.com",
//         email: "info@absrd.com",
//         city: "Utrecht"
//       }
//     ];
//   }

//   render() {
//     return (
//       <div id="example-component">
//         <HotTable
//           root="hot"
//           data={this.handsontableData}
//           colHeaders={true}
//           rowHeaders={true}
//           width="600"
//           height="300"
//           stretchH="all"
//         />
//       </div>
//     );
//   }
// }


export class List extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
  }

  render() {
    const {listRed} = this.props
    return (
      <div id="example-component">
        <HotTable root="hot" settings={{
            data: this.handsontableData,
            colHeaders: true,
            rowHeaders: true, 
            onAfterChange: (listRed, source) => {
              if (source !== 'loadData') {
                let payload={
                  id: listRed.length,
                  row: listRed[0][0],
                  column: listRed[0][1],
                  oldValue: listRed[0][2],
                  newValue: listRed[0][3]
                }
                this.props.changeCell(payload)
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
          }}/>
      </div>
    );
  }
}

const mapStateToProps = ({ listRed}) => ({
  listRed
});

export default connect(mapStateToProps, {changeCell})(List)