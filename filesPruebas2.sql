USE articlesdb;

SELECT * from categoria
ORDER BY categoria_id ;

SELECT 
BIN_TO_UUID(articulos.id) AS id, articulos.sinopsis, articulos.titulo, articulos.autor, articulos.imagen_destacada, articulos.fecha,
articulos.contenido, categoria.nombre_categoria
from articulos
inner join articulos_categorias on articulos_categorias.articulos_id = id
inner join categoria on categoria.categoria_id = articulos_categorias.categoria_id;

SELECT * FROM articulos_categorias;