import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

import { izvjestajData } from "../data/izvjestajData";

export default class Izvjestaj extends Component {
  state = {
    izvjestaj: izvjestajData,
  };

  sortiraj = (a) => {
    let sortirani = this.state.izvjestaj;
    if (a === 1) {
      sortirani.sort(function compare(a, b) {
        if (a.artikli > b.artikli) {
          return -1;
        }
        if (a.artikli < b.artikli) {
          return 1;
        }
        return 0;
      });
    } else if (a === 2) {
      sortirani.sort(function compare(a, b) {
        if (a.karte > b.karte) {
          return -1;
        }
        if (a.karte < b.karte) {
          return 1;
        }
        return 0;
      });
    }
    if (a === 3) {
      sortirani.sort(function compare(a, b) {
        if (a.ukupno > b.ukupno) {
          return -1;
        }
        if (a.ukupno < b.ukupno) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({
      izvjestaj: sortirani,
    });
  };

  render() {
    return (
      <IzvjestajWarpper>
        <div className="izvjestaj">
          <div className="info">
            <h3>IZVJEŠTAJ ZA NAJBOLJEG RADNIKA</h3>
            <div className="kriterij">
              <input
                type="radio"
                name="a"
                value={"artikli"}
                onClick={() => this.sortiraj(1)}
              ></input>
              <label for={"artikli"}>Najviše prodanih artikli</label>
            </div>
            <div className="kriterij">
              <input
                type="radio"
                name="a"
                value={"karte"}
                onClick={() => this.sortiraj(2)}
              ></input>
              <label for={"karte"}>Najviše prodanih karata</label>
            </div>
            <div className="kriterij">
              <input
                type="radio"
                name="a"
                value={"ukupno"}
                onClick={() => this.sortiraj(3)}
              ></input>
              <label for={"ukupno"}>Ukupo i karata i artikli</label>
            </div>
          </div>
          <div className="radnici">
            <table>
              <tr>
                <th>Broj</th>
                <th>Ime i prezime</th>
                <th>Broj prodatih artikli</th>
                <th>Broj prodatih karata</th>
                <th>Ukupno</th>
              </tr>

              {this.state.izvjestaj.map((radnik, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{radnik.imeIprezime}</td>
                  <td>{radnik.artikli}</td>
                  <td>{radnik.karte}</td>
                  <td>{radnik.ukupno}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </IzvjestajWarpper>
    );
  }
}

const IzvjestajWarpper = styled.div`
  .izvjestaj {
    margin: 100px 20px;
    display: flex;
    width: 100%;
  }

  .info {
    float: left;
    clear: both;
    width: 50%;
    margin-left: 50px;
  }

  .radnici {
    float: right;
    clear: both;
    width: 50%;
    background: black;
    color: white;
    opacity: 0.8;
    margin: 20px 150px 0 0;
  }
  .radnik {
    width: 100%;
  }
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border-collapse: collapse;
    text-align: left;
  }
  tr:nth-child(even) {
    background: #ccc;
    opacity: 0.7;
    color: black;
  }
  input {
    cursor: pointer;
  }
`;
