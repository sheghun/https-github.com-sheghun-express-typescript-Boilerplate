const shell = require("shelljs");

// shell.cp("-R", "src/public/js/", "dist/public");
// shell.cp("-R", "src/public/images/", "dist/public/");
shell.cp(".env", "dist/.env");
shell.cp("-R", "src/templates", "dist/");
shell.cp("-R", "src/_data", "dist/");