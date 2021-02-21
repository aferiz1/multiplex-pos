import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

export default class Header extends Component {
  state = {
    niz: ["karte", "hip", "izvjestaj", "rezervacija", "help"],
  };
  aktiviraj = (d) => {
    this.state.niz.map((a) => {
      document.getElementById(a).classList.remove("z");
    });

    document.getElementById(d).classList.add("z");
  };
  render() {
    return (
      <HeaderWarpper>
        <div>
          <ul>
            <Link to="page3">
              <li
                id="karte"
                className="k"
                onClick={() => this.aktiviraj("karte")}
              >
                Prodaja karata
              </li>
            </Link>
            <Link to="page1">
              <li id="hip" className="k " onClick={() => this.aktiviraj("hip")}>
                Hrana i piće
              </li>
            </Link>
            <Link to="page5">
              <li
                id="rezervacija"
                className="k"
                onClick={() => this.aktiviraj("rezervacija")}
              >
                Rezervacije
              </li>
            </Link>
            <Link to="page4">
              <li
                id="izvjestaj"
                className="k"
                onClick={() => this.aktiviraj("izvjestaj")}
              >
                Izvještaj
              </li>
            </Link>
            <Link to="page6">
              <li
                id="help"
                className="k"
                onClick={() => this.aktiviraj("help")}
              >
                <BsQuestionCircle id="i" />
              </li>
            </Link>
            <li className="g">
              Prijavljeni <br></br>ste kao: admin
            </li>
            <Link to="">
              <li
                id="login"
                className="k s"
                onClick={() => {
                  window.localStorage.removeItem("loggedIn");
                  window.location.href = "http://localhost:3000";
                }}
              >
                Odjavi
                <AiOutlineLogout className="i" />
              </li>
            </Link>
          </ul>
        </div>
      </HeaderWarpper>
    );
  }
}

const HeaderWarpper = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  background: #333;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.7rem;
    margin-left: 3px;
    cursor: pointer;
  }

  li:hover {
    background-color: white;
    color: black;
  }

  .active {
    background-color: #4caf50;
  }
  .z {
    background-color: white;
    color: black;
  }
  .s {
    font-size: 1.2rem;
  }
  .i {
    margin-left: 5px;
    margin-top: 5px;
  }
  .g {
    margin-left: 300px;
    font-size: 0.7rem;
  }
  .g:hover {
    background-color: #333;
    color: white;
  }
`;
