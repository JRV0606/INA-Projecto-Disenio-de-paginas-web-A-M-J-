/*
    ===========================================================
    catalogo.js
    ===========================================================
    Este script se usa SOLO en Catalogo_Productos.html.
    Necesita que productos.js este cargado ANTES en el HTML,
    porque usa la constante "productos" definida alla.
    ===========================================================
*/

/*
    "document" es un objeto global que representa toda la
    pagina HTML. "document.querySelector('#algo')" busca DENTRO
    del HTML el primer elemento que tenga ese id (los ids se
    escriben con # adelante, igual que en CSS) y nos devuelve
    ese elemento para poder trabajar con el desde JavaScript.

    Si no existe ningun elemento con ese id, querySelector
    devuelve "null" (nada).
*/
const botonFiltros = document.querySelector("#abrir-filtros");
const panelFiltros = document.querySelector("#panel-filtros");

/*
    Este "if" comprueba que las dos constantes de arriba SI
    hayan encontrado su elemento (que no sean null). En
    JavaScript, "null" se comporta como "false" dentro de un
    if, entonces si alguno de los dos no existe, todo el
    bloque de adentro se salta y no da error.
*/
if (botonFiltros && panelFiltros) {
  /*
        "addEventListener" le dice al elemento: "cuando pase
        el evento 'click' (cuando lo hagan clic), ejecuta esta
        funcion". La funcion que le pasamos aqui es una
        FUNCION FLECHA (arrow function): una forma corta de
        escribir una funcion, con parentesis, la flecha "=>"
        y despues el codigo entre llaves.

        () => { ... }   es lo mismo que   function () { ... }
    */
  botonFiltros.addEventListener("click", () => {
    /*
            "classList" es la lista de clases CSS que tiene un
            elemento. "toggle('visible')" AGREGA la clase
            "visible" si no la tenia, o la QUITA si ya la tenia.
            Ademas, toggle() devuelve true si la clase quedo
            puesta, o false si quedo quitada. Por eso lo
            guardamos en la constante "visible".
        */
    const visible = panelFiltros.classList.toggle("visible");

    /*
            "setAttribute" cambia (o crea) un atributo HTML del
            elemento. Aqui actualizamos "aria-expanded", que le
            dice a los lectores de pantalla (accesibilidad) si
            el panel de filtros esta abierto o cerrado.

            "String(visible)" convierte el booleano true/false
            en el texto "true"/"false", porque los atributos
            HTML siempre son texto.
        */
    botonFiltros.setAttribute("aria-expanded", String(visible));

    /*
            Buscamos el <span> que esta DENTRO del boton de
            filtros (el texto "Mostrar filtros" / "Ocultar
            filtros") para poder cambiar su texto.
        */
    const texto = botonFiltros.querySelector("span");
    if (texto) {
      /*
                "textContent" es el texto que se ve dentro de un
                elemento. Aqui usamos un OPERADOR TERNARIO:

                condicion ? valorSiEsVerdadero : valorSiEsFalso

                Es un "if" corto escrito en una sola linea.
            */
      texto.textContent = visible ? "Ocultar filtros" : "Mostrar filtros";
    }
  });
}

/*
    ===========================================================
    Renderizado dinamico del catalogo de productos.

    "Renderizar" significa: tomar datos (el arreglo productos)
    y construir con ellos el HTML que se ve en pantalla, en vez
    de escribir ese HTML a mano.
    ===========================================================
*/

/*
    "function nombre(parametro) { ... }" declara una funcion
    normal (no flecha), reutilizable. Esta funcion recibe un
    numero (precio) y devuelve un texto ya formateado con el
    simbolo de colones y separadores de miles.
*/
function formatearPrecio(precio) {
  /*
        "\u20A1" es el codigo Unicode del simbolo colon (₡).
        Se escribe asi (en vez del simbolo directo) para evitar
        problemas de codificacion de caracteres en el archivo.

        "toLocaleString('es-CR')" es un metodo de los numeros
        que los convierte a texto usando el formato de un pais
        o idioma especifico. Con "es-CR" (espanol de Costa Rica)
        el numero 100000 se convierte en el texto "100,000",
        con la coma como separador de miles.

        El "+" entre los dos junta (concatena) ambos textos en
        uno solo.
    */
  return "\u20A1" + precio.toLocaleString("es-CR");
}

