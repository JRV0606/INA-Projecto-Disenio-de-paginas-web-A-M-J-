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
if (botonFiltros && panelFiltros)
{
    /*
        "addEventListener" le dice al elemento: "cuando pase
        el evento 'click' (cuando lo hagan clic), ejecuta esta
        funcion". La funcion que le pasamos aqui es una
        FUNCION FLECHA (arrow function): una forma corta de
        escribir una funcion, con parentesis, la flecha "=>"
        y despues el codigo entre llaves.

        () => { ... }   es lo mismo que   function () { ... }
    */
    botonFiltros.addEventListener("click", () =>
    {
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
        if (texto)
        {
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
function formatearPrecio(precio)
{
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
    Esta funcion recibe UN objeto "producto" (uno de los que
    estan dentro del arreglo productos) y devuelve un elemento
    HTML ya armado, listo para meter en la pagina.
*/
function crearTarjetaCatalogo(producto)
{
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
                src="../Multimedia/Img/${producto.imagen}"
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
    arreglo completo, o una parte filtrada) y dibuja una
    tarjeta por cada uno dentro de la seccion .product-catalog.
*/
function renderizarCatalogo(listaProductos)
{
    const contenedor = document.querySelector(".product-catalog");

    /*
        Si esta funcion se llegara a ejecutar en una pagina que
        NO tiene ".product-catalog" (por ejemplo si algun dia
        se reutiliza este archivo en otra pagina), "contenedor"
        seria null y "return" corta la funcion aqui mismo para
        no seguir intentando trabajar con algo que no existe.
    */
    if (!contenedor)
    {
        return;
    }

    /*
        Vaciamos el contenedor antes de dibujar, por si esta
        funcion se llegara a ejecutar mas de una vez (por
        ejemplo con una futura busqueda o filtro), para no
        duplicar tarjetas.
    */
    contenedor.innerHTML = "";

    /*
        "forEach" recorre CADA elemento del arreglo y ejecuta la
        funcion flecha una vez por cada uno. "producto" (el
        nombre entre parentesis) es el elemento actual en cada
        vuelta del recorrido.

        "appendChild" agrega un elemento HTML como hijo de otro,
        es decir, lo mete adentro visualmente en la pagina.
    */
    listaProductos.forEach((producto) =>
    {
        contenedor.appendChild(crearTarjetaCatalogo(producto));
    });
}

/*
    "typeof productos !== 'undefined'" comprueba que la
    constante "productos" SI exista antes de usarla. Esto es
    una proteccion extra: si por error alguien carga este
    archivo sin haber cargado productos.js antes, el script no
    se rompe con un error, simplemente no hace nada.
*/
if (typeof productos !== "undefined")
{
    renderizarCatalogo(productos);
}
