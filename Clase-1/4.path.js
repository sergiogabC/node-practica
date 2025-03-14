const path = require("node:path");

//Barra sepadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.join
const filepath =path.join("content","subfulder","text.txt")
console.log(filepath);

//Nombre del archivo
const base = path.basename("/tools/box/password.txt");
console.log(base);

//Nombre del archivo sin extensión
const baseFile = path.basename("/tools/box/password.txt",".txt");
console.log(baseFile);

//Tipo de extension
const extension = path.extname("fool.sp.ds.dsds.txt");
console.log(extension);
