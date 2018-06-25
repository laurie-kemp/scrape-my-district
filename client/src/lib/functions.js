export const changes = (databases, csv) => {
  let changes = [];
  let change = [];
  let comp = [];
  if (databases) {
    Object.keys(csv).map(company => {
      comp = Object.keys(databases)
        .map(entry => {
          if (databases[entry].venture === csv[company].Name) {
            let location;
            if (databases[entry].HQ_source !== csv[company].Location) {
              location = "changed";
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
                LOCATION: "not correct"
                // LOCATION: newAddress
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
        })
        .filter(x => {
          if (x !== true) return x;
        });
      if (comp.length > 1) {
        comp.map(entry =>
          console.log(
            "multiple entries for " + entry.venture + " with ID: " + entry.id
          )
        );
      }
      changes.push(comp);
    });
    console.log(changes, "CHANGES");
  }
  const newChanges = changes.filter(entry => entry[0] && entry[0].LOCATION == "changed");
  // const newChanges = changes.map(entry => console.log(entry[0], "entry"))
  console.log(newChanges, "NEW CHANGES")
 };
