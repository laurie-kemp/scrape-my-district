export const changes = (databases, csv) => {
  let changes = [];
  let change = [];
  let comp = [];
  if (databases) {
    Object.keys(csv).map(company => {
      // console.log(csv[company].Name, "COMPANY NAME");
      comp = Object.keys(databases)
        .map(entry => {
          if (databases[entry].venture === csv[company].Name) {
            let location;
            if (databases[entry].HQ_source !== csv[company].Location) {
              location = csv[company].Location;
            } else {
              location = "same";
            }
            const correctAddress = csv[company].Location.includes(
              "The Netherlands"
            );
            let newAddress = "";
            if (correctAddress === false) {
              console.log(newAddress, "WRONG ADDRESS FOUND");
              return {
                id: databases[entry].id,
                venture: databases[entry].venture,
                csv_location: csv[company].Location,
                HQ_source: databases[entry].HQ_source,
                LOCATION: newAddress
              };
            } else {
              return {
                id: databases[entry].id,
                venture: databases[entry].venture,
                csv_location: csv[company].Location,
                HQ_source: databases[entry].HQ_source,
                LOCATION: location
              };
            }
          } else return false;
          // console.log(databases[entry].HQ_source, "HQ SOURCE DATABASES");
          // console.log(csv[company].Location, "CSV LOCATION");
          // if (
          //   databases[entry] &&
          //   databases[entry].HQ_source &&
          //   databases[entry].HQ_source === csv[company].Location
          // ) {
          //   return csv[company].Location;
          // } else return false;
          // return company;
          // console.log(databases[entry], "ENTRY");
        })
        .filter(x => {
          if (x !== true) return x;
        });
      if (comp) console.log(comp, "OBJECT");
      if (comp.length > 1) {
        comp.map(entry =>
          console.log(
            "multiple entries for " + entry.venture + " with ID: " + entry.id
          )
        );
        // console.log(
        //   "multiple entries for " +
        //     comp[0].venture +
        //     " please check your data manually. Ids are: "
        // );
      }
      changes.push(comp);
 
      //console.log(csv[company].Location, "CITY");
    });
    // console.log(changes, "CHANGES");
  }
  const newChanges = changes.filter(entry => {
    entry.HQ_source !== entry.csv_location;
  });
  console.log(newChanges, "CHANGES");
  // return changes
 };
