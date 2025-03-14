import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("Comienzo archivo 1");
  console.log(text);
  console.log("Fin archivo 1");
  console.log("Comienzo archivo 2");
  console.log(secondText);
  console.log("Fin archivo 2");
});
