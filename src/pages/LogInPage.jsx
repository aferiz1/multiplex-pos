import React, { Component } from "react";

import styled from "styled-components";

import { logInData } from "../data/logInData";
import pic from "../Images/login.jpg";

export default class LogInPage extends Component {
  state = {
    userName: "",
    password: "",
  };
  provjeriPodatke = () => {
    if (this.state.userName === "admin" && this.state.userName === "admin") {
      window.localStorage.setItem("loggedIn", true);
      window.location.href = "page3";
    } else {
      document.getElementById("p").style.display = "block";
      this.setState({
        userName: "",
        password: "",
      });
    }
  };

  updateUserName = (evt) => {
    this.setState({
      userName: evt.target.value,
    });
  };

  updatePassword = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  };

  render() {
    return (
      <LogInWarrper>
        <p>Prijavite se na vaš MULTIPLEX račun</p>
        <div>
          <label for="uname">Korisničko ime:</label>
          <input
            value={this.state.userName}
            onChange={this.updateUserName}
            type="text"
            placeholder="Upišite korisničko ime"
            name="uname"
            required
          />
        </div>

        <div>
          <label for="psw">Lozinka:</label>
          <input
            value={this.state.password}
            onChange={this.updatePassword}
            type="password"
            placeholder="Upišite lozinku"
            name="psw"
            required
          />
        </div>
        <div id="p" className="poruka">
          Unijeli ste pogrešno korisničko ime ili lozinku.
        </div>
        <button type="submit" onClick={() => this.provjeriPodatke()}>
          Prijava
        </button>
      </LogInWarrper>
    );
  }
}

const LogInWarrper = styled.div`
  width: 40%;
  height: 500px;
  margin: auto;
  filter: grayscale(50%);
  background: url(${pic});
  color: white;

  p {
    font-size: 30px;
    color: white;
    text-align: center;
    margin: 35px 0;
    padding: 35px 0px;
  }
  input {
    width: 95%;
    padding: 12px 20px;
    margin: 8px 5px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  label {
    margin: 10px 5px;
    font-size: 1.3rem;
  }

  button {
    background-color: #cfe08c;
    color: white;
    padding: 14px 20px;
    margin: 20px 0px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
  }
  button:hover {
    opacity: 0.8;
    color: black;
    font-weight: bold;
  }
  .poruka {
    background: white;
    opacity: 0.7;
    color: red;
    font-size: 1.2rem;
    width: 90%;
    margin: 10px 5px;
    padding: 5px;
    display: none;
  }
`;
