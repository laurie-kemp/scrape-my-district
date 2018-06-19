// import { Grid, Input, Select } from "react-spreadsheet-grid";
// import React from "react";
// import PropTypes from "prop-types";
// import { rows } from "../lib";

// // const rows = [
// //   {
// //     id: 1,
// //     company_name: "22tracks",
// //     website: "22tracks.com",
// //     email: "info@22tracks.com",
// //     city: "Amsterdam"
// //   },
// //   {
// //     id: 2,
// //     company_name: "44tips",
// //     website: "www.44tips.com",
// //     email: "eric@44tips.com",
// //     city: "The Hague"
// //   },
// //   {
// //     id: 3,
// //     company_name: "absrd.com",
// //     website: "absrd.com",
// //     email: "info@absrd.com",
// //     city: "Utrecht"
// //   }
// // ];

// class ListGrid extends React.Component {
//   state = {
//     rows
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <Grid
//         columns={[
//           {
//             title: () => "Name",
//             value: (row, { focus }) => {
//               return <Input value={row.company_name} focus={focus} />;
//             }
//           },
//           {
//             title: () => "website",
//             value: (row, { focus }) => {
//               return <Input value={row.website} focus={focus} />;
//             }
//           }
//         ]}
//         getRowKey={row => row.id}
//       />
//     );
//   }
// }
// export default ListGrid;

import { Grid, Input, Select } from "react-spreadsheet-grid";
// import AwesomeAutocomplete from "awesome-autocomplete";
import { rows } from "../lib";
import React from "react";
import PropTypes from "prop-types";

export default class ListGrid extends React.Component {
  constructor(props) {
    super(props);

    // Rows are stored in the state.
    this.state = {
      rows,
      columns: this.initColumns()
    };
  }

  // A callback called every time a value changed.
  // Every time it save a new value to the state.
  onFieldChange(rowId, field, value) {
    // Find a row that is being change
    const row = rows.find(id => id === rowId);

    // Change a value of a field
    row[field] = value;

    this.setState({
      rows: [].concat(rows),
      // Blurring focus from the current cell is necessary for a correct behavior of the Grid.
      blurCurrentFocus: true
    });
  }

  initColumns() {
    return [
      {
        id: "company_name",
        title: () => "Name",
        value: (row, { focus }) => {
          return (
            <Input
              value={row.company_name}
              focus={focus}
              onChange={this.onFieldChange.bind(this, "company_name")}
            />
          );
        }
      },
      {
        title: () => "website",
        value: (row, { focus }) => {
          return <Input value={row.website} focus={focus} />;
        }
      }
    ];
  }

  render() {
    return (
      <Grid
        columns={this.state.columns}
        rows={this.state.rows}
        getRowKey={row => row.id}
        // Don't forget to blur focused cell after a value has been changed.
        blurCurrentFocus={this.state.blurCurrentFocus}
      />
    );
  }
}
