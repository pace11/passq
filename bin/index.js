#!/usr/bin/env node

const { Command } = require("commander");
const figlet = require("figlet");
const { createData, deleteData, getData } = require("../db/query.js");
const { generateRandomPassword } = require("../helpers/index.js");

const program = new Command();

program.name("passq").description("Password Manager CLI").version("1.4.0");

program
  .command("list")
  .description("Display password")
  .option("--all", "All password")
  .option("--id <id>", "Specific password by id")
  .action((value) => getData({ id: value.id }));

program
  .command("create")
  .description("Create password")
  .requiredOption("--title <title>", "Title password")
  .option(
    "--password <password>",
    "Password | If empty, it will be generated randomly"
  )
  .option("--length <length>", "Password length", 11)
  .action((value) => {
    createData({
      title: value.title,
      password: value.password || generateRandomPassword(Number(value.length)),
    });
  });

program
  .command("delete")
  .description("Delete password")
  .requiredOption("--id <id>", "Specific password by id")
  .action((value) => deleteData({ id: value.id }));

// if option not exist
if (!process.argv.slice(2).length) {
  console.log(figlet.textSync("PassQ", { horizontalLayout: "full" }));
  program.outputHelp();
  process.exit(0);
}

// if option includes "help"
if (process.argv.includes("help")) {
  console.log(figlet.textSync("PassQ", { horizontalLayout: "full" }));
}

program.showHelpAfterError();
program.parse(process.argv);

module.exports = program