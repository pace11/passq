#!/usr/bin/env node

const { Command } = require("commander");
const figlet = require("figlet");
const {
  copyData,
  createData,
  deleteData,
  generateDb,
  getData,
} = require("./db/query.js");
const { generateRandomPassword } = require("./helpers/index.js");

const program = new Command();

console.log(figlet.textSync("PassQ", { horizontalLayout: "full" }));

program.name("passq").description("Password Manager CLI").version("1.2.1");

program
  .command("generate-db")
  .description("Generate the local database for the first time")
  .action(() => generateDb());

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
    "Password | If not available, it will be generated randomly"
  )
  .action((value) =>
    createData({
      title: value.title,
      password: value.password || generateRandomPassword(),
    })
  );

program
  .command("delete")
  .description("Delete password")
  .requiredOption("--id <id>", "Specific password by id")
  .action((value) => deleteData({ id: value.id }));

program
  .command("copy")
  .description("Copy password")
  .requiredOption("--id <id>", "Specific password by id")
  .action((value) => copyData({ id: value.id }));

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(0);
}

program.showHelpAfterError();
program.parse(process.argv);
