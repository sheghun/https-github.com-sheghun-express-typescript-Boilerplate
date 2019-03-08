const shell = require("shelljs");

shell.cp("-R", "src/public/js/", "dist/public");
shell.cp("-R", "src/public/images/", "dist/public/");