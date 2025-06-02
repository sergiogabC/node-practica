import { Router } from "express";
import articulos from "../json/articulos.json" with {type:'json'};
import tiposJson from "../json/tiposArticulos.json" with {type:'json'};

export const articulosRutas = Router();

articulosRutas.get("/", (req, res) => {

  const {tipo} = req.query;

  if(tipo){
    const tipoVerificado = tiposJson.tipo.find((tipoM) => {
      if(tipoM.localeCompare(tipo, 'es',{sensitivity: 'base'}) === 0){
        return tipoM
        }
      }
    )

    const art = articulos.filter(articulo=>articulo.tipo===tipoVerificado)

    return res.json(art)
    
  }

  return res.json(articulos);
});

articulosRutas.get("/titulos", (req, res) => {
  const titulos = articulos.map((articulo) => articulo.titulo);

  return res.json(titulos);
});

articulosRutas.get("/:fecha", (req, res)=>{

  const {fecha} = req.params
  
  const articulosN = articulos.filter(articulo => {
    
    if(articulo.fecha.includes(fecha)){
      return articulo.fecha
    }
    
  })

  return res.json(articulosN);
})
