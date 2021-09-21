import React, { Component } from "react";
import './movieCard.css'

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.showImagem = this.showImagem.bind(this)
    this.closeImagem = this.closeImagem.bind(this)
    this.state = {
      showCard: 'none',
    }
  }

  showImagem() {
    this.setState({ showCard: 'flex' })
  }

  closeImagem() {
    this.setState({ showCard: 'none' })
  }

  render() {
    const { vote_average, title, overview, img, id } = this.props;
    return (
      <>
      <div id={id}>
        <div className="imagem-defalt" style={{backgroundImage: `url(${img})`}} onClick={this.showImagem} ></div>
      </div>
      <div className="imagem-hiden" style={{display: this.state.showCard}}>
        <div className="imagem-dentro-do-bgl" style={{backgroundImage: `url(${img})`}}>
          <p onClick={this.closeImagem} className="close">X</p>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <p className="paragrafo">{overview}</p>
          <h2>Rating: <span className="rating">{vote_average}</span></h2>
        </div>
      </div>
      </>
    );
  }
}

export default MovieCard;