/*
    Convierte la primera letra de un texto en mayuscula. Se usa
    para que las etiquetas de las marcas (que en productos.js
    estan en minuscula, ej: "dior") se vean bien en el HTML,
    ej: "Dior".
*/
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/*
    Esta funcion recibe UN objeto "producto" (uno de los que
    estan dentro del arreglo productos) y devuelve un elemento
    HTML ya armado, listo para meter en la pagina.
*/
function crearTarjetaCatalogo(producto) {
  /*
        "document.createElement('div')" crea un elemento nuevo
        <div></div> en memoria. Todavia no se ve en la pagina,
        solo existe como un objeto de JavaScript hasta que lo
        agreguemos con appendChild (mas abajo).
    */
  const tarjeta = document.createElement("div");

  /*
        "className" asigna la clase CSS del elemento, igual que
        escribir class="product-item" en HTML.
    */
  tarjeta.className = "product-item";

  /*
        "dataset" permite leer o escribir atributos personalizados
        que empiezan con "data-" en el HTML. Aqui:
        tarjeta.dataset.tipo = "colonias"
        es lo mismo que escribir en HTML:
        <div data-tipo="colonias">
        Esto sirve para que, si en el futuro se agregan filtros
        en JavaScript, se pueda leer el tipo/marca/precio de
        cada tarjeta directamente desde el HTML generado.
    */
  tarjeta.dataset.tipo = producto.tipo;
  tarjeta.dataset.marca = producto.marca;
  tarjeta.dataset.precio = producto.precio;

  /*
        "innerHTML" reemplaza TODO el contenido de un elemento
        por el texto/HTML que le demos. Aqui usamos un TEMPLATE
        LITERAL: un texto escrito entre comillas invertidas
        ( ` ` en vez de ' ' o " " ) que permite:

        1. Escribir el texto en varias lineas tal cual (sin
           tener que usar \n).
        2. Insertar variables adentro del texto usando ${...}.
           Por ejemplo, ${producto.id} se reemplaza por el
           valor real de producto.id (por ejemplo "sauvage").

        El link apunta a "Detalle_Producto.html?id=..." para
        que detalle.js despues sepa que producto mostrar.
    */
  tarjeta.innerHTML = `
        <a href="Detalle_Producto.html?id=${producto.id}">
            <img
                src="../Multimedia/Img/Productos/${producto.imagen}"
                alt="${producto.nombreCorto}"
                width="200"
                height="200"
            />
            <h2>${producto.nombreCorto}</h2>
        </a>
        <p>Precio: ${formatearPrecio(producto.precio)}</p>
    `;

  /*
        "return" entrega el elemento ya armado a quien haya
        llamado esta funcion (en este caso, renderizarCatalogo).
    */
  return tarjeta;
}

/*
    Esta funcion recibe un ARREGLO de productos (puede ser el
    arreglo completo, o una parte filtrada/paginada) y dibuja
    una tarjeta por cada uno dentro de la seccion .product-catalog.
*/
function renderizarCatalogo(listaProductos) {
  const contenedor = document.querySelector(".product-catalog");

  /*
        Si esta funcion se llegara a ejecutar en una pagina que
        NO tiene ".product-catalog" (por ejemplo si algun dia
        se reutiliza este archivo en otra pagina), "contenedor"
        seria null y "return" corta la funcion aqui mismo para
        no seguir intentando trabajar con algo que no existe.
    */
  if (!contenedor) {
    return;
  }

  /*
        Vaciamos el contenedor antes de dibujar, porque esta
        funcion se ejecuta cada vez que cambia un filtro o de
        pagina, para no duplicar tarjetas.
    */
  contenedor.innerHTML = "";

  /*
        Si, despues de aplicar los filtros, no queda ningun
        producto, mostramos un mensaje en vez de dejar el
        catalogo vacio y sin explicacion.
    */
  if (listaProductos.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.className = "catalogo-sin-resultados";
    mensaje.textContent =
      "No se encontraron productos con los filtros seleccionados.";
    contenedor.appendChild(mensaje);
    return;
  }

  /*
        "forEach" recorre CADA elemento del arreglo y ejecuta la
        funcion flecha una vez por cada uno. "producto" (el
        nombre entre parentesis) es el elemento actual en cada
        vuelta del recorrido.

        "appendChild" agrega un elemento HTML como hijo de otro,
        es decir, lo mete adentro visualmente en la pagina.
    */
  listaProductos.forEach((producto) => {
    contenedor.appendChild(crearTarjetaCatalogo(producto));
  });
}

