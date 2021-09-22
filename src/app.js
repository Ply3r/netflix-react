import React, { Component } from "react";
import Header from './components/header';
import FirstMovie from "./components/FirstMovie";
import MovieList from './components/movieList';
import ResultOfSearch from "./components/ResultOfSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.stateUpdator = this.stateUpdator.bind(this);
    this.state = {
      search: '',
      types: 'All',
    }
  }

  stateUpdator(state) {
    this.setState(state)
  }

  render() {
    const { types, search } = this.state;
    return (
      <>
      <Header onClick={this.stateUpdator} />
      <FirstMovie />
      { types === 'All' && !search ? (
        <MovieList />
      ) : (
        <ResultOfSearch 
          query={search}
          types={types}
        />
      ) }
      </>
    );
  }
}

export default App;
