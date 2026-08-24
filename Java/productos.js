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
    nombreCompleto: "Club de nuit Bling Armaf",

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
    id: "club_urban_Elixer",
    marca: "Armaf",
    tipo: "Elixires",
    nombreCorto: "Club de nuit Urban",
    nombreCompleto: "Club de nuit Urban Man Afnan",
    precio: 28000,
    imagen: "club de nuit elixir 1.webp",
    galeria: ["club de nuit elixir 2.webp", "club de nuit elixir 3.webp"],
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
    nombreCompleto: "9 pm Afnan",
    precio: 22000,
    imagen: "9 pm black 1.webp",
    galeria: ["9 pm black 2.webp", "9 pm black 3.webp"],
    perfilUso:
      "Como su nombre lo sugiere, es una fragancia diseñada para brillar en la noche. Es la opción ideal para salidas de fiesta, eventos nocturnos, clubbing o citas románticas en las que se busque proyectar magnetismo y presencia. Su mejor rendimiento se da en climas frescos, fríos (otoño e invierno) o en ambientes climatizados, ya que su perfil dulzón y especiado puede resultar denso con el calor extremo. Es perfecta para un público juvenil o moderno que busque un perfume llamativo, con excelente fijación y una alta capacidad para generar cumplidos.",
    descripcion:
      "9 PM de Afnan es un eau de parfum de la familia olfativa ámbar vainilla que se ha consolidado como uno de los aromas nocturnos y seductores más populares. Su apertura es dulce y jugosa, destacando notas de manzana, canela, lavanda silvestre y un toque de bergamota; en el corazón se percibe una faceta floral limpia gracias a la flor de azahar y el lirio de los valles; finalmente, evoluciona hacia un fondo profundamente cálido, envolvente y goloso donde predominan la vainilla, el haba tonka, el ámbar y el pachulí.",
    principal: true,
    destacado: false,
  },
  {
    id: "acqua_venizia",
    marca: "Rayne tradition",
    tipo: "Perfumes",
    nombreCorto: "acqua diparisis venizia",
    nombreCompleto: "acqua diparisis venizia Reyane tradition",
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
    nombreCompleto: "9 pm Elixer Afnan",
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
    destacado: true,
  },
  {
    id: "Ombre_Dor",
    marca: "Armaf",
    tipo: "Perfumes",
    nombreCorto: "Ombre D'or",
    nombreCompleto: "Ombre D'or Afnan",
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
    id: "Perle_Dor",
    marca: "Armaf",
    tipo: "Perfumes",
    nombreCorto: "Perle D’or",
    nombreCompleto: "Perle D’or EDP Armaf",
    precio: 30000,
    imagen: "Armaf Perle D’or EDP 1.webp",
    galeria: ["Armaf Perle D’or EDP 2.webp", "Armaf Perle D’or EDP 3.webp"],
    perfilUso:
      "Es un aroma sofisticado y versátil que proyecta distinción, femineidad y pulcritud. Gracias al equilibrio entre la frescura de su apertura y la calidez ambarada de su base, se adapta de forma excelente tanto al uso diario (oficina, universidad o compromisos de rutina) como a salidas por la tarde, cenas casuales o eventos especiales. Desempeña muy bien en climas templados o frescos y es la opción ideal para quien busca un perfume envolvente, sutilmente dulce y con una estela encantadora que no llega a saturar.",
    descripcion:
      "Perle D’or EDP es una fragancia femenina de la familia olfativa floral ambarada que destaca por su aura luminosa, elegante y delicadamente dulce. Abre con una salida brillante y fresca con matices cítricos y flor de azahar; en su corazón despliega un bouquet floral refinado donde sobresalen el jazmín, la rosa y toques suavemente frutales; finalmente, evoluciona hacia un fondo cálido, cremoso y reconfortante dominado por la vainilla, el ámbar, el pachulí y el almizcle blanco.",
    principal: false,
    destacado: false,
  },
  {
    id: "club_Blue",
    marca: "Armaf",
    tipo: "Elixires",
    nombreCorto: "Club de Nuit Blue",
    nombreCompleto: "Club de Nuit Blue Iconic Armaf",
    precio: 28000,
    imagen: "club de nuit iconic 1.webp",
    galeria: ["club de nuit iconic 2.webp", "club de nuit iconic 3.webp"],
    perfilUso:
      "Es la fragancia firma (signature scent) por excelencia, diseñada para quien busca versatilidad total sin sacrificar sofisticación. Se adapta a la perfección a cualquier época del año —sobresaliendo en primavera, verano o climas cálidos— y rinde muy bien tanto en entornos laborales y universitarios como en salidas casuales, eventos de día o citas informales. Es la opción ideal para quien disfruta de aromas limpios, cítricos y amaderados con una excelente proyección y fijación que transmitan una imagen pulcra, atractiva y masculina.",
    descripcion:
      "Club de Nuit Blue Iconic de Armaf es un eau de parfum de la familia olfativa amaderada aromática que destaca por su carácter fresco, elegante y moderno (de la famosa línea de perfumes tipo azul). Su apertura es chispeante y vibrante, con notas de pomelo (toronja), limón, menta, pimienta rosa y cilantro; en el corazón, desarrolla un matiz especiado y limpio compuesto por jengibre, nuez moscada, melón y jazmín; finalmente, evoluciona hacia una base amaderada, cálida y sutilmente ahumada dominada por incienso, ámbar, cedro, sándalo y pachulí.",
    principal: false,
    destacado: false,
  },
  {
    id: "club_intense",
    marca: "Armaf",
    tipo: "Perfumes",
    nombreCorto: "Club de Nuit Intense",
    nombreCompleto: "Club de Nuit Intense Man Armaf",
    precio: 22000,
    imagen: "club de nuit intense 1.webp",
    galeria: ["club de nuit intense 2.webp", "club de nuit intense 3.webp"],
    perfilUso:
      "Es una fragancia diseñada para personas con personalidad decidida que buscan un aroma insignia (signature scent) con altísima capacidad de generar cumplidos. Por su gran proyección y estela duradera, brilla especialmente en eventos nocturnos, salidas de fiesta, reuniones de negocios o citas donde se busque dejar una impresión imponente. Aunque ofrece versatilidad para usarse durante todo el año (sobresaliendo en climas templados y frescos), conviene moderar las atomizaciones en días de calor intenso debido al carácter penetrante y ahumado de su secado. Ideal para quien desea proyectar fuerza, elegancia contemporánea y seguridad.",
    descripcion:
      "Club de Nuit Intense Man de Armaf es una fragancia de la familia olfativa amaderada especiada, mundialmente reconocida por su potente carácter frutal-ahumado y su enorme éxito comercial. Su apertura es vibrante e intensamente fresca, dominada por notas de limón, piña, grosella negra, bergamota y manzana; en el corazón, se despliega un matiz elegante y característico gracias a la madera de abedul (birch) combinada con jazmín y rosa; finalmente, evoluciona hacia una base profunda, masculina y envolvente de ámbar gris, almizcle, pachulí y un leve toque dulce de vainilla.",
    principal: false,
    destacado: false,
  },
  {
    id: "club_urban_Perfume",
    marca: "Armaf",
    tipo: "Perfumes",
    nombreCorto: "Club de nuit Urban",
    nombreCompleto: "Club de nuit Urban Man Afnan",
    precio: 22000,
    imagen: "club de nuit urban man.webp",
    galeria: [
      "club de nuit urban man caja.webp",
      "club de nuit urban man perfume.webp",
    ],
    perfilUso:
      "Es un aroma dinámico y versátil, concebido para adaptarse al ritmo diario de la vida urbana, ya sea en la oficina, la universidad o salidas casuales. Gracias al contraste entre sus notas de salida mentoladas y cítricas con su secado amaderado, se comporta de manera óptima en primavera, verano u otoño. Es una excelente opción como perfume diario (signature scent) para quien busca transmitir una imagen masculina, limpia, accesible y moderna a cualquier hora del día.",
    descripcion:
      "Club de Nuit Urban Man (de Armaf) es un eau de toilette de la familia olfativa amaderada especiada que destaca por su fusión de notas cítricas, aromáticas y especiadas. Abre con una salida fresca y chispeante de bergamota, pomelo (toronja), menta y cardamomo; en el corazón, desarrolla un matiz cálido con nuez moscada, jengibre, lavanda y cedro; finalmente, evoluciona hacia una base duradera y elegante dominada por vetiver, sándalo, pachulí y musgo de roble.",
    principal: false,
    destacado: false,
  },
  {
    id: "Dubai_Chocolate",
    marca: "Armaf",
    tipo: "Perfumes",
    nombreCorto: "Delights Dubai Delicacy Kunafa",
    nombreCompleto: "Armaf Delights Dubai Delicacy Kunafa Chocolate",
    precio: 31500,
    imagen: "Dubai Delicacy 1.webp",
    galeria: ["Dubai Delicacy 2.webp", "Dubai Delicacy 3.webp"],
    perfilUso:
      "Es un aroma acogedor, juguetón y puramente goloso, diseñado especialmente para amantes de las fragancias dulces que evocan la repostería fina. Debido a su perfil denso y cálido, rinde de manera sobresaliente en climas frescos o fríos (otoño e invierno), tardes de café, citas románticas casuales y salidas nocturnas informales. Es la opción ideal para quien desea destacar con un perfume reconfortante, único y con un altísimo poder para despertar curiosidad y generar cumplidos con olor a postre gourmet.",
    descripcion:
      "Armaf Delights Dubai Delicacy Kunafa Chocolate es una fragancia indulgentemente gourmand inspirada en la rica repostería de Oriente Medio y la tendencia del chocolate estilo Dubái. Su apertura es una tentación inmediata, combinando notas de chocolate de leche denso con el acorde crujiente y tostado de la masa kunafa dorada a la mantequilla; en el corazón, revela capas cremosas de crema de pistacho, avellana y un toque sutil de especias dulces; finalmente, evoluciona hacia una base cálida, adictiva y envolvente dominada por la vainilla, el haba tonka, el cacao concentrado y el ámbar.",
    principal: true,
    destacado: false,
  },
  {
    id: "Dubai_Club",
    marca: "Dubai Niche",
    tipo: "Perfumes",
    nombreCorto: "Club Dubai Niche",
    nombreCompleto: "Club Dubai Niche",
    precio: 17000,
    imagen: "DUBAI NICHE CLUB EDP SP 1.webp",
    galeria: [
      "DUBAI NICHE CLUB EDP SP 2.webp",
      "DUBAI NICHE CLUB EDP SP 3.webp",
    ],
    perfilUso:
      "Es un aroma imponente, sofisticado y de gran carácter, concebido principalmente para eventos formales, veladas nocturnas, cenas elegantes o compromisos donde se busque proyectar distinción y exclusividad. Debido a la riqueza, calidez y densidad de sus notas orientales, su mejor rendimiento se alcanza en climas frescos o fríos (otoño e invierno) y en espacios climatizados. Es la opción ideal para amantes de la perfumería de corte niche que disfrutan de estelas densas, duraderas y con una fuerte impronta de lujo arábigo.",
    descripcion:
      "Club Dubai Niche es una fragancia de la familia olfativa oriental amaderada (ámbar especiada) inspirada en el lujo y la opulencia de la perfumería de autor de Oriente Medio. Su apertura es cálida y cautivadora, destacando notas de azafrán, especias finas y toques cítricos sutiles; en el corazón, despliega un acorde denso y elegante compuesto por rosa de Damasco, madera de cedro y matices resinosos; finalmente, evoluciona hacia un fondo profundo, magnético y envolvente dominado por el ámbar, el pachulí, un toque suave de oud, vainilla y almizcle.",
    principal: false,
    destacado: false,
  },
  {
    id: "Dubai_Espectro",
    marca: "Dubai Niche",
    tipo: "Perfumes",
    nombreCorto: "Espectro Dubai Niche",
    nombreCompleto: "Espectro Dubai Niche",
    precio: 17000,
    imagen: "DUBAI NICHE ESPECTRO 1,2.webp",
    galeria: ["DUBAI NICHE ESPECTRO 2.webp", "DUBAI NICHE ESPECTRO 3.webp"],
    perfilUso:
      "Es un aroma con gran presencia y un aura de misterio, concebido para la noche, eventos especiales, cenas formales o citas en las que se busque proyectar elegancia, seguridad y distinción. Por la calidez y densidad de sus acordes orientales y amaderados, brilla especialmente en climas frescos, fríos (otoño e invierno) o en entornos cerrados con aire acondicionado. Es la elección perfecta para quien disfruta de los perfumes de corte arábigo niche con una estela duradera, envolvente y de carácter sofisticado.",
    descripcion:
      "Espectro Dubai Niche es una fragancia de la familia olfativa oriental amaderada con matices ambarados y especiados, caracterizada por un perfil opulento, misterioso y envolvente representativo de la perfumería de autor de Oriente Medio. En su apertura, despliega un acorde intrigante de especias finas (como azafrán y cardamomo) acompañadas de toques cítricos resplandecientes que aportan luminosidad; su corazón evoluciona hacia una faceta profunda y elegante donde destacan maderas oscuras, notas de incienso y suaves toques florales; finalmente, se asienta sobre un fondo denso, cálido y seductor de ámbar dorado, cuero, resinas, vainilla y almizcle.",
    principal: false,
    destacado: true,
  },
  {
    id: "Dubai_yl",
    marca: "Dubai Niche",
    tipo: "Perfumes",
    nombreCorto: "YL Dubai Niche",
    nombreCompleto: "YL Dubai Niche",
    precio: 17000,
    imagen: "DUBAI NICHE YL EDP S 1.webp",
    galeria: ["DUBAI NICHE YL EDP S 2.webp", "DUBAI NICHE YL EDP S 3.webp"],
    perfilUso:
      "Es un aroma contemporáneo, versátil y con un toque distintivo de distinción, pensado para quien busca un perfume de firma (signature scent) que llame la atención de forma refinada. Gracias a su equilibrio entre la frescura aromática y el fondo amaderado especiado, se adapta perfectamente a reuniones de trabajo, uso diario en la oficina, eventos casuales de nivel y citas. Funciona de manera sobresaliente en cualquier época del año, ofreciendo una excelente proyección que transmite pulcritud, seguridad y un atractivo aura urbana.",
    descripcion:
      "YL Dubai Niche es una fragancia de la familia olfativa aromática amaderada con matices ambarados, inspirada en la alta perfumería de Oriente Medio que combina frescura moderna con una base oriental sofisticada. Su apertura proyecta una salida vibrante y limpia marcando notas de manzana, bergamota y jengibre fresco; en el corazón, desarrolla una faceta aromática y elegante dominada por la salvia, el geranio y la lavanda; finalmente, se asienta sobre un fondo cálido, duradero y masculino de madera de cedro, vetiver, haba tonka, incienso y ámbar.",
    principal: false,
    destacado: true,
  },
  {
    id: "Lattafa_1505",
    marca: "Lattafa Perfumes",
    tipo: "Perfumes",
    nombreCorto: "La Collection d'antiquités 1505",
    nombreCompleto: "La Collection d'antiquités 1505 Lattafa Perfumes",
    precio: 28000,
    imagen: "lattafa pride.webp",
    galeria: ["lattafa pride 2.webp", "lattafa pride 3.webp"],
    perfilUso:
      "Es un aroma distinguido y de gran presencia, concebido especialmente para eventos nocturnos, cenas elegantes, citas especiales o celebraciones donde se desee proyectar exclusividad y sofisticación. Debido a la riqueza y calidez de sus acordes de cereza, canela y maderas, su punto máximo de rendimiento se alcanza en climas frescos o fríos (otoño e invierno). Es la elección perfecta para quienes buscan una fragancia unisex de corte arábigo lujoso, con alta fijación, excelente estela y un perfil dulce-especiado memorable.",
    descripcion:
      "La Collection d'Antiquités 1505 de Lattafa Perfumes es un eau de parfum unisex de la familia olfativa ámbar frutal amaderada, caracterizado por su perfil opulento, dulce y refinado. Su apertura impresiona con un acorde jugoso y vibrante de cereza negra, grosella negra, nectarina y bergamota; en el corazón, desarrolla una faceta cálida y especiada donde la canela se fusiona elegantemente con toques florales de jazmín y rosa; finalmente, evoluciona hacia una base densa, misteriosa y profundamente reconfortante dominada por madera de agar (oud), cedro, vainilla, benjuí, ámbar y almizcle.",
    principal: false,
    destacado: false,
  },
  {
    id: "Acqua_Red",
    marca: "Rayne Tradition",
    tipo: "Perfumes",
    nombreCorto: "Acqua Di Parisis Magic Red",
    nombreCompleto: "Acqua Di Parisis Magic Red Rayne Tradition",
    precio: 28000,
    imagen: "magic red 1.webp",
    galeria: ["magic red 2.webp", "megic red 3.webp"],
    perfilUso:
      "Es un aroma sofisticado y envolvente diseñado para proyectar elegancia, calidez y un aura de misterio. Por su perfil dulce-ambarado y su notable estela, rinde de forma excepcional en salidas nocturnas, citas románticas, eventos sociales o reuniones formales donde se busque llamar la atención de manera refinada. Se desenvuelve mejor en climas frescos, fríos o en ambientes climatizados, siendo la elección ideal para quien disfruta de fragancias de estilo contemporáneo con acordes de ámbar amaderado, dulce sofisticación y una fijación duradera en piel.",
    descripcion:
      "Acqua Di Parisis Magic Red (de Reyane Tradition) es una fragancia de la familia olfativa ámbar floral amaderada que destaca por su carácter radiante, Dulce y profundamente magnético. Su apertura es vibrante y especiada, marcada por notas de azafrán y matices sutilmente frutales; en el corazón, despliega una faceta floral y elegante donde el jazmín se entrelaza con acordes resinosos y madera de ámbar (amberwood); finalmente, evoluciona hacia una base cálida, envolvente y adictiva de madera de cedro, resina de abeto y un toque acaramelado de ámbar gris.",
    principal: false,
    destacado: false,
  },
  {
    id: "Maison_Kismet",
    marca: "Maison Alhambra",
    tipo: "Perfumenes",
    nombreCorto: "Kismet for Men Maison",
    nombreCompleto: "Kismet for Men Maison Alhambra",
    precio: 23000,
    imagen: "maison alhambra 1.webp",
    galeria: ["maison alhambra 2.webp", "maison alhambra 3.webp"],
    perfilUso: "#",
    descripcion: "#",
    principal: false,
    destacado: true,
  },
  {
    id: "Maktoub_Tonka",
    marca: "Maktoub Parfums",
    tipo: "Parfums",
    nombreCorto: "Tonka Tonka Maktoub",
    nombreCompleto: "Tonka Tonka Maktoub Parfums",
    precio: 30000,
    imagen: "Maktoub tonka tonka 1.webp",
    galeria: ["Maktoub tonka tonka 2.webp", "Maktoub tonka tonka 3.webp"],
    perfilUso:
      "Es un aroma acogedor, seductor y de marcada personalidad, concebido para destacar durante la noche, en citas románticas, eventos especiales o salidas donde se busque proyectar calidez y magnetismo. Por la densidad de sus notas dulces y especiadas, su rendimiento óptimo se logra en climas frescos o fríos (otoño e invierno) o en espacios interiores climatizados. Resulta la elección perfecta para amantes de la perfumería dulce y ambarada que buscan una fragancia con gran fijación, estela envolvente y un toque irresistiblemente adictivo.",
    descripcion:
      "Maktoub Tonka Tonka es una fragancia de la familia olfativa ámbar gourmand que rinde homenaje a la riqueza cremosa, cálida y suntuosa del haba tonka. Su apertura es envolvente y especiada, destacando notas de almendra amarga, canela suave y un toque luminoso de bergamota; en el corazón, la composición despliega una faceta densa donde el haba tonka interactúa con acordes de cacao, tabaco dulce y delicados matices florales; finalmente, evoluciona hacia una base profundamente reconfortante de vainilla, ámbar dorado, madera de sándalo y almizcle.",
    principal: false,
    destacado: false,
  },
  {
    id: "Lattafa_sherif",
    marca: "Lattafa Perfumes",
    tipo: "Colonias",
    nombreCorto: "Sherif Lattafa",
    nombreCompleto: "Sherif Lattafa Perfumes",
    precio: 27000,
    imagen: "sherif lattafa 1.webp",
    galeria: ["sherif lattafa 2.webp", "sherif lattafa 3.webp"],
    perfilUso:
      "Es un aroma con gran presencia y un porte maduro y autoritario, concebido para reuniones de negocios, eventos formales, veladas nocturnas o compromisos de etiqueta donde se busque proyectar elegancia, seguridad y liderazgo. Por la calidez y densidad de sus notas orientales, amaderadas y de cuero, su mejor rendimiento se da en climas frescos o fríos (otoño e invierno) o en entornos climatizados. Es la opción ideal para quienes disfrutan de las fragancias de estilo arábigo tradicional con un perfil sobrio, duradero y de estela distinguida.",
    descripcion:
      "Sherif de Lattafa Perfumes es un eau de parfum de la familia olfativa oriental amaderada especiada que destaca por su carácter imponente, cálido y elegante. Su apertura despliega una entrada refinada con toques cítricos de bergamota, pimienta y matices aromáticos de lavanda; en el corazón, desarrolla una faceta profunda y densa donde se combinan maderas nobles como el cedro, el pachulí y un toque especiado resinoso; finalmente, evoluciona hacia una base cálida, envolvente y ligeramente ahumada dominada por el cuero, la madera de sándalo, el ámbar y la vainilla.",
    principal: false,
    destacado: true,
  },
  {
    id: "royal_blend_bourbon",
    marca: "French Avenue",
    tipo: "Perfumes",
    nombreCorto: "Royal Blend Bourbon",
    nombreCompleto: "Royal Blend Bourbon French Avenue",
    precio: 10000,
    imagen: "royal blend bourbon 2.webp",
    galeria: ["royal blend bourbon 1.webp", "royal blend bourbon 3.webp"],
    perfilUso:
      "Este perfume está orientado principalmente a climas fríos, temporadas de otoño-invierno y eventos nocturnos, donde sus notas alcohólicas, amaderadas y especiadas despliegan todo su potencial sin saturar. Es ideal para hombres y mujeres con una personalidad fuerte, segura y madura que buscan un aroma con carácter para ocasiones especiales, citas románticas formales o salidas nocturnas exclusivas. Debido a su gran potencia y densidad (habitual en concentraciones altas), se recomienda un uso medido y brilla con especial elegancia al ser acompañado de vestimenta formal o semi-formal.",
    descripcion:
      "Royal Blend Bourbon es una fragancia intensa y sofisticada de la familia olfativa amaderada especiada, concebida como una experiencia licorosa y de alta gama. Su salida destaca por un contraste audaz y original entre notas cálidas de canela, maderas y toques especiados de menta fresca y albahaca. En su corazón se revela la nota protagonista: un acorde profundo y embriagador de whisky bourbon matizado con la elegancia limpia de la lavanda. Finalmente, su fondo sella con una base robusta y magnética de madera de roble y bálsamo del Perú, otorgándole una fijación sobresaliente y una presencia oscura, madura y muy distinguida.",
    principal: true,
    destacado: false,
  },
];
