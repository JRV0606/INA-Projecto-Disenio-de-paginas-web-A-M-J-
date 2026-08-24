/*
    ===========================================================
    contacto.js
    ===========================================================
    Este script se usa SOLO en Contacto.html.

    Este sitio NO tiene un servidor propio que reciba y envie
    correos (eso se llama "backend"), asi que el formulario no
    puede "enviarse" solo como pasaria en una pagina real de
    una empresa grande. En vez de eso, cuando la persona
    presiona "Enviar Mensaje", abrimos el COMPOSITOR DE GMAIL
    en una pestana nueva del navegador, con el correo del
    negocio ya puesto en "Para", y el asunto y mensaje ya
    escritos, listos para que la persona solo revise y
    presione "Enviar" desde su propia cuenta de Gmail.

    Nota: se eligio abrir Gmail directamente (en vez de usar un
    link "mailto:") porque "mailto:" depende de que la
    computadora tenga una aplicacion de correo instalada y
    configurada como predeterminada (por ejemplo Outlook). Si
    no la tiene, al hacer clic no pasa nada y parece que el
    boton esta roto. Abrir Gmail en el navegador SI funciona
    siempre, sin necesidad de tener nada instalado.
    ===========================================================
*/

/*
    Correo del negocio a donde debe llegar el mensaje. Esta en
    una constante aparte para que, si el dia de manana cambia,
    solo haya que editarlo en un solo lugar.
*/
const CORREO_NEGOCIO = "celestialwoods12@gmail.com";

/*
    Buscamos el formulario por su clase (no tiene id en el
    HTML). Si en algun momento se borra o se cambia de nombre
    en el HTML, "formulario" quedaria en null y el "if" de mas
    abajo evita que el script se rompa.
*/
const formulario = document.querySelector(".contact-form");

if (formulario)
{
    /*
        "submit" es el evento que se dispara cuando alguien
        presiona el boton de enviar de un formulario (o le da
        Enter dentro de un campo de texto).
    */
    formulario.addEventListener("submit", (evento) =>
    {
        /*
            "preventDefault" cancela el comportamiento normal
            del formulario, que seria recargar la pagina e
            intentar mandar los datos a la URL que diga el
            atributo "action" (que aqui ni siquiera existe).
            Al cancelarlo, podemos decidir nosotros mismos que
            hacer con los datos: en este caso, abrir Gmail.
        */
        evento.preventDefault();

        /*
            Buscamos cada campo del formulario por su id y
            leemos lo que la persona escribio con ".value".
            Si el campo esta vacio, ".value" simplemente es un
            texto vacio "".
        */
        const nombre = document.querySelector("#nombre").value;
        const correoRemitente = document.querySelector("#email").value;
        const asunto = document.querySelector("#subject").value;
        const mensaje = document.querySelector("#message").value;

        /*
            Armamos el ASUNTO del correo. Si la persona escribio
            algo en el campo "Asunto", lo usamos. Si lo dejo
            vacio, usamos un asunto por defecto para que el
            correo nunca llegue sin titulo.

            El operador "||" aqui funciona como "si lo de la
            izquierda es un texto vacio (que cuenta como falso),
            usa lo de la derecha en su lugar".
        */
        const asuntoFinal = asunto || "Consulta desde el sitio web";

        /*
            Armamos el CUERPO del correo (el mensaje completo).
            Juntamos el nombre y el correo de la persona que
            escribe, junto con su mensaje, para que el negocio
            sepa quien la esta contactando y como responderle,
            aunque el correo llegue desde la cuenta de Gmail que
            haya iniciado sesion en el navegador.

            "\n" es un SALTO DE LINEA dentro de un texto: hace
            que lo siguiente aparezca en una linea nueva.
        */
        const cuerpo =
            "Nombre: " + nombre + "\n" +
            "Correo de contacto: " + correoRemitente + "\n\n" +
            mensaje;

        /*
            Esta es la URL oficial de Google para abrir el
            compositor de Gmail directamente desde un link,
            sin pasar por la bandeja de entrada:

            https://mail.google.com/mail/?view=cm&fs=1
                &to=...    -> destinatario
                &su=...    -> asunto (subject)
                &body=...  -> cuerpo del mensaje

            "encodeURIComponent" convierte el texto a un formato
            seguro para viajar dentro de una URL (cambia
            espacios, saltos de linea, acentos, etc. por sus
            codigos correspondientes). Es obligatorio hacerlo
            con el asunto y el cuerpo, porque pueden tener
            espacios, comas y tildes.
        */
        const gmailLink =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + encodeURIComponent(CORREO_NEGOCIO) +
            "&su=" + encodeURIComponent(asuntoFinal) +
            "&body=" + encodeURIComponent(cuerpo);

        /*
            "window.open(url, '_blank')" abre la URL en una
            PESTANA NUEVA del navegador (en vez de reemplazar
            la pagina actual), para que la persona no pierda de
            vista el sitio de Celestial & Woods.
        */
        window.open(gmailLink, "_blank");
    });
}
