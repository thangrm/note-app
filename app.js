const getNotes = require("./notes");
const yargs = require("yargs");
const chalk = require("chalk");

// Customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  description: "Add a new note",
  handler: function () {
    console.log("Add a new note");
  },
});

yargs.command({
  command: "remove",
  description: "Remove a new note",
  handler: function () {
    console.log("Remove a new note");
  },
});

yargs.command({
  command: "list",
  description: "List of notes",
  handler: function () {
    console.log("List of notes");
  },
});

yargs.command({
  command: "read",
  description: "Read a new note",
  handler: function () {
    console.log("Read a new note");
  },
});

console.log(yargs.argv);
