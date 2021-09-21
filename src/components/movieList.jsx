import React, { Component } from "react";
import MovieSection from "./movieSection";


import './movieList.css'

class MovieList extends Component {
  render() {
    const { types, search } = this.props;
    return (
      <section>
        <MovieSection id="1" types={types} search={search} title="Top rated:" page={Math.ceil(Math.random() * 20)} />
        <MovieSection id="2" types={types} search={search} title="You might like:" page={Math.ceil(Math.random() * 20)} />
        <MovieSection id="3" types={types} search={search} title="Others like'd:" page={Math.ceil(Math.random() * 20)} />
        <MovieSection id="4" types={types} search={search} title="More films:" page={Math.ceil(Math.random() * 20)} />
      </section>
    );
  }
}

export default MovieList;
