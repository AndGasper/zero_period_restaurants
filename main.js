function Restaurant() {
    this.serverList = {}; // Object storing list of servers; keys are server id's, values are an object containing info about the sever
    this.sectionList = {}; // Section list is an object of objects

    this.Chef = function() {
        console.log("I'm a Chef!");

    };

    this.Server = function(name, id, sectionAssignment) {
        let serverInfo = {
            name: name,
            employeeID: id,
            section: sectionAssignment
        };
        this.serverList[id] = serverInfo; // Add server info to list of servers

        return this.serverList; // Return the list of servers
    };

    this.Section = function(id, numberOfTables, numberOfSeatsPerTable) {
        // A section has an id, a max number of tables, and then a "tables" key whose value contains an object of objects containing information about the tables in the section
        let sectionInfo = {
            sectionID: id,
            tables: {},
            totalTables: numberOfTables
        };
        // Make as many tables specified in the section invocation, then set the maximum number of seats at the table equal to the numberOfSeatsPerTable
        for (let i = 0; i < numberOfTables; i++) {
            sectionInfo.tables[i] = this.Table(numberOfSeatsPerTable);
        }
        this.sectionList[id] = sectionInfo;
        return this.sectionList;
    };

    this.Table = function(maxSeats) {
        let tableInfo = {
          totalSeats: maxSeats
        };
        return tableInfo;
    };
}

function Customer(name,order) {
    this.name = name;
    this.order = order;
}

var testRest = new Restaurant();
console.log(testRest);
var s1 = testRest.Server("Jean", 24601, 0);
var s2 = testRest.Server("Valjean", 24602, 1);
var s3 = testRest.Server("Javert", 1000, 2);
console.log("testRest.serverList",testRest.serverList);
// console.log("s1", s1);
// console.log("s2", s2);
// console.log("s3",s3);
// console.log("testRest.serverList",testRest.serverList);
var section1 = testRest.Section(1, 3,3); // Section id, number of tables, seats per table
var section2 = testRest.Section(2, 3,3);
var section3 = testRest.Section(3, 3,3);
// console.log("testRest.sectionList",testRest.sectionList);
console.log("testRest.sectionList[1][tables]", testRest.sectionList["1"]["tables"]);