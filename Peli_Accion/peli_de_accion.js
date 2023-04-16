// Función para obtener datos de las API de TMDb y actualizar la página con la información de las seis películas de acción más valoradas
function obtenerDatosPeliculas() {
    // Llamada a la API de TMDb para obtener la información de las seis películas de acción más valoradas
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=71fd9eceae3ba5b0a483b1f99ef576b3&language=es&sort_by=vote_average.desc&vote_count.gte=1000&with_genres=28')
        .then(response => response.json())
        .then(data => {
            // Obtener la imagen y sinopsis de la primera película
            const imagenURL1 = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
            const sinopsis1 = data.results[0].overview;
            // Obtener la imagen y sinopsis de la segunda película
            const imagenURL2 = `https://image.tmdb.org/t/p/w500/${data.results[1].poster_path}`;
            const sinopsis2 = data.results[1].overview;
            // Obtener la imagen y sinopsis de la tercera película
            const imagenURL3 = `https://image.tmdb.org/t/p/w500/${data.results[2].poster_path}`;
            const sinopsis3 = data.results[2].overview;
            // Obtener la imagen y sinopsis de la cuarta película
            const imagenURL4 = `https://image.tmdb.org/t/p/w500/${data.results[3].poster_path}`;
            const sinopsis4 = data.results[3].overview;
            // Obtener la imagen y sinopsis de la quinta película
            const imagenURL5 = `https://image.tmdb.org/t/p/w500/${data.results[4].poster_path}`;
            const sinopsis5 = data.results[4].overview;
            // Obtener la imagen y sinopsis de la sexta película
            const imagenURL6 = `https://image.tmdb.org/t/p/w500/${data.results[5].poster_path}`;
            const sinopsis6 = data.results[5].overview;

            // Actualizar la imagen y sinopsis en los elementos HTML correspondientes para las seis películas
            const imagen1 = document.querySelector('#uno-img');
            const sinopsisElement1 = document.querySelector('#uno-text');
            imagen1.src = imagenURL1;
            sinopsisElement1.textContent = sinopsis1;
            
            const imagen2 = document.querySelector('#dos-img');
            const sinopsisElement2 = document.querySelector('#dos-text');
            imagen2.src = imagenURL2;
            sinopsisElement2.textContent = sinopsis2;
            
            const imagen3 = document.querySelector('#tres-img');
            const sinopsisElement3 = document.querySelector('#tres-text');
            imagen3.src = imagenURL3;
            sinopsisElement3.textContent = sinopsis3;
            
            const imagen4 = document.querySelector('#cuatro-img');
            const sinopsisElement4 = document.querySelector('#cuatro-text');
            imagen4.src = imagenURL4;
            sinopsisElement4.textContent = sinopsis4;
            
            const imagen5 = document.querySelector('#cinco-img');
            const sinopsisElement5 = document.querySelector('#cinco-text');
            imagen5.src = imagenURL5;
            sinopsisElement5.textContent = sinopsis5;
            
            const imagen6 = document.querySelector('#seis-img');
            const sinopsisElement6 = document.querySelector('#seis-text');
            imagen6.src = imagenURL6;
            sinopsisElement6.textContent = sinopsis6;
        })
        .catch(error => console.error(error));
}

// Llamar a la función para obtener los datos de las películas al cargar la página
obtenerDatosPeliculas();