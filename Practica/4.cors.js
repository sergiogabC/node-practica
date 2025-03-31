const express = require("express");
const app = express();
const redSocialData = require("./Json/redSocial.json");
const PORT = process.env.PORT ?? 1234;
const cors = require("cors");
const depurarPerfiles = require("./4.cors/depurarPerfiles");
const perfiles = depurarPerfiles(redSocialData);

app.disable("x-powered-by");
app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost:1234",
        "http://192.168.222:8080",
      ];
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not Allowed by cors"));
    },
  })
);

app.get("/", (req, res) => {
  res.json(redSocialData);
});

app.get("/perfiles", (req, res) => {
  res.json(perfiles);
});

app.delete("/perfiles/:id", (req, res) => {
  const { id } = req.params;
  const perfilIndex = perfiles.findIndex((perfil) => perfil.id === id);
  console.log("Indice del Perfil ", perfilIndex);
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

  const amigos = perfiles[perfilIndex].amigos;
  const amigoIndex = amigos.findIndex((amigo) => amigo.id == idAmigo);

  console.log("Indice del amigo: ", amigoIndex);

  if (amigoIndex === -1) {
    return res.status(404).json("Amigo Not Found");
  }

  perfiles[perfilIndex].amigos.splice(amigoIndex, 1);
  res.status(200).json(amigos);
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});
