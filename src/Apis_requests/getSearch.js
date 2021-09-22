const getSearch = (query, page = 1) => (
  fetch(`https://api.themoviedb.org/3/search/multi?api_key=cc13dcde48d6e0f1b0d6dc38b6120785&language=en-US&page=${page}&include_adult=false&query=${query}`)
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => res.map(({ id, original_language, vote_average, title, overview, poster_path, genre_ids }) => {
      if (poster_path) {
        return { id, original_language, vote_average, title, genre_ids, overview, img: `https://image.tmdb.org/t/p/w500/${poster_path}` }
      } else {
        return { id, original_language, vote_average, title, genre_ids, overview, img: null }
      }
    }))
)

export default getSearch