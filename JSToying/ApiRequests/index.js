const input = document.querySelector("#searchInput")
input.addEventListener('keyup', async function (e) {
    // console.log(e)
    // console.log(input.value)
    //https://api.themoviedb.org/3/search/movie?api_key=68407b9912a8a1e274ab6c168666626f&language=en-US&query=galaxy&page=1&include_adult=false
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${config.MY_KEY}&language=en-US&query=${input.value}&page=1&include_adult=false`
    console.log(url)
    const res = await axios.get(url)
    console.log(res.data)
    makeImages(res.data.results)
})

const makeImages = (movies) => {
    for (let item of movies) {
        const img = document.createElement('IMG');
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        document.body.append(img)
    }
}