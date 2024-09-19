window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let avisoErrores = document.querySelector(".errores");

    // Enfocar el input del título
    document.querySelector('#title').focus();

    //extraigo todos los valores del form
     // Referencias a los inputs
     const titleInput = document.getElementById('title');
     const ratingInput = document.getElementById('rating');
     const awardsInput = document.getElementById('awards');
     const releaseDateInput = document.getElementById('release_date');
     const lengthInput = document.getElementById('length');
     const genreInput = document.getElementById('genre_id');

    //variables para guardar errores y limpieza
    let errores = [];
    avisoErrores.innerHTML = "";

    formulario.addEventListener('submit', function(e) {
        
        const elementos =[titleInput, ratingInput, awardsInput, releaseDateInput, lengthInput, genreInput];
        // Limpiar clases previas de error
        elementos.forEach(input => {
            input.classList.remove('is-invalid');
        });

        const title = titleInput.value.trim();
        if (title === "") {
            if (!errores.includes("El título no puede estar vacío")) {
                errores.push("El título no puede estar vacío");
            }
            titleInput.classList.add("is-invalid");
        }else{
            titleInput.classList.add("is-valid");
        }

        // Validar Calificación (0 a 10)
        const rating = ratingInput.value;
        if (rating < 0 || rating > 10 || rating === "") {
            if (!errores.includes("La calificación debe estar entre 0 y 10")) {
                errores.push("La calificación debe estar entre 0 y 10");
            }
            ratingInput.classList.add("is-invalid");
        }else{
            ratingInput.classList.add("is-valid");
        }

        // Validar Premios (0 a 10)
        const awards = awardsInput.value;
        if (awards < 0 || awards > 10 || awards === "") {
            if (!errores.includes("Los premios deben estar entre 0 y 10")) {
                errores.push("Los premios deben estar entre 0 y 10");
            }
            awardsInput.classList.add("is-invalid");
        }else{
            awardsInput.classList.add("is-valid");
        }

        // Validar Fecha de Creación
        const releaseDate = releaseDateInput.value;
        if (releaseDate === "") {
            if (!errores.includes("La fecha de creación no puede estar vacía")) {
                errores.push("La fecha de creación no puede estar vacía");
            }
            releaseDateInput.classList.add("is-invalid");
        }else{
            releaseDateInput.classList.add("is-valid");
        }

        // Validar Duración (60 a 360 minutos)
        const length = lengthInput.value;
        if (length < 60 || length > 360 || length === "") {
            if (!errores.includes("La duración debe estar entre 60 y 360 minutos")) {
                errores.push("La duración debe estar entre 60 y 360 minutos");
            }
            lengthInput.classList.add("is-invalid");
        }else{
            lengthInput.classList.add("is-valid");
        }

        // Validar Género
        const genre = genreInput.value;
        if (genre === "") {
            if (!errores.includes("Debe seleccionar un género")) {
                errores.push("Debe seleccionar un género");
            }
            genreInput.classList.add("is-invalid");
        }else{
            genreInput.classList.add("is-valid");
        }

        // Si hay errores, mostrar alertas y prevenir el envío
        if (errores.length > 0) {
            e.preventDefault();

            const ul = document.createElement('ul');

            errores.forEach(error => {
                const li = document.createElement('li');
                li.textContent = error;
                ul.appendChild(li);
            });

            avisoErrores.classList.add("alert-warning");
            avisoErrores.appendChild(ul);
        } else {
            console.log("Formulario válido, enviando...");
        }
    });

    //aqui aplico los blur individuales, tambien puedo ingeniarme alguna forma de template
    titleInput.addEventListener("blur",()=>{
        const title = titleInput.value.trim();
        if (title === "") {
            if (!errores.includes("El título no puede estar vacío")) {
                errores.push("El título no puede estar vacío");
            }
            
            titleInput.classList.add("is-invalid");
        }else{
            titleInput.classList.add("is-valid");
        }
    });

    ratingInput.addEventListener("blur",()=>{
        const rating = ratingInput.value;
        if (rating < 0 || rating > 10 || rating === "") {
            if (!errores.includes("La calificación debe estar entre 0 y 10")) {
                errores.push("La calificación debe estar entre 0 y 10");
            }
            ratingInput.classList.add("is-invalid");
        }else{
            ratingInput.classList.add("is-valid");
        }
    })








}

