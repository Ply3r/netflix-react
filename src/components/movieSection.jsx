import React, {Component} from "react";
import MovieCard from "./movieCard";
import getTrending from "../getTrending";
import './movieSection.css'

class MovieSection extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.state = {
      movies: '',
      position: 0,
    }
  }

  componentDidMount() {
    const { page } = this.props;
    getTrending(page).then((res) => {
      this.setState({movies: res})
    })
  }

  prev() {
    const { position } = this.state
    if (position <= 60) {
      this.setState({ position: 0 })
    } else {
      this.setState({ position: position - 70 })
    }
  }

  next() {
    const { position } = this.state
    if (position >= 170) {
      this.setState({ position: 225 })
    } else {
      this.setState({ position: position + 70 })
    }
  }

  render() {
    const { types, search, title, id } = this.props;
    let { movies } = this.state;
    let moviesList;
    if (movies.length) {

      if (types) {
        if(types !== 'All') {
          movies = movies.filter(({genre_ids}) => genre_ids.includes(parseInt(types)))
        }
      }

      if (search) {
        const lowerCase = search.toLowerCase() 
        const regex = new RegExp(lowerCase, 'gm')
        movies = movies.filter(({ title }) => {
          title = title.toLowerCase()
          return regex.test(title)
        })
      }
      
      moviesList = movies.map(({ original_language, vote_average, title, overview, img }, index) => (    
        <MovieCard 
          title={title}
          img={img}
          overview={overview}
          vote_average={vote_average}
          original_language={original_language}
        />
      ));
    }

    const { position } = this.state;

    return (
      <div className="movie-section-container">
        <h2 className="titulo">{title}</h2>
        <div className="section-container">
          <button className="button left" onClick={this.prev}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></button>
          <section className="movie-section" style={{right: `${position}%`}}>
            {moviesList}
          </section>
          <button className="button right" onClick={this.next}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>
        </div>
      </div>
    );
  }
}

export default MovieSection;