/*
    ===========================================================
    Filtros del catalogo (buscador, precio, tipo y marca)
    ===========================================================

    Idea general: en vez de que cada filtro dibuje el catalogo
    por su cuenta, TODOS los filtros llaman a la misma funcion
    "aplicarFiltros()". Esa funcion junta el valor actual de
    cada filtro, recorta el arreglo "productos" completo segun
    esos valores, y guarda el resultado en "productosFiltrados".
    Despues, "renderizarPagina()" se encarga de mostrar solo el
    pedazo de "productosFiltrados" que corresponde a la pagina
    actual.
*/

/*
    "let" (en vez de "const") porque el contenido de estas dos
    variables SI cambia con el tiempo: cada vez que el usuario
    escribe en el buscador, marca un checkbox, o cambia de
    pagina.
*/
let productosFiltrados =
  typeof productos !== "undefined" ? productos.slice() : [];
let paginaActual = 1;

/*
    Cuantas tarjetas de producto se muestran por pagina. Se deja
    como una sola constante arriba para poder ajustarla facil
    si en el futuro se agregan mas productos.
*/
const PRODUCTOS_POR_PAGINA = 8;

/*
    ===========================================================
    Checkboxes de marca generados automaticamente
    ===========================================================
    En vez de escribir a mano en el HTML cada marca (lo que
    facilmente se desactualiza si se agrega o quita un producto
    en productos.js), este bloque LEE las marcas que en verdad
    existen dentro del arreglo "productos" y arma un checkbox
    por cada una.
*/
/*
    ===========================================================
    Rango de precio inicial calculado desde los datos reales
    ===========================================================
    Los inputs de precio minimo/maximo traian valores fijos en
    el HTML (1 y 1000) que no correspondian a los precios reales
    de los productos (que estan en colones, ej: 100000). Si se
    dejaban asi, en cuanto el usuario tocara cualquier filtro,
    el precio maximo (1000) dejaba fuera a casi todos los
    productos. Por eso, al cargar la pagina, se ajustan esos
    inputs para que cubran el precio mas bajo y mas alto que
    existan de verdad en productos.js.
*/
if (typeof productos !== "undefined" && productos.length > 0) {
  const inputPrecioMin = document.querySelector(
    '.filtro-precio[data-tipo="min"]',
  );
  const inputPrecioMax = document.querySelector(
    '.filtro-precio[data-tipo="max"]',
  );

  const precios = productos.map((producto) => producto.precio);
  const precioMasBajo = Math.min(...precios);
  const precioMasAlto = Math.max(...precios);

  if (inputPrecioMin) {
    inputPrecioMin.value = precioMasBajo;
    inputPrecioMin.min = 0;
  }
  if (inputPrecioMax) {
    inputPrecioMax.value = precioMasAlto;
    inputPrecioMax.min = 0;
  }
}

const contenedorMarcas = document.querySelector("#marcas-container");

