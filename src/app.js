import React, { Component } from "react";
import Header from './components/header';
import FirstMovie from "./components/FirstMovie";
import MovieList from './components/movieList';
import ResultOfSearch from "./components/ResultOfSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.typeUpdate = this.typeUpdate.bind(this);
    this.state = {
      search: '',
      types: 'All',
    }
  }

  searchUpdate({ search }) {
    this.setState({ search })
  }

  typeUpdate(types) {
    this.setState({ types })
  }

  render() {
    const { types, search } = this.state;
    return (
      <>
      <Header searchUpdate={this.searchUpdate} typeUpdate={this.typeUpdate} />
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
