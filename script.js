const API_KEY = "api_key=b1bb009f89a909c0ae0b65bc17104e0e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = 'https://image.tmdb.org/t/p/w500/';
const searchBtn = document.querySelector('button')


function fetchAll() {
    const input = document.querySelector('input')
    const search = input.value
    const API_URL = `${BASE_URL}/search/movie?${API_KEY}&query=${search}&page=1&include_adult=false`
    console.log(API_URL)
	fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0])
    const movie = data.results[0]
    const divRow = document.querySelector('.row')

    divRow.innerHTML = `
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <span class="card-title">${movie.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">${movie.vote_average}</i></a>
        </div>
        <div class="card-content">
            <p>${movie.overview}</p>
        </div>
      </div>
    </div>

`;
    
	})
}

searchBtn.addEventListener("click", fetchAll)

fetch("https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=b1bb009f89a909c0ae0b65bc17104e0e")
    .then(res => res.json())
    .then(data => {
        console.log('-----ETAPE 1-----', data.results)
        data.results.forEach(film => {
            const divRow = document.querySelector('.row')

            const div = document.createElement('div')
            div.className = 'col s12 m6'
            divRow.appendChild(div)

            div.innerHTML = `
                <div class="card">
                    <div class="card-image">
                        <img src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                        <span class="card-title">${film.title}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">${film.vote_average}</i></a>
                    </div>
                    <div class="card-content">
                        <p>${film.overview}</p>
                    </div>
                    
                </div>
                
            `;
        });
    });