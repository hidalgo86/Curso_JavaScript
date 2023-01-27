(function () {

    class DatosRemotos {

        static METODOS = {
            "post": "POST",
            "get": "GET",
            "put": "PUT",
            "delete": "DELETE"
        }

        static HEADERS = {
            "Content-type": "application/json"
        }

        static ENDPOINTS = {
            "users": "users",
            "register": "register",
            "login": "login"
        }

        API_URL = "https://reqres.in/api/";

        generarPeticion(endpoint, metodo, body) {
            let url = this.API_URL + endpoint;
            let request = new Request(url, { method: metodo, body: metodo !== DatosRemotos.METODOS.get ? JSON.stringify(body) : null, headers: this.headers });
            return request;
        }

        hacerPeticion(endpoint, metodo, body) {
            const peticion = this.generarPeticion(endpoint, metodo, body);
            let estado;
            return new Promise((resolve, reject) => {
                fetch(peticion)
                    .then((respuesta) => {
                        if (!respuesta.ok) {
                            throw new Error(`No response.ok.  Estado HTTP ${respuesta.status}`);
                        }
                        estado = respuesta.status;
                        return respuesta.json();
                    })
                    .then(datos => {
                        resolve(datos);
                    })
                    .catch(error => {
                        console.log('%c Petición falló', error);
                        reject(error);
                    });
            });
        }
    }

    const datosRemotos = new DatosRemotos();

    async function hacerGET() {
        try {
            let datos = await datosRemotos.hacerPeticion(
                DatosRemotos.ENDPOINTS.users + "?page=1",
                DatosRemotos.METODOS.get,
                {});

            console.log("%c GET - Datos recibidos:", "color: #bada55", datos);

        } catch (error) {
            console.log("Un error sucedió :( ", error)
        }
    }

    async function hacerPOST() {
        try {

            let datos = await datosRemotos.hacerPeticion(
                DatosRemotos.ENDPOINTS.users,
                DatosRemotos.METODOS.post,
                {
                    "name": "Eleanor",
                    "job": "Dev"
                });

            console.log("%c POST - Datos recibidos:", "color: #bada55", datos);

        } catch (error) {
            console.log("Un error sucedió :( ", error)
        }
    }

    async function hacerPUT() {
        try {

            let datos = await datosRemotos.hacerPeticion(
                DatosRemotos.ENDPOINTS.users,
                DatosRemotos.METODOS.put,
                {
                    "name": "Eleanor",
                    "job": "Dev"
                });

            console.log("%c PUT - Datos recibidos:", "color: #bada55", datos);

        } catch (error) {
            console.log("Un error sucedió :( ", error)
        }
    }
    
    hacerGET();
    hacerPOST();
    hacerPUT();

}());

