import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import { rezervacijeData } from "../data/rezervacijeData";
import { BsFillTrash2Fill } from "react-icons/bs";
import { AiTwotonePrinter } from "react-icons/ai";

export default class Rezervacije extends Component {
  state = {
    rezervacije: rezervacijeData,
    prikazi: rezervacijeData,
    trazi: "",
  };
  poruka1 = (id) => {
    let upit = "Da li ste sigurni da želite račun za odabranu rezervaciju?";
    if (window.confirm(upit)) {
      this.obrisiRezervaciju(id);
    }
  };
  poruka2 = (id) => {
    let upit = "Da li ste sigurni da želite obrisati rezervaciju?";
    if (window.confirm(upit)) {
      this.obrisiRezervaciju(id);
    }
  };
  obrisiRezervaciju = (id) => {
    let filtrirani = [];
    this.state.rezervacije.map((r) => {
      if (r.id !== id) {
        filtrirani.push(r);
      }
    });
    this.setState({
      rezervacije: filtrirani,
      prikazi: filtrirani,
    });
  };
  iskoristiRezervaciju = (id) => {
    this.obrisiRezervaciju(id);
  };
  azuriraj = (evt) => {
    let searchTerm = evt.target.value;
    let filtrirani = [];
    this.state.rezervacije.map((r) => {
      if (
        searchTerm == "" ||
        r.ime.toUpperCase().includes(searchTerm.toUpperCase())
      ) {
        filtrirani.push(r);
      }
    });
    this.setState({
      prikazi: filtrirani,
      trazi: searchTerm,
    });
  };

  render() {
    return (
      <RezervacijeWarpper>
        <div className="rez">
          <input
            value={this.state.trazi}
            onChange={this.azuriraj}
            className="search"
            type="text"
            placeholder="Pretraži.."
            required
          />
          <div>
            {this.state.prikazi.map((r) => (
              <div className="r">
                <p> Šifra: {r.ime}</p>
                <p> Naziv filma: {r.title}</p>
                <p> Termin: {r.termin}</p>
                <p> Sala: {r.sala}</p>
                <p>Sjediste: {r.sjediste}</p>
                <BsFillTrash2Fill
                  onClick={() => this.poruka2(r.id)}
                  className="icon"
                />
                <AiTwotonePrinter
                  onClick={() => this.poruka1(r.id)}
                  className="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </RezervacijeWarpper>
    );
  }
}

const RezervacijeWarpper = styled.div`
  .rez {
    margin-top: 70px;
  }
  .r {
    background: var(--mainGrey);
    display: inline-block;
    width: 20%;
    margin: 4px;
    padding: 0 20px;
    border-radius: 5%;
  }
  .icon {
    font-size: 1.6rem;
    margin: 2px;
    cursor: pointer;
  }

  .search {
    margin: 10px;
    height: 40px;
  }
`;
