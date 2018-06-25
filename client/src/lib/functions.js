export const changes = (databases, csv) => {
  let changes = [];
  let change = [];
  if (databases) {
    change = Object.keys(csv).forEach(company => {
      //   console.log(databases[company].venture, "COMPANY NAME");
      change = Object.keys(databases).foEach(entry => {
        if(databases[entry].HQ_source !== csv[company].Location) console.log(csv[company].Location) 
        else null;
        // console.log(databases[entry], "ENTRY");
        
      });
      console.log(change, "CHANGE");
      //console.log(csv[company].Location, "CITY");
    });
    changes.push(change)
    console.log(changes, "CHANGES");
    return changes
    
  }
  // return changes
}
