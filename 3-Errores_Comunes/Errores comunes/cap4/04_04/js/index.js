(function () {

    /**
     * Puedes ir a http://www.omdbapi.com/apikey.aspx y solicitar tu propia key
     */
    const KEY_API = "key";

    const btn = document.getElementById("buscar-btn");

    const contenedorPeliculas = document.getElementById("lista-peliculas");

    function hacerBusqueda(titulo) {

        console.log("%c Título: ", "color: yellow", titulo);

        titulo = encodeURIComponent(titulo);

        let url = `http://www.omdbapi.com/?s=${titulo}&apikey=${KEY_API}`;

        let estado;

        fetch(url)
            .then((respuesta) => {

                console.log(respuesta);

                if (!respuesta.ok) {
                    throw new Error(`No response.ok.  Estado HTTP ${respuesta.status}`);
                }

                estado = respuesta.status;
                return respuesta.json();
            })
            .then(datos => {

                console.log("datos: ", datos);

                if (datos.Response === "False") {
                    throw new Error(`No hay resultados`);
                }
                if (estado === 200) {
                    generarListaTitulos(datos);
                } else {
                    new Error({ estado, info: datos });
                }
            })
            .catch(error => {
                console.log('%c La petición falló: ', "color: red", error);
            });
    }

    function limpiarContenedor() {
        while (contenedorPeliculas.children.length > 0) {
            contenedorPeliculas.removeChild(contenedorPeliculas.children[0]);
        }
    }

    function generarListaTitulos(peliculas) {

        limpiarContenedor();

        if (peliculas.Search) {
            peliculas.Search.forEach(pelicula => {
                crearTitulo(pelicula);
            })
        }

    }

    function crearTitulo(pelicula) {

        const nombre = document.createElement("h2");
        nombre.innerHTML = pelicula.Title;

        const anno = document.createElement("h3");
        anno.innerHTML = `Año de estreno: ${pelicula.Year}`;

        const tipo = document.createElement("h4");
        tipo.innerHTML = `Tipo: ${pelicula.Type === 'movie' ? "Película" : pelicula.Type === 'serie' ? "Serie" : "Episodio"}`;

        const contenedorTexto = document.createElement("div");
        contenedorTexto.className = "texto-pelicula";
        contenedorTexto.appendChild(nombre);
        contenedorTexto.appendChild(anno);
        contenedorTexto.appendChild(tipo);

        const cartel = document.createElement("img");
        cartel.src = pelicula.Poster;

        const contenedor = document.createElement("div");
        contenedor.className = "contenedor-pelicula";
        contenedor.appendChild(cartel);
        contenedor.appendChild(contenedorTexto);

        contenedorPeliculas.appendChild(contenedor);
    }



    btn.addEventListener("click", () => {
        let titulo = document.getElementById("titulo").value;
        hacerBusqueda(titulo);
    });



}());

