const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Leyendo el primer archivo...");

  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Comienzo archivo 1");
  console.log(text);
  console.log("Fin archivo 1");

  console.log("Hacer cosas mientras lee el archivo");

  console.log("Leyendo el segundo archivo...");
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Comienzo archivo 2");
  console.log(text2);
  console.log("Fin archivo 2");
})();
