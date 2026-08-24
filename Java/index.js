/*
    ===========================================================
    index.js
    ===========================================================
    Este script se usa SOLO en Index.html.
    Necesita que productos.js este cargado ANTES en el HTML,
    porque usa la constante "productos" definida alla.

    Su trabajo es llenar dos secciones del Index:
    - "Productos Principales" (sin precio)
    - "Productos Destacados"  (con precio)
    ===========================================================
*/

/*
    Funcion normal (declarada con la palabra "function") que
    recibe un numero y devuelve el texto con el simbolo de
    colones y separadores de miles. Es la misma logica que
    formatearPrecio() en catalogo.js, pero con otro nombre
    ("formatearPrecioIndex") para que no choque si algun dia
    los dos archivos se cargan juntos en la misma pagina.
*/
function formatearPrecioIndex(precio) {
  return "\u20A1" + precio.toLocaleString("es-CR");
}

/*
    Recibe un producto y un booleano "conPrecio" (true/false).
    Devuelve un elemento <article> ya armado.

    Que se use "article" y no "div" no es al azar: en el
    Index.html original las tarjetas ya estaban escritas como
    <article class="product-item">, asi que el script mantiene
    la misma etiqueta para no romper el CSS que ya existia.
*/
function crearTarjetaIndex(producto, conPrecio) {
  const articulo = document.createElement("article");
  articulo.className = "product-item";

  /*
        Aqui el template literal usa OTRO operador ternario,
        pero esta vez adentro del HTML:

        ${ conPrecio ? `<p>...</p>` : "" }

        Si "conPrecio" es true, se inserta el parrafo con el
        precio. Si es false, se inserta un texto vacio "" (no
        se agrega nada). Asi, un mismo molde de tarjeta sirve
        tanto para "Productos Principales" (sin precio) como
        para "Productos Destacados" (con precio), solo cambiando
        este segundo parametro.

        Notar que la ruta de la imagen aqui NO lleva "../" al
        inicio, porque Index.html esta en la carpeta raiz del
        proyecto (no dentro de Paginas/).

        Igual que en catalogo.js, envolvemos la imagen y el
        nombre dentro de un link <a> que manda a la pagina de
        detalle con el id del producto en la URL. Como
        Index.html esta en la raiz, la ruta hacia la pagina de
        detalle SI necesita "Paginas/" al inicio (a diferencia
        de catalogo.js, que ya esta adentro de esa carpeta).
    */
  articulo.innerHTML = `
        <a href="Paginas/Detalle_Producto.html?id=${producto.id}">
            <img
                src="Multimedia/Img/Productos/${producto.imagen}"
                alt="${producto.nombreCorto}"
                width="300"
                height="300"
            />
            <h3>${producto.nombreCorto}</h3>
        </a>
        ${conPrecio ? `<p>Precio: ${formatearPrecioIndex(producto.precio)}</p>` : ""}
    `;

  return articulo;
}

/*
    Recibe un producto y devuelve un <a> ya armado (con su
    <img> adentro), para usarlo dentro de la "pista" de un
    carrusel (#carruselPrincipales o #carruselDestacados).

    Se envuelve en un <a> -igual que en crearTarjetaIndex- para
    que al hacer click en la imagen del carrusel mande directo
    a Detalle_Producto.html con el id del producto.
*/
function crearImagenCarrusel(producto) {
  const link = document.createElement("a");
  link.href = `Paginas/Detalle_Producto.html?id=${producto.id}`;

  const img = document.createElement("img");
  img.src = `Multimedia/Img/Productos/${producto.imagen}`;
  img.alt = producto.nombreCorto;

  link.appendChild(img);

  return link;
}

/*
    Llena la "pista" de un carrusel (la fila de imagenes que se
    mueve) con los productos que le pasemos. Recibe:
    - idPista: el id del contenedor ".carrusel-visor" (por
      ejemplo "carruselPrincipales")
    - listaProductos: el arreglo de productos ya filtrado

    Importante: esta funcion solo debe llamarse ANTES de que
    corra carrusel.js (que es el que duplica las imagenes y
    arma el auto-play), asi que en el HTML el script de este
    archivo (index.js) tiene que ir cargado ANTES que
    Java/carrusel.js.
*/
function renderizarCarrusel(idPista, listaProductos) {
  const visor = document.getElementById(idPista);
  if (!visor) {
    return;
  }

  const pista = visor.querySelector(".carrusel-pista");
  if (!pista) {
    return;
  }

  pista.innerHTML = "";

  listaProductos.forEach((producto) => {
    pista.appendChild(crearImagenCarrusel(producto));
  });
}

/*
    Funcion generica para llenar CUALQUIERA de las dos secciones
    del index. Recibe:
    - selector: el selector CSS del contenedor donde se van a
      meter las tarjetas (ejemplo: "#productos-principales
      .product-container")
    - listaProductos: el arreglo de productos ya filtrado
    - conPrecio: si hay que mostrar el precio o no
*/
function renderizarSeccionIndex(selector, listaProductos, conPrecio) {
  const contenedor = document.querySelector(selector);
  if (!contenedor) {
    return;
  }

  contenedor.innerHTML = "";

  listaProductos.forEach((producto) => {
    contenedor.appendChild(crearTarjetaIndex(producto, conPrecio));
  });
}

if (typeof productos !== "undefined") {
  /*
        "filter()" es un metodo de los arreglos que crea un
        arreglo NUEVO, quedandose solo con los elementos para
        los que la funcion que le pasamos devuelve true.

        (producto) => producto.principal

        Esta funcion flecha recibe cada producto del arreglo y
        devuelve directamente el valor de su propiedad
        "principal" (true o false). Como filter() solo se queda
        con los que dan true, el resultado es un arreglo con
        UNICAMENTE los productos que tienen principal: true.

        Nota: el arreglo original "productos" NO se modifica.
        filter() siempre devuelve un arreglo aparte.
    */
  const productosPrincipales = productos.filter(
    (producto) => producto.principal,
  );
  const productosDestacados = productos.filter(
    (producto) => producto.destacado,
  );

  /*
        Aqui llamamos la funcion de renderizado dos veces: una
        para cada seccion del Index. El selector CSS combina el
        id de la seccion (agregado en el HTML) con la clase
        ".product-container" que ya existia adentro de cada
        seccion, para apuntar exactamente al div correcto.
    */
  renderizarSeccionIndex(
    "#productos-principales .product-container",
    productosPrincipales,
    false,
  );
  renderizarSeccionIndex(
    "#productos-destacados .product-container",
    productosDestacados,
    true,
  );
  /*
        Mismo filtro (principal / destacado), pero ahora para
        llenar la fila de imagenes de cada carrusel. Como esto
        corre ANTES de que carrusel.js duplique las imagenes
        (ver orden de <script> en Index.html), el carrusel ya
        arranca con los productos correctos.
    */
  renderizarCarrusel("carruselPrincipales", productosPrincipales);
  renderizarCarrusel("carruselDestacados", productosDestacados);
}
