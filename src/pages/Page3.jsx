import React, { Component } from "react";

import styled from "styled-components";

import { dataMovies } from "../data/dataMoviesSedmicno";

import { BsFillTrash2Fill } from "react-icons/bs";
import { AiTwotonePrinter } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { RiSave3Line } from "react-icons/ri";

import { Link } from "react-router-dom";

import Header from "./Header";

export default class Page3 extends Component {
  state = {
    filmovi: dataMovies,
    prikazi: dataMovies,
    racun: [],
    sedmica: [
      "ponedjeljak",
      "utorak",
      "srijeda",
      "četvrtak",
      "petak",
      "subota",
      "nedjelja",
    ],
  };
  poruka = (ime) => {
    let upit =
      "Odabrali ste film: " +
      ime +
      "\nPrikazivanje filma u 13:00h \nSala: 2 \nBroj sjedišta: 17A \nDa li ste sigurni?";
    window.confirm(upit);
  };

  sortiraj = (d) => {
    this.state.sedmica.map((dan) => {
      document.getElementById(`${dan}`).classList.remove("selected");
    });

    document.getElementById(`${d}`).classList.add("selected");
    let sortirani = [];
    this.state.filmovi.map((film) => {
      if (film.daniPrikazivanja.includes(d)) {
        sortirani.push(film);
      }
    });
    this.setState({
      prikazi: sortirani,
    });
  };
  render() {
    return (
      <Page3Warrper>
        <div className="dani">
          {this.state.sedmica.map((dan) => (
            <div
              id={`${dan}`}
              className="dan"
              onClick={() => this.sortiraj(`${dan}`)}
            >
              {dan}
            </div>
          ))}
        </div>
        <div className="allMovies">
          {this.state.prikazi.map((movie) => (
            <div className="film">
              <div className="slika">
                <img src={movie.url} alt="movie" width="70px" height="100px" />
              </div>
              <div className="info">
                <div>{movie.title}</div>
                <div className="termini">
                  Termini:
                  {movie.termins.map((termin, i) => (
                    <div className="termin">
                      <input type="radio" name="a" value={`${termin}`}></input>
                      <label for={`${termin}`}>{termin}</label>
                    </div>
                  ))}
                </div>
                <Link to="/page2">
                  <button className="sjedista">Odaberi sjedište</button>
                </Link>
                <br></br>
                <AiTwotonePrinter
                  className="icon"
                  onClick={() => this.poruka(movie.title)}
                />
              </div>
            </div>
          ))}
        </div>
      </Page3Warrper>
    );
  }
}

const Page3Warrper = styled.div`
  margin-top: 80px;

  .dani {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .dan {
    display: inline-block;
    width: 12%;
    background-color: var(--mainGrey);
    margin: 5px;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    padding: 5px 0;
    border-radius: 5%;
    cursor: pointer;
  }
  .allMovies {
    width: 100%;
    display: inline-block;
    margin-left: 110px;
  }

  .film {
    width: 40%;
    display: inline-block;
    background: var(--mainGrey);
    margin: 5px;
    height: 150px;
    border-radius: 5%;
  }

  .slika {
    float: left;
    clear: both;
    margin: 15px;
  }
  .termini {
    width: 100%;
  }
  .termin {
    display: inline-block;
    margin: 2px;
    background: var(--lightGrey);
    border-radius: 15%;
    padding: 3px;
    cursor: pointer;
  }
  .info {
    margin-top: 15px;
  }
  p {
    margin: auto;
  }
  .sjedista {
    cursor: pointer;
  }
  .icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .selected {
    background: #c07e7e;
  }
`;
