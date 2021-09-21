import React, { Component } from "react";
import Header from './components/header';
import FirstMovie from "./components/FirstMovie";
import MovieList from './components/movieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.stateUpdator = this.stateUpdator.bind(this);
    this.state = {
      search: '',
      types: '',
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
      <MovieList 
        types={types}
        search={search}
      />
      </>
    );
  }
}

export default App;
