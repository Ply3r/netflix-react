import React, { Component } from "react";
import MovieSection from "./movieSection";


import './movieList.css'

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.addSection = this.addSection.bind(this)
    this.state = {
      id: 5,
      newSections: [],
      loading: false,
    }
  }

  addSection() {
    const { id, newSections } = this.state;
    this.setState({ 
      id: id + 1,
      newSections: [...newSections, <MovieSection id="1" title="Others films:" page={Math.ceil(Math.random() * 100)} />]
    })
  }

  render() {
    const { newSections } = this.state;
    return (
      <section className="movies-sections-container-movielist">
        <MovieSection id="1" title="Top rated:" page={Math.ceil(Math.random() * 100)} />
        <MovieSection id="2" title="You might like:" page={Math.ceil(Math.random() * 100)} />
        <MovieSection id="3" title="Others like'd:" page={Math.ceil(Math.random() * 100)} />
        <MovieSection id="4" title="More films:" page={Math.ceil(Math.random() * 100)} />
        { newSections }
        <button className="bot-add-new-films" onClick={this.addSection}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>
      </section>
    );
  }
}

export default MovieList;
