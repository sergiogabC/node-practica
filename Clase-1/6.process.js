/* eslint-disable no-undef */
//Argumentos de entrada
console.log(process.argv);

//controlar el proceso y su salida
// process.exit(1);

//Podemos controlar eventos del proceso
// process.on("exit",()=>{
//     console.log("Hasta la proxima");
// })

//Current Working Directory
console.log(process.cwd());

//Variables de entorno
console.log(process.env.SERGIO);