if (contenedorMarcas && typeof productos !== "undefined") {
  /*
        "producto.marca.toLowerCase()" pasa el texto de la marca
        a minusculas, para que "Afnan" y "afnan" (que en
        productos.js estan escritas distinto) cuenten como la
        MISMA marca y no aparezcan dos checkboxes repetidos.

        "new Set([...])" recibe un arreglo y elimina los valores
        repetidos, quedandose solo con uno de cada marca.
        "[...unSet]" convierte ese Set de vuelta en un arreglo
        normal para poder usar sort() y forEach().

        "sort()" ordena el arreglo alfabeticamente.
    */
  const marcasUnicas = [
    ...new Set(productos.map((producto) => producto.marca.toLowerCase())),
  ].sort();

  /*
        Checkbox especial "Todas": si el usuario lo marca, se
        desmarcan las demas marcas y el filtro de marca no
        recorta nada (se ven todas).
    */
  let htmlMarcas = `
        <input class="filter-checkbox" data-grupo="marca" type="checkbox" id="todas-marca" value="todas" />
        <label for="todas-marca">Todas</label>
    `;

  marcasUnicas.forEach((marca) => {
    /*
            Se usa la marca (en minuscula, sin espacios) como id
            del checkbox, con el prefijo "marca-" para que nunca
            choque con otro id de la pagina (por ejemplo, no
            podria haber dos elementos con id="dior").
        */
    const idCheckbox = `marca-${marca}`;
    htmlMarcas += `
            <input class="filter-checkbox" data-grupo="marca" type="checkbox" id="${idCheckbox}" value="${marca}" />
            <label for="${idCheckbox}">${capitalizar(marca)}</label>
        `;
  });

  /*
        Se agrega este HTML DESPUES del titulo "Marcas:" que ya
        estaba escrito en el HTML original (por eso se usa
        "insertAdjacentHTML" con "beforeend" y no "innerHTML",
        que hubiera borrado ese titulo).
    */
  contenedorMarcas.insertAdjacentHTML("beforeend", htmlMarcas);
}

/*
    Recibe un selector CSS (por ejemplo ".filter-checkbox[data-grupo='tipo']")
    y devuelve un arreglo SOLO con los "value" de los checkboxes
    que esten marcados, sin contar el checkbox "todas" (porque
    "todas" no es un valor para filtrar, es una forma de decir
    "no filtrar por esto").
*/
function obtenerValoresMarcados(selector) {
  /*
        "document.querySelectorAll" es como querySelector, pero
        en vez de devolver el PRIMER elemento que coincide,
        devuelve TODOS los que coinciden.

        "Array.from(...)" convierte ese resultado en un arreglo
        normal, para poder usar filter() y map() sobre el.
    */
  return Array.from(document.querySelectorAll(selector))
    .filter((casilla) => casilla.checked && casilla.value !== "todas")
    .map((casilla) => casilla.value);
}

/*
    Junta el valor actual de TODOS los filtros (buscador, precio,
    tipo y marca), recorre "productos" completo, y deja en
    "productosFiltrados" solo los que cumplen con todos ellos a
    la vez.
*/
function aplicarFiltros() {
  if (typeof productos === "undefined") {
    return;
  }

  const campoBusqueda = document.querySelector("#search");
  const texto = campoBusqueda ? campoBusqueda.value.trim().toLowerCase() : "";

  const inputMin = document.querySelector('.filtro-precio[data-tipo="min"]');
  const inputMax = document.querySelector('.filtro-precio[data-tipo="max"]');

  /*
        "Number(...)" convierte el texto del input a numero. Si
        el input esta vacio o con un valor invalido, Number
        devuelve NaN ("Not a Number"), y por eso se usa "|| 0" /
        "|| Infinity" como respaldo: si el minimo no es un
        numero valido se usa 0 (sin piso), y si el maximo no es
        valido se usa Infinity (sin techo).
    */
  const precioMin = inputMin ? Number(inputMin.value) || 0 : 0;
  const precioMax = inputMax ? Number(inputMax.value) || Infinity : Infinity;

  const tiposSeleccionados = obtenerValoresMarcados(
    '.filter-checkbox[data-grupo="tipo"]',
  );
  const marcasSeleccionadas = obtenerValoresMarcados(
    '.filter-checkbox[data-grupo="marca"]',
  );

  productosFiltrados = productos.filter((producto) => {
    const coincideTexto =
      texto === "" ||
      producto.nombreCorto.toLowerCase().includes(texto) ||
      producto.nombreCompleto.toLowerCase().includes(texto) ||
      producto.marca.toLowerCase().includes(texto);

    const coincidePrecio =
      producto.precio >= precioMin && producto.precio <= precioMax;

    /*
            Si el usuario no marco ningun checkbox de tipo (el
            arreglo esta vacio), o marco "Todas", no se filtra
            por tipo: pasan todos los productos.
        */
    const coincideTipo =
      tiposSeleccionados.length === 0 ||
      tiposSeleccionados.includes(producto.tipo);

    const coincideMarca =
      marcasSeleccionadas.length === 0 ||
      marcasSeleccionadas.includes(producto.marca.toLowerCase());

    return coincideTexto && coincidePrecio && coincideTipo && coincideMarca;
  });

  /*
        Cada vez que cambia un filtro, se vuelve a la pagina 1.
        Tiene sentido: si el usuario estaba en la pagina 3 y el
        nuevo filtro deja solo 2 productos, ya no existiria una
        "pagina 3" a la que mostrar.
    */
  paginaActual = 1;
  renderizarPagina();
}

