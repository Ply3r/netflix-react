import React, { Component } from "react";
import getSearch from "../Apis_requests/getSearch";
import getTrending from "../Apis_requests/getTrending";
import MovieCard from "./movieCard";
import getGenrers from '../Apis_requests/getGenrers'
import './resultOfSearch.css';

class ResultOfSearch extends Component {
  constructor(props) {
    super(props);
    const { query } = this.props;
    this.addItem = this.addItem.bind(this);
    this.getNewComponent = this.getNewComponent.bind(this)
    this.updateMovies = this.updateMovies.bind(this)
    this.state = {
      query,
      page: 1,
      currentComponent: undefined,
      movies: [],
    }
  }

  componentDidMount() {
    this.getNewComponent()
  }

  getNewComponent(page = 1) {
    const { query } = this.props
    const { movies } = this.state;
    if ( query ) {
      getSearch(query, page)
        .then((arr) => {
          this.setState({ movies: movies.concat(arr) })
        })
    } else {
      getTrending(page)
        .then((arr) => {
          this.setState({ movies: movies.concat(arr) })
        })
    }
  }

  updateMovies() {
    const { query } = this.props
    getSearch(query)
      .then((arr) => {
        this.setState({ movies: arr })
      })
  }

  shouldComponentUpdate({ query }) {
    if ( query !== this.state.query) {
      this.setState({ page: 1, query, currentComponent: undefined, movies: [] })
      this.updateMovies()
    }
    return true;
  }

  addItem() {
    const { page } = this.state;
    this.setState({ page: page + 1 })
    this.getNewComponent(page + 1)
  }

  render() {
    const { types, query } = this.props
    let { movies } = this.state;
    let componentes;
    if (movies.length) {
      if (types !== 'All') {       
        movies = movies.filter(({ genre_ids }) => genre_ids ? genre_ids.includes(parseInt(types)) : '')      
      }
      movies = movies.filter(({ img }) => img)
      componentes = movies.map(({  vote_average, title, overview, img, id }) => (
          <MovieCard
            className="movie-card"
            id={id}
            title={title}
            img={img}
            overview={overview}
            vote_average={vote_average}
           />
      ));
    }

    let titulo;
    if (types !== 'All' && query) {
      titulo = getGenrers.find((item) => item[0] === parseInt(types))[1] + ' em ' + query
    } else if (types !== 'All') {
      titulo = getGenrers.find((item) => item[0] === parseInt(types))[1]
    } else {
      titulo = query
    }

    return (
      <div className="content-grid">
        <h1 className="titulo-busca">Busca por { titulo }:</h1>
        <section className="result-search-grid">
          {componentes}
          <button className="bot-add-new-films" onClick={this.addItem}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>
        </section>
      </div>
    );
  }
}

export default ResultOfSearch;