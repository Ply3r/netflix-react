import React, { Component } from "react";
import PropTypes from 'prop-types'
import getGenres from './../getGenrers'
import './search.css'

class Search extends Component {
  render() {
    const genres = getGenres.map((names) => (
      <option value={names[0]}>{names[1]}</option>
    ))
    const { search, types, formChange } = this.props;
    
      
    return (
      <div className="search-container">
        <select
          name="types"
          id="search"
          value={types}
          onChange={formChange}
        >
          <option value="All">Todos</option>
           {genres}
        </select>
        <input 
          type="text" 
          name="search" 
          value={search} 
          onChange={formChange} 
          placeholder="Search films"
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  formChange: PropTypes.func.isRequired,
}

export default Search;
