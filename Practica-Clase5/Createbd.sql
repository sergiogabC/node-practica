DROP DATABASE IF EXISTS articlesdb;

CREATE DATABASE articlesdb;

USE articlesdb;

CREATE TABLE articulos(
	id BINARY(16) PRIMARY KEY DEFAULT(UUID_TO_BIN(UUID())),
    sinopsis TEXT,
    titulo VARCHAR(225) NOT NULL,
    autor VARCHAR(225) NOT NULL,
    imagen_destacada TEXT,
    fecha VARCHAR(225),
	contenido TEXT NOT NULL
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE categoria(
	categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(225) NOT NULL UNIQUE
);

CREATE TABLE articulos_categorias(
	articulos_id BINARY(16) REFERENCES articulos(id),
    categoria_id INT REFERENCES categoria(categoria_id),
    PRIMARY KEY(articulos_id,categoria_id),
    FOREIGN KEY(articulos_id) REFERENCES articulos(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

INSERT INTO categoria(nombre_categoria) VALUES
	('Investigación Cientifica'),
    ('Reflexión'),
    ('Revisión'),
    ('Divulgación'),
    ('Reseña'),
    ('Opinión');

INSERT INTO articulos(id, sinopsis, titulo, autor, fecha, contenido)
VALUES
	(UUID_TO_BIN(UUID()), 
    'Durante más de 20 años, Niños del Milenio ha seguido a dos cohortes nacidas con siete años de diferencia (Favara et al. 2021). Esta nota técnica documenta las tasas de deserción de la séptima ronda de la encuesta Niños del Milenio llevada a cabo en Etiopía, India (los estados de Andhra Pradesh y Telangana) y Perú en 2023-24, cuando la cohorte de jóvenes tenía 22 años y la cohorte de mayores 29 años. También proporciona detalles sobre las tasas de finalización observadas para componentes específicos de la séptima convocatoria que requerían consentimiento informado adicional (un cuestionario autoadministrado, medidas antropométricas, comprensión lectora, tareas cognitivas informatizadas y muestras de cabello). En la nota, el desgaste de la muestra se define como el porcentaje de participantes que no han podido ser localizados, han emigrado al extranjero, han fallecido o se han negado a participar en rondas anteriores, en comparación con la muestra original encuestada en la ronda 1. Veintiún años después del inicio del estudio Niños del Milenio, una media del 81,0% de los participantes originales siguen formando parte del estudio en los tres países, con unas tasas de desgaste del 25,6% en Etiopía, el 11,5% en la India y el 19,8% en Perú.',
    'Young Lives attrition report: round 7', 'Maria de los Ángeles Molina, Marta Favara, Alan Sánchez, Amanda Woodman', '2025-03', 'https://www.grade.org.pe/wp-content/uploads/AS_YL-TN58_2025.pdf'),
    (UUID_TO_BIN(UUID()),
    'El Diálogo Interamericano y UNICEF presentan este estudio como una contribución al fortalecimiento de la agenda de cuidados y desarrollo infantil temprano en la región. A través de un análisis transversal y la comparación del diseño e implementación de programas de visitas domiciliarias en diez países de la región, el estudio busca ofrecer una caracterización de estos programas, destacando buenas prácticas, retos de implementación y extrayendo aprendizajes para políticas subnacionales, nacionales y regionales. Se analiza también cómo los factores que influyen en su impacto en el bienestar infantil y familiar contribuyen a la transformación de las prácticas de cuidado y los roles de género tradicionales en los hogares.',
    'Panorama de los programas de visitas domiciliarias en America Latina y el Caribe','Gabriela Guerrero, Marcela Ponce de León', '2024', 'https://www.grade.org.pe/wp-content/uploads/GG_Unicef_2024.pdf'),
    (UUID_TO_BIN(UUID()),
    'Este trabajo examina una evaluación aleatoria a gran escala del programa One Laptop Per Child (OLPC) en 531 escuelas primarias rurales, implementado por el gobierno peruano a partir de 2009. Utilizamos datos administrativos y de encuestas sobre el rendimiento académico y la progresión de grado hasta 2019 para estimar los efectos a largo plazo de la tecnología educativa en i) el rendimiento académico y la progresión de grado en las escuelas a lo largo del tiempo y ii) las trayectorias de los estudiantes a medida que avanzan desde la escuela primaria hasta la universidad. Encontramos efectos negativos y significativos sobre la finalización de la educación primaria y secundaria a tiempo, pero ningún efecto sobre el rendimiento. Se observan efectos positivos y significativos en las competencias informáticas de los alumnos, pero no en las competencias cognitivas generales. La información sobre la formación del profesorado y la utilización de los ordenadores sugiere beneficios limitados de proporcionar tecnología educativa sin suficiente apoyo pedagógico.',
    'Laptops in the long-run: evidence from the One Laptop per Child Program in rural Peru', 'Santiago Cueto, Diether W. Beuermann, Julian Cristia, Ofer Malamud, Francisco Pardo', '2024-10', 'https://www.grade.org.pe/wp-content/uploads/SC_BID_2024-1.pdf'),
    (UUID_TO_BIN(UUID()),
    NULL, 'La dolorosa ilusión de las redes sociales', 'Equipo Editorial', '2021-11-20',
    'No hay que ser un genio para darse cuenta del impacto trascendental que la irrupción de las redes sociales tiene en el mundo contemporáneo. En poco más de una década de existencia, estos espacios virtuales han pasado de ser una excentricidad juvenil y una herramienta útil para contactar a viejos amigos, a ser el lugar por excelencia donde ocurren transacciones de todo tipo: desde compras y ventas de productos, y publicaciones de anuncios de bienes y servicios, hasta el enamoramiento y la difusión de contenidos personales. Todo está centralizado en sus páginas digitales, al punto tal de que es raro ya pedirle a alguien el número de teléfono, pues en realidad queremos su autorización para sumarnos a su vasta red de contactos.

En principio, no habría nada de qué preocuparse. Las redes sociales no son el primer invento que revoluciona la manera de interrelacionarnos o que acelera el reloj de la obsolescencia de muchas otras tecnologías y prácticas. De hecho, las redes sociales han tenido un brillante impacto en la organización de los grupos sociales y comunitarios, ya que permiten el surgimiento de nuevas formas de intercambio de ideas, nuevos modos de democratización del saber y nuevas formas de protesta y presión, cuyos impactos en la sociedad están apenas comenzando a apreciarse recientemente.

Este artículo no se trata, pues, de un llamado a temerles a las redes sociales. Pero sí, lo cual es distinto, puede entenderse como una advertencia respecto a lo que hacemos con ellas y el modo en que las pensamos, dado que debajo de las redes sociales suele hallarse un engaño gigantesco, herencia de los tiempos del reality show y otras producciones mediáticas que aspiraban a entretenernos no con relatos fantásticos y perspectivas escapistas, sino mostrándonos —supuestamente— la realidad.'),
	(UUID_TO_BIN(UUID()),
    NULL, '“La Utopía, la ciudad y la máquina” de Lewis Mumford 1965', 'Helga von Breymann Miranda', '2010-03', 'http://habitat.aq.upm.es/gi/mve/daee/thbreymann.pdf');
    
INSERT INTO articulos_categorias (articulos_id, categoria_id) 
VALUES 
((SELECT id FROM articulos WHERE titulo = 'Young Lives attrition report: round 7'),(SELECT categoria_id FROM categoria WHERE nombre_categoria = 'Investigación Cientifica')),
((SELECT id FROM articulos WHERE titulo = 'Panorama de los programas de visitas domiciliarias en America Latina y el Caribe'),(SELECT categoria_id FROM categoria WHERE nombre_categoria = 'Investigación Cientifica')),
((SELECT id FROM articulos WHERE titulo = 'Laptops in the long-run: evidence from the One Laptop per Child Program in rural Peru'),(SELECT categoria_id FROM categoria WHERE nombre_categoria = 'Investigación Cientifica')),
((SELECT id FROM articulos WHERE titulo = 'La dolorosa ilusión de las redes sociales'),(SELECT categoria_id FROM categoria WHERE nombre_categoria = 'Opinión')),
((SELECT id FROM articulos WHERE titulo = '“La Utopía, la ciudad y la máquina” de Lewis Mumford 1965'),(SELECT categoria_id FROM categoria WHERE nombre_categoria = 'Reseña'));
