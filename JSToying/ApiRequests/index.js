const input = document.querySelector("#searchInput")
const movieCards = document.querySelector("#movieCards")
input.addEventListener('keyup', async function (e) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${config.MY_KEY}&language=en-US&query=${input.value}&page=1&include_adult=false`
    console.log(url)
    const res = await axios.get(url)
    console.log(res.data)
    makeImages(res.data.results)
})

const makeImages = (movies) => {
    //remove any existing images
    movieCards.innerHTML = ""
    for (let item of movies) {
        const div = document.createElement('div');
        div.classList.add('movieCard', 'col-1')
        const img = document.createElement('img');
        img.classList.add('card')
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        const title = document.createElement('p')
        title.innerText = item.title
        div.append(img, title)
        movieCards.appendChild(div)
    }
}
