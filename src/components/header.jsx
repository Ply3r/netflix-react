import React, { Component } from "react";
import './header.css';
import Search from "./Search";

class Header extends Component {
  constructor() {
    super();
    this.exportSearch = this.exportSearch.bind(this);
    this.formChange = this.formChange.bind(this);
    this.state = {
      search: '',
      types: 'All',
    }
  }

  exportSearch() {
    const { onClick } = this.props;
    onClick(this.state)
    this.setState({
      search: '',
    });
  }

  formChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { search, types } = this.state;
    return (
      <header>
        <h1>NETFLIX</h1>
        <div className="search-header">
          <Search
            search={search}
            types={types}
            formChange={this.formChange}
          />
          <button onClick={this.exportSearch}>Buscar</button>
        </div>
      </header>
    );
  }
}

export default Header;
