import React, {Component} from "react";
import MovieCard from "./movieCard";
import getTrending from "../getTrending";
import './movieSection.css'

class MovieSection extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    const { id } = this.props;
    this.state = {
      movies: '',
      positionOfArray: 0,
      array: [`comeco${id}`, `meio${id}`, `fim${id}`],
    }
  }

  componentDidMount() {
    const { page } = this.props;
    getTrending(page).then((res) => {
      this.setState({movies: res})
    })
  }

  prev() {
    const { positionOfArray, array } = this.state;
    if (positionOfArray <= 0) {
      this.setState({ positionOfArray: array.length - 1 })
    } else {
      this.setState({ positionOfArray: positionOfArray - 1 })
    }
  }

  next() {
    const { positionOfArray, array } = this.state;
    if (positionOfArray >= array.length - 1) {
      this.setState({ positionOfArray: 0 })
    } else {
      this.setState({ positionOfArray: positionOfArray + 1 })
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
      
      moviesList = movies.map(({ original_language, vote_average, title, overview, img }, index) => {
        let arrayContent;
        if (index === 0) {
          arrayContent = 'comeco' + id
        } else if (index === Math.round(movies.length / 2)) {
          arrayContent = 'meio' + id
        } else if (index === movies.length - 1) {
          arrayContent = 'fim' + id
        }
        return( <MovieCard 
          id={arrayContent}
          title={title}
          img={img}
          overview={overview}
          vote_average={vote_average}
          original_language={original_language}
        />)
      })
    }
    const { array, positionOfArray } = this.state;

    return (
      <div className="movie-section-container">
        <h2 className="titulo">{title}</h2>
        <div className="section-container">
          <a className="button left" href={`#${array[positionOfArray]}`} onClick={this.prev}>ᐸ</a>
          <section className="movie-section">
            {moviesList}
          </section>
          <a className="button right" href={`#${array[positionOfArray]}`} onClick={this.next}>ᐳ</a>
        </div>
      </div>
    );
  }
}

export default MovieSection;