/*
    ===========================================================
    Paginacion
    ===========================================================
*/

/*
    Dibuja SOLO el pedazo de "productosFiltrados" que le toca a
    la pagina actual, y despues actualiza los botones de
    paginacion (numeros, y si "anterior"/"siguiente" deben
    verse deshabilitados).
*/
function renderizarPagina() {
  /*
        "Math.ceil" redondea siempre HACIA ARRIBA. Se usa aqui
        para que, por ejemplo, 9 productos con 4 por pagina den
        3 paginas (2 completas + 1 con lo que sobra), en vez de
        redondear hacia abajo y perder ese ultimo producto.

        "Math.max(1, ...)" asegura que, aunque no haya ningun
        producto filtrado, siempre exista al menos "1 pagina"
        (para no dividir entre 0 mas abajo).
    */
  const totalPaginas = Math.max(
    1,
    Math.ceil(productosFiltrados.length / PRODUCTOS_POR_PAGINA),
  );

  if (paginaActual > totalPaginas) {
    paginaActual = totalPaginas;
  }

  /*
        "slice(inicio, fin)" recorta un arreglo entre dos
        posiciones SIN modificar el arreglo original. Por
        ejemplo, con PRODUCTOS_POR_PAGINA = 4 y paginaActual = 2:
        inicio = 4, entonces se recortan las posiciones 4,5,6,7
        (los productos numero 5 al 8).
    */
  const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const productosPagina = productosFiltrados.slice(
    inicio,
    inicio + PRODUCTOS_POR_PAGINA,
  );

  renderizarCatalogo(productosPagina);
  renderizarControlesPaginacion(totalPaginas);
}

