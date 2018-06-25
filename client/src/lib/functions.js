export const changes = (databases, csv) => {
  let changes = [];
  let change = [];
  if (databases) {
    Object.keys(csv).map(company => {
      //   console.log(databases[company].venture, "COMPANY NAME");
    //   change = Object.keys(databases).reduce(entry => {
        // databases[entry].HQ_source === csv[company].Location;
        // console.log(databases[entry], "ENTRY");
      });
      console.log(change, "CHANGE");
      //console.log(csv[company].Location, "CITY");
    });
    // console.log(changes, "CHANGES");
  }
  // return changes
};
