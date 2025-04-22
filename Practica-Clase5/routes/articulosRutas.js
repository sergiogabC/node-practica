import { Router } from "express";
import articulos from "../json/articulos.json" with {type:'json'};

export const articulosRutas = Router();

articulosRutas.get("/", (req, res) => {
  return res.json(articulos);
});

articulosRutas.get("/titulos", (req, res) => {
  const titulos = articulos.map((articulo) => articulo.titulo);

  return res.json(titulos);
});


