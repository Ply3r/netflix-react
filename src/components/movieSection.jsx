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
          <button className="button left" onClick={this.prev}>ᐸ</button>
          <section className="movie-section" style={{right: `${position}%`}}>
            {moviesList}
          </section>
          <button className="button right" onClick={this.next}>ᐳ</button>
        </div>
      </div>
    );
  }
}

export default MovieSection;