/*
    Reconstruye por completo la lista de botones de paginacion
    (< 1 2 3 >) segun cuantas paginas hay en total y cual es la
    pagina activa en este momento.
*/
function renderizarControlesPaginacion(totalPaginas) {
  const lista = document.querySelector(".paginacion-lista");

  if (!lista) {
    return;
  }

  lista.innerHTML = "";

  /*
        Boton "anterior" ( < ). Se deshabilita cuando ya estamos
        en la primera pagina, para que no se pueda retroceder
        mas alla del inicio.
    */
  const liAnterior = document.createElement("li");
  const btnAnterior = document.createElement("button");
  btnAnterior.type = "button";
  btnAnterior.id = "btn-pagina-anterior";
  btnAnterior.setAttribute("aria-label", "Página anterior");
  btnAnterior.innerHTML = "&lt;";
  btnAnterior.disabled = paginaActual === 1;
  btnAnterior.addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual = paginaActual - 1;
      renderizarPagina();
    }
  });
  liAnterior.appendChild(btnAnterior);
  lista.appendChild(liAnterior);

  /*
        Un boton numerado por cada pagina disponible (1, 2, 3...).
        Al que coincide con "paginaActual" se le pone la clase
        "pagina-activa" para que se vea resaltado, igual que en
        el HTML original.
    */
  for (let numero = 1; numero <= totalPaginas; numero++) {
    const li = document.createElement("li");
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className =
      numero === paginaActual ? "btn-pagina pagina-activa" : "btn-pagina";
    boton.dataset.page = String(numero);
    boton.textContent = String(numero);
    boton.addEventListener("click", () => {
      paginaActual = numero;
      renderizarPagina();
    });
    li.appendChild(boton);
    lista.appendChild(li);
  }

  /*
        Boton "siguiente" ( > ). Se deshabilita cuando ya estamos
        en la ultima pagina.
    */
  const liSiguiente = document.createElement("li");
  const btnSiguiente = document.createElement("button");
  btnSiguiente.type = "button";
  btnSiguiente.id = "btn-pagina-siguiente";
  btnSiguiente.setAttribute("aria-label", "Página siguiente");
  btnSiguiente.innerHTML = "&gt;";
  btnSiguiente.disabled = paginaActual === totalPaginas;
  btnSiguiente.addEventListener("click", () => {
    if (paginaActual < totalPaginas) {
      paginaActual = paginaActual + 1;
      renderizarPagina();
    }
  });
  liSiguiente.appendChild(btnSiguiente);
  lista.appendChild(liSiguiente);
}

/*
    ===========================================================
    Conectar los filtros con "aplicarFiltros()"
    ===========================================================
*/

const campoBusqueda = document.querySelector("#search");
if (campoBusqueda) {
  /*
        El evento "input" se dispara cada vez que el texto del
        campo cambia (cada letra que se escribe o se borra), a
        diferencia de "change", que solo se dispara cuando el
        campo pierde el foco.
    */
  campoBusqueda.addEventListener("input", aplicarFiltros);
}

/*
    Los dos inputs numericos de precio (minimo y maximo)
    comparten la clase ".filtro-precio", asi que se recorren
    juntos con "querySelectorAll" y se les agrega el mismo
    evento a los dos.
*/
document.querySelectorAll(".filtro-precio").forEach((input) => {
  input.addEventListener("input", aplicarFiltros);
});

/*
    Todos los checkboxes de filtro (tanto los de tipo como los
    de marca) se escuchan juntos aqui, usando el atributo
    "data-grupo" para separarlos por grupo cuando haga falta.

    Logica del checkbox "Todas" dentro de cada grupo:
    - Si se marca "Todas", se desmarcan los demas checkboxes de
      ESE MISMO grupo (no tendria sentido tener "Todas" y
      "Perfumes" marcados a la vez).
    - Si se marca cualquier otro checkbox del grupo, se desmarca
      "Todas" de ese grupo (porque ya no se quieren TODAS, se
      quiere solo una parte).
*/
document.querySelectorAll(".filter-checkbox").forEach((casilla) => {
  casilla.addEventListener("change", () => {
    const grupo = casilla.dataset.grupo;
    const casillasDelGrupo = document.querySelectorAll(
      `.filter-checkbox[data-grupo="${grupo}"]`,
    );

    if (casilla.value === "todas" && casilla.checked) {
      casillasDelGrupo.forEach((otra) => {
        if (otra !== casilla) {
          otra.checked = false;
        }
      });
    } else if (casilla.checked) {
      casillasDelGrupo.forEach((otra) => {
        if (otra.value === "todas") {
          otra.checked = false;
        }
      });
    }

    aplicarFiltros();
  });
});

/*
    "typeof productos !== 'undefined'" comprueba que la
    constante "productos" SI exista antes de usarla. Esto es
    una proteccion extra: si por error alguien carga este
    archivo sin haber cargado productos.js antes, el script no
    se rompe con un error, simplemente no hace nada.

    Este es el dibujado inicial: se muestra la pagina 1 con 
    todos los productos, sin ningun filtro aplicado todavia.
*/
if (typeof productos !== "undefined") {
  renderizarPagina();
}
