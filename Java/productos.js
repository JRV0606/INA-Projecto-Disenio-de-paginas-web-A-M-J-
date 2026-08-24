/*
    ===========================================================
    productos.js
    ===========================================================
    Este archivo NO hace nada por si solo (no dibuja nada en
    pantalla). Es una BASE DE DATOS escrita a mano: guarda toda
    la informacion de los productos en un solo lugar.

    Los demas archivos (catalogo.js, index.js, detalle.js) leen
    esta informacion y la usan para "dibujar" el HTML. Por eso
    este script se debe cargar SIEMPRE primero en el HTML, con
    una etiqueta <script> antes que los otros.

    Como agregar un producto nuevo:
    1. Copiar un objeto completo (desde la { hasta la }).
    2. Pegarlo antes del corchete final "];".
    3. Cambiar los valores.
    4. Poner una coma "," despues de la "}" anterior.
    ===========================================================
*/

/*
    "const" crea una CONSTANTE: una variable cuyo contenido no
    se puede reemplazar por otro despues de creada. No podemos
    escribir despues "productos = otraCosa;", eso daria error.
    Si pudieramos volver a asignarle un valor distinto usariamos
    "let" en vez de "const".

    "productos" es un ARREGLO (array): una lista ordenada de
    valores, escrita entre corchetes [ ]. Cada elemento de la
    lista, separado por comas, es un OBJETO: un valor compuesto
    por varios pares "propiedad: valor", escrito entre llaves { }.

    Aunque "productos" es const, SI podemos modificar lo que hay
    ADENTRO del arreglo (agregar objetos, cambiar una propiedad
    de un objeto, etc). "const" solo impide reemplazar la
    variable completa por otra cosa.
*/
const productos = [
  {
    /*
            Cada propiedad es un par "nombre: valor".
            Los valores entre comillas ("...") son TEXTO (string).
            Los valores sin comillas (como 100000) son NUMEROS.
            Los valores true/false son BOOLEANOS (si/no).
            Los valores entre corchetes [ ] son otro arreglo,
            en este caso un arreglo de textos (nombres de archivo).
        */

    /* id: identificador UNICO del producto. Se usa en la */
    /* URL de la pagina de detalle:                       */
    /* Detalle_Producto.html?id=sauvage                   */
    id: "club_bling",

    /* marca y tipo: se usan para los filtros del catalogo */
    marca: "armaf",
    tipo: "Perfumes",

    /* nombreCorto: el que se ve en las tarjetas (catalogo */
    /* e index)                                            */
    nombreCorto: "Club de nuit Bling",

    /* nombreCompleto: el que se ve en el titulo grande de */
    /* la pagina de detalle                                */
    nombreCompleto: "Club de nuit Bling, Armaf",

    /* precio: siempre como NUMERO puro, sin simbolo de    */
    /* colones ni puntos ni comas. El simbolo se agrega    */
    /* despues con codigo (funcion formatearPrecio)        */
    precio: 35000,

    /* imagen: SOLO el nombre del archivo. El archivo debe */
    /* existir dentro de la carpeta Multimedia/Img/. La    */
    /* ruta completa la arma cada script segun la pagina   */
    imagen: "club de nuit bling 1.webp",

    /* galeria: arreglo con los nombres de las miniaturas  */
    /* que se ven en la pagina de detalle. Puede quedar    */
    /* vacio: []                                           */
    galeria: ["club de nuit bling 2.webp", "club de nuit bling 3.webp"],

    /* perfilUso y descripcion: textos largos que se ven   */
    /* en la pagina de detalle                             */
    perfilUso:
      "Esta fragancia está orientada a personas con personalidad decidida que buscan dejar una estela imponente y no pasar desapercibidas. Por su alta proyección y fijación prolongada, su desempeño óptimo se da en eventos nocturnos, salidas de fiesta, citas románticas o reuniones formales, especialmente en climas frescos o durante otoño e invierno. Es perfecta para quien aprecia los aromas amaderados con salida cítrico-frutal ahumada y busca tanto un perfume de gran presencia como una pieza de exhibición llamativa para su colección.",
    descripcion:
      "Club de Nuit Bling Edition (de Armaf) es una edición especial de coleccionista que toma la fórmula emblemática de la línea Club de Nuit y la viste con un frasco decorado con incrustaciones de cristales. En su versión más reconocida (Intense Man), es una fragancia de la familia amaderada especiada de alto impacto. Su apertura es fresca y frutal con notas de limón, piña, grosella negra y manzana; en el corazón, la madera de abedul le otorga un matiz ahumado característico equilibrado con jazmín y rosa; finalmente, evoluciona hacia un fondo cálido y masculino de ámbar gris, almizcle, pachulí y un toque dulce de vainilla.",

    /* principal: si es true, el producto aparece en el    */
    /* Index, seccion "Productos Principales" (sin precio) */
    /* destacado: si es true, el producto aparece en el    */
    /* Index, seccion "Productos Destacados" (con precio)  */
    /* Un producto puede tener las dos en true, las dos en */
    /* false, o solo una. Aqui se dejan las dos en true    */
    /* para poder comprobar, con un solo producto, que las */
    /* tarjetas del Index (ambas secciones), del Catalogo, */
    /* y el link a la pagina de Detalle_Producto.html      */
    /* funcionan correctamente.                            */
    principal: true,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 28000,
    imagen: "club de nuit elixir 1.webp",
    galeria: ["club de nuit elixit 2.webp", "club de nuit elixir 3.webp"],
    perfilUso:
      "Es un aroma todoterreno diseñado para un estilo de vida dinámico, ideal para convertirse en perfume de diario (signature scent), ir a la oficina, la universidad o salir a eventos casuales y citas. Gracias a su perfecto equilibrio entre notas frescas, florales masculinas y un fondo amaderado denso, se adapta sin esfuerzo a cualquier época del año y funciona igual de bien tanto de día como de noche. Es perfecta para quienes buscan una fragancia versátil, de gran proyección y con un perfil moderno que proyecte limpieza, energía y elegancia urbana.",
    descripcion:
      "Club de Nuit Urban Man (junto a su aclamada versión Urban Elixir, de Armaf) es una fragancia de la familia olfativa amaderada aromática que destaca por su carácter versátil y contemporáneo. Abre con una explosión fresca y especiada de bergamota, pimienta rosa y flor de azahar; su corazón se despliega con notas limpias de lavanda, geranio, azafrán y vetiver; finalmente, evoluciona hacia una base cálida y sumamente seductora dominada por ambroxan, pachulí, ámbar y cedro.",
    principal: false,
    destacado: false,
  },
  {
    id: "9_pm_Perfume",
    marca: "Afnan",
    tipo: "Perfumes",
    nombreCorto: "9 pm Parfum",
    nombreCompleto: "9 pm, Afnan",
    precio: 22000,
    imagen: "9 pm black 1.webp",
    galeria: ["9 pm black 2.webp", "9 pm black 3.webp"],
    perfilUso:
      "Como su nombre lo sugiere, es una fragancia diseñada para brillar en la noche. Es la opción ideal para salidas de fiesta, eventos nocturnos, clubbing o citas románticas en las que se busque proyectar magnetismo y presencia. Su mejor rendimiento se da en climas frescos, fríos (otoño e invierno) o en ambientes climatizados, ya que su perfil dulzón y especiado puede resultar denso con el calor extremo. Es perfecta para un público juvenil o moderno que busque un perfume llamativo, con excelente fijación y una alta capacidad para generar cumplidos.",
    descripcion:
      "9 PM de Afnan es un eau de parfum de la familia olfativa ámbar vainilla que se ha consolidado como uno de los aromas nocturnos y seductores más populares. Su apertura es dulce y jugosa, destacando notas de manzana, canela, lavanda silvestre y un toque de bergamota; en el corazón se percibe una faceta floral limpia gracias a la flor de azahar y el lirio de los valles; finalmente, evoluciona hacia un fondo profundamente cálido, envolvente y goloso donde predominan la vainilla, el haba tonka, el ámbar y el pachulí.",
    principal: false,
    destacado: false,
  },
  {
    id: "acqua_venizia",
    marca: "Reyane tradition",
    tipo: "Perfumes",
    nombreCorto: "acqua diparisis",
    nombreCompleto: "acqua diparisis, venizia, Reyane tradition",
    precio: 22000,
    imagen: "acqua diparisis venizia 1.webp",
    galeria: [
      "acqua diparisis venizia 2.webp",
      "acqua diparisis venizia 3.webp",
    ],
    perfilUso:
      "Es un aroma sofisticado y sensual, pensado para quienes disfrutan de fragancias dulces, densas y con personalidad marcada. Debido a la calidez de su composición gourmand y su fondo dulzón, su rendimiento óptimo se logra durante la tarde y la noche, o bien en climas frescos y fríos. Resulta idónea para salidas especiales, citas, cenas o eventos en los que se busque proyectar una presencia elegante, acogedora y con una estela sutilmente embriagadora.",
    descripcion:
      "Acqua Di Parisis Venizia (de Reyane Tradition) es una fragancia de la familia olfativa ámbar gourmand que destaca por su carácter dulce, envolvente y sofisticado. Su apertura despliega un acorde tentador con notas de caramelo y matices frutales de bayas rojas; en el corazón, la fragancia evoluciona hacia una faceta floral y elegante marcada por el pachulí y el jazmín; finalmente, se asienta sobre un fondo denso, cálido y reconfortante de vainilla, ámbar y almizcle que le otorga su distintivo sello cremoso.",
    principal: false,
    destacado: false,
  },
  {
    id: "9_pm_Elixer",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "9 pm Elixer",
    nombreCompleto: "9 pm Elixer, Afnan",
    precio: 28000,
    imagen: "Afnan 9pm Elixir Intense Cologne 1.webp",
    galeria: [
      "Afnan 9pm Elixir Intense Cologne 2.webp",
      "Afnan 9pm Elixir Intense Cologne 3.webp",
    ],
    perfilUso:
      "Se trata de un aroma de presencia imponente y proyección destacada, pensado exclusivamente para la noche y climas frescos o fríos (otoño e invierno). Es la elección perfecta para salidas nocturnas, fiestas, clubbing o citas románticas en las que se busque proyectar magnetismo, calidez y una estela dulce-especiada inolvidable. Está dirigida a un público moderno que disfruta de fragancias intensas tipo elixir, con un marcado carácter gourmand y una fijación prolongada en piel y ropa.",
    descripcion:
      "9 PM Elixir de Afnan es una versión más densa, opulenta y concentrada del clásico 9 PM, diseñada para llevar el perfil dulce y seductor de la línea a un nivel de mayor madurez y profundidad. Su apertura equilibra la frescura aromática de la lavanda y toques cítricos con una entrada especiada de canela y cardamomo; en el corazón, desarrolla notas cálidas de miel, resinas y azahar; finalmente, se asienta sobre una base rica y sumamente adictiva de haba tonka, vainilla cremosa, ámbar, benzul y maderas oscuras.",
    principal: false,
    destacado: false,
  },
  {
    id: "Ombre_Dor",
    marca: "Arfmar",
    tipo: "Perfumes",
    nombreCorto: "Ombre D'or",
    nombreCompleto: "Ombre D'or, Afnan",
    precio: 30000,
    imagen: "Armaf Ombre D'or Cologne 1.webp",
    galeria: [
      "Armaf Ombre D'or Cologne 2.webp",
      "Armaf Ombre D'or Cologne 3.webp",
    ],
    perfilUso:
      "Ombre D'or es una fragancia de la familia olfativa oriental amaderada (ámbar especiada) que destaca por su carácter opulento, cálido y refinado. En su apertura despliega una combinación cautivadora de especias cálidas, azafrán y matices cítricos que le otorgan un toque de luminosidad; su corazón revela un acorde elegante de maderas finas y matices florales oscuros; finalmente, evoluciona hacia una base rica, densa y envolvente de ámbar dorado, cuero, resinas, vainilla y toques amaderados profundos, creando una estela magnética y sofisticada.",
    descripcion:
      "Es un aroma imponente y maduro, concebido especialmente para ocasiones formales, eventos nocturnos, cenas elegantes o citas especiales donde se busque proyectar distinción, misterio y elegancia. Debido a la riqueza y calidez de sus notas ambaradas y especiadas, su desempeño óptimo se alcanza en climas frescos o fríos (otoño e invierno). Es la opción ideal para quien disfruta de los perfumes orientales intensos con cuerpo, gran presencia y una fijación duradera en piel y ropa.",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban",
    marca: "Afnan",
    tipo: "Elixires",
    nombreCorto: "Club de nuit, Urban",
    nombreCompleto: "Club de nuit, Urban, Afnan",
    precio: 10000,
    imagen: ".webp",
    galeria: [".webp", ".webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: false,
  },
];
