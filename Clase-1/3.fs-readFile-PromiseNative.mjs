import fs from "node:fs/promises";

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Comienzo archivo 1");
  console.log(text);
  console.log("Fin archivo 1");
});

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Comienzo archivo 2");
  console.log(text);
  console.log("Fin archivo 2");
});
