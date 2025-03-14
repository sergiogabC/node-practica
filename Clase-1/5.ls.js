const fs = require("node:fs");

fs.readdir(".", (error, files) => {
  if (error) {
    console.log("Error al leer el directorio: ", error);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
