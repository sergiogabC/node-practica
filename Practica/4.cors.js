const express = require("express");
const app = express();
const redSocialData = require("./Json/redSocial.json");
const PORT = process.env.PORT ?? 1234;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json(redSocialData);
});

app.get("/perfiles", (req, res) => {
  let firstPerfiles = Object.values(redSocialData);
  let perfiles = [];
  firstPerfiles.forEach((perfil) => {
    perfiles.push({
      id: perfil._id,
      nombre: perfil.name,
      edad: perfil.age,
      correo: perfil.email,
      telefono: perfil.phone,
      amigos: perfil.friends,
    });
    console.log(Object.values(perfiles));
  });
  res.json(perfiles);
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});
