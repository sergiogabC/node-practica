const express = require("express");
const app = express();
const redSocialData = require("./Json/redSocial.json");
const PORT = process.env.PORT ?? 1234;
const cors = require("cors");
const depurarPerfiles = require("./4.cors/depurarPerfiles");
const perfiles = depurarPerfiles(redSocialData);

app.disable("x-powered-by");

app.use(cors());

app.get("/", (req, res) => {
  res.json(redSocialData);
});

app.get("/perfiles", (req, res) => {
  res.json(perfiles);
});

app.delete("/perfiles/:id", (req, res) => {
  const { id } = req.params;
  const perfilIndex = perfiles.findIndex((perfil) => perfil.id === id);
  console.log(perfilIndex);
  if (perfilIndex === -1) {
    return res.status(404).json("MOVIE NOT FOUND");
  }
  perfiles.splice(perfilIndex, 1);
  res.status(200).json("Movie Deleted");
});

//Eliminar Amigo
app.delete("/perfiles/:id/:idAmigo", (req, res) => {
  const { id } = req.params;
  const { idAmigo } = req.params;
  const perfilIndex = perfiles.findIndex((perfil) => perfil.id === id);
  const amigos = perfiles[perfilIndex].amigos[idAmigo];

  console.log(amigos);

  res.status(200).json("Movie Deleted");
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});
