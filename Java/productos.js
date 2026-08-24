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
    id: "sauvage",

    /* marca y tipo: se usan para los filtros del catalogo */
    marca: "dior",
    tipo: "colonias",

    /* nombreCorto: el que se ve en las tarjetas (catalogo */
    /* e index)                                            */
    nombreCorto: "Dior Sauvage",

    /* nombreCompleto: el que se ve en el titulo grande de */
    /* la pagina de detalle                                */
    nombreCompleto: "Sauvage Eau de Toilette, de Christian Dior",

    /* precio: siempre como NUMERO puro, sin simbolo de    */
    /* colones ni puntos ni comas. El simbolo se agrega    */
    /* despues con codigo (funcion formatearPrecio)        */
    precio: 100000,

    /* imagen: SOLO el nombre del archivo. El archivo debe */
    /* existir dentro de la carpeta Multimedia/Img/. La    */
    /* ruta completa la arma cada script segun la pagina   */
    imagen: "Sauvage.png",

    /* galeria: arreglo con los nombres de las miniaturas  */
    /* que se ven en la pagina de detalle. Puede quedar    */
    /* vacio: []                                           */
    galeria: ["Sauvage 2.jpg", "Sauvage 3.png"],

    /* perfilUso y descripcion: textos largos que se ven   */
    /* en la pagina de detalle                             */
    perfilUso:
      "Pensada para hombres libres, modernos y decididos, es ideal para uso diario durante todo el ano, con buena duracion y una estela reconocible. Es uno de los perfumes masculinos mas vendidos del mundo, aunque genera opiniones divididas: para muchos es un clasico todo terreno, mientras que otros lo consideran demasiado simple frente a otras creaciones de Dior.",
    descripcion:
      "La fuerte rafaga citrica de Sauvage Eau de Toilette esta potentemente anclada por la nobleza ambarina del ambroxan, el elemi resinoso y las maderas. La fragancia se presenta como radicalmente fresca, cruda y noble a la vez, con una composicion donde predominan ingredientes naturales cuidadosamente seleccionados.",

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
    id: "9pm_black",
    marca: "Afnan",
    tipo: "colonias",
    nombreCorto: "9pm black",
    nombreCompleto: "9pm black Afnan",
    precio: 10000,
    imagen: "9pm black.jpeg",
    galeria: ["9pm black.jpeg", "9pm Red.jpeg"],
    perfilUso: "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.",
    descripcion:
      "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
    principal: true,
    destacado: false,
  },
  {
    id: "9pm_red",
    marca: "afnan",
    tipo: "colonias",
    nombreCorto: "Afnan 9pm Red",
    nombreCompleto: "9pm Red de Afnan",
    precio: 10000,
    imagen: "9pm Red.jpeg",
    galeria: [],
    perfilUso:
      "Una fragancia intensa y dulce, ideal para la noche y ocasiones especiales.",
    descripcion:
      "Aroma envolvente con un caracter moderno y buena presencia, pensado para quienes buscan una fragancia llamativa.",
    principal: true,
    destacado: false,
  },
  {
    id: "bad_boy",
    marca: "carolina-herrera",
    tipo: "perfumes",
    nombreCorto: "Carolina Herrera Bad Boy",
    nombreCompleto: "Bad Boy de Carolina Herrera",
    precio: 85000,
    imagen: "Bad Boy.jpeg",
    galeria: [],
    perfilUso:
      "Fragancia masculina, urbana y atrevida para la noche y ocasiones especiales.",
    descripcion:
      "Una composicion contrastante que combina notas frescas, especiadas y amaderadas.",
    principal: true,
    destacado: false,
  },
  {
    id: "club_de_nuit",
    marca: "armaf",
    tipo: "perfumes",
    nombreCorto: "Armaf Club de Nuit",
    nombreCompleto: "Club de Nuit de Armaf",
    precio: 45000,
    imagen: "Club de nuit.png",
    galeria: [],
    perfilUso:
      "Una opcion versatil para el dia o la noche, con una estela elegante y reconocible.",
    descripcion:
      "Fragancia de caracter fresco y amaderado, adecuada para el uso diario y ocasiones formales.",
    principal: true,
    destacado: false,
  },
  {
    id: "gio",
    marca: "armani",
    tipo: "perfumes",
    nombreCorto: "Giorgio Armani Acqua di Gio",
    nombreCompleto: "Acqua di Gio de Giorgio Armani",
    precio: 75000,
    imagen: "Gio.jpeg",
    galeria: [],
    perfilUso:
      "Fragancia fresca y versatil, ideal para el dia y climas calidos.",
    descripcion:
      "Un aroma limpio y marino con un caracter ligero, elegante y facil de llevar.",
    principal: true,
    destacado: true,
  },
  {
    id: "hawas",
    marca: "rasasi",
    tipo: "perfumes",
    nombreCorto: "Rasasi Hawas",
    nombreCompleto: "Hawas de Rasasi",
    precio: 55000,
    imagen: "Hawas.png",
    galeria: [],
    perfilUso:
      "Fragancia fresca y dulce para el uso diario, especialmente en climas calidos.",
    descripcion:
      "Una mezcla vibrante de notas frutales, acuaticas y amaderadas con buena proyeccion.",
    principal: true,
    destacado: true,
  },
  {
    id: "khamrah",
    marca: "lattafa",
    tipo: "elixires",
    nombreCorto: "Lattafa Khamrah",
    nombreCompleto: "Khamrah de Lattafa",
    precio: 35000,
    imagen: "Khamrah.png",
    galeria: [],
    perfilUso:
      "Aroma dulce y calido, recomendado para la noche, el frio y ocasiones especiales.",
    descripcion:
      "Fragancia envolvente de perfil especiado y gourmand, con una sensacion acogedora.",
    principal: true,
    destacado: true,
  },
  {
    id: "nautica",
    marca: "nautica",
    tipo: "colonias",
    nombreCorto: "Nautica Voyage",
    nombreCompleto: "Nautica Voyage de Nautica",
    precio: 25000,
    imagen: "Nautica.jpeg",
    galeria: [],
    perfilUso:
      "Una fragancia fresca y casual para el dia, el verano y actividades al aire libre.",
    descripcion:
      "Aroma ligero de inspiracion acuatica con un acabado limpio y refrescante.",
    principal: true,
    destacado: true,
  },
  {
    id: "odyssey",
    marca: "armaf",
    tipo: "perfumes",
    nombreCorto: "Armaf Odyssey",
    nombreCompleto: "Odyssey de Armaf",
    precio: 40000,
    imagen: "Odyssey.png",
    galeria: ["Odyssey.jpg"],
    perfilUso:
      "Fragancia versatil con presencia, ideal para la noche y ocasiones especiales.",
    descripcion:
      "Una composicion intensa y moderna con un perfil especiado, dulce y amaderado.",
    principal: true,
    destacado: true,
  },
  {
    id: "valentino",
    marca: "valentino",
    tipo: "perfumes",
    nombreCorto: "Valentino Born in Roma",
    nombreCompleto: "Born in Roma de Valentino",
    precio: 90000,
    imagen: "Valentino.png",
    galeria: [],
    perfilUso: "Fragancia elegante y contemporanea para el dia o la noche.",
    descripcion:
      "Un aroma sofisticado con un caracter moderno, urbano y distintivo.",
    principal: true,
    destacado: true,
  },
  {
    id: "versace",
    marca: "versace",
    tipo: "perfumes",
    nombreCorto: "Versace Eros",
    nombreCompleto: "Eros de Versace",
    precio: 80000,
    imagen: "Versace.png",
    galeria: [],
    perfilUso:
      "Fragancia intensa y fresca para la noche, citas y ocasiones especiales.",
    descripcion:
      "Una combinacion vibrante de notas frescas, dulces y amaderadas con gran presencia.",
    principal: true,
    destacado: true,
  },
];
