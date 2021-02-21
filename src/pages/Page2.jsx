import React, { Component } from "react";
import styled from "styled-components";
import Bcg from "../Images/cinema.jpg";

import { GiHeartWings } from "react-icons/gi";
import { GrLinkPrevious } from "react-icons/gr";
import { RiSave3Line } from "react-icons/ri";

import { Link } from "react-router-dom";

export default class Page2 extends Component {
  constructor() {
    super();
    let alminaRiznica = window.localStorage.getItem("alminaRiznica");
    if (alminaRiznica) {
      this.state.clicked = JSON.parse(alminaRiznica);
    }
  }
  state = {
    clicked: [],
  };

  isClicked = (i) => {
    let index = this.state.clicked.indexOf(i);
    if (index != -1) {
      this.state.clicked.splice(index, 1);
    } else {
      this.state.clicked.push(i);
    }
    window.localStorage.setItem(
      "alminaRiznica",
      JSON.stringify(this.state.clicked)
    );
    this.setState({
      clicked: this.state.clicked,
    });
  };

  render() {
    const ROW_COUNT = 5;
    const COLUMN_COUNT = 11;
    return (
      <Page2Wrapper>
        <div className="up">
          <div className="hall">
            <div className="letters">
              <div className="letter">A</div>
              <div className="letter">B</div>
              <div className="letter">C</div>
              <div className="letter">D</div>
              <div className="letter">E</div>
              <div className="letter">F</div>
            </div>
            <div className="right">
              <p>~Odabir sjedišta~</p>
              <div className="seats">
                <div className="row">
                  <div className="cubs">
                    {[...Array(ROW_COUNT)].map((e, j) => (
                      <div
                        className={`${
                          this.state.clicked.includes(j) ? "cub-l-c" : "cub-l"
                        }`}
                        onClick={() => this.isClicked(j)}
                        key={j}
                      >
                        <GiHeartWings />
                      </div>
                    ))}
                  </div>
                </div>
                {[...Array(ROW_COUNT)].map((f, i) => (
                  <div className="row">
                    <div className="cubs">
                      {" "}
                      {[...Array(COLUMN_COUNT)].map((e, j) => (
                        <div
                          className={`${
                            this.state.clicked.includes(
                              i * COLUMN_COUNT + ROW_COUNT + j + 1
                            )
                              ? "cub-c"
                              : "cub"
                          }`}
                          onClick={() =>
                            this.isClicked(i * COLUMN_COUNT + ROW_COUNT + j + 1)
                          }
                          key={j}
                        >
                          {j + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="legend">
            <div className="a">
              <div className="z"> </div>
              <p className="b">Slobodno </p>
            </div>
            <div className="a">
              <div className="c"> </div>
              <p className="b">Zauzeto</p>
            </div>
          </div>
        </div>

        <div className="icons-a">
          <RiSave3Line />
          <Link to="/page3">
            <GrLinkPrevious className="icon-a" />
          </Link>
        </div>
      </Page2Wrapper>
    );
  }
}

const Page2Wrapper = styled.div`
  .hall {
    width: 60%;
    height: 430px;
    background-color: var(--mainGrey);
    margin-left: 70px;
    margin-top: 70px;
    filter: grayscale(50%);
    clear: both;
  }
  .up {
    width: 100%;
    display: flex;
  }

  .a {
    display: flex;
    margin-top: 20px;
    filter: grayscale(50%);
  }
  .b {
    height: 30px;
    box-sizing: border-box;
    padding: 0 0 10px 0;
    margin: 0;
  }
  .c {
    background: red;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 7px 0 0 30px;
  }

  .z {
    background: #318e0d;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 7px 0 0 30px;
  }
  .legend {
    width: 20%;
    float: right;
    background-color: var(--mainGrey);
    height: 170px;
    margin: 70px 0 0 50px;
  }
  .letters {
    width: 2%;
    float: left;
    clear: both;
    margin-top: 70px;
    margin-right: 0;
    box-sizing: border-box;
    padding-left: 70px;
    display: absolute;
  }

  .letter {
    display: block;
    margin-bottom: 28px;
    font-size: 1.2rem;
  }
  .seats {
    margin: auto;
    width: 80%;
    height: 350px;
    background: url(${Bcg});
    background-size: cover;
  }

  .right {
    float: right;
    width: 90%;
    margin-top: 20px;
  }
  p {
    width: 50%;
    font-size: 1.7rem;
    text-align: center;
    margin: auto;
    box-sizing: border-box;
  }
  .row {
    width: 80%;
    height: 30px;
    margin: auto;
    display: flex;
    padding-top: 20px;
  }

  .cubs {
    margin: auto;
  }
  .cub {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #318e0d;
    margin-left: 12px;
    text-align: center;
    color: white;
    cursor: pointer;
  }

  .cub-c {
    background: red;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 12px;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  .cub-c:hover {
    opacity: 0.7;
  }
  .cub:hover {
    opacity: 0.7;
  }
  .cub-l {
    display: inline-block;
    width: 70px;
    height: 25px;
    background: #318e0d;
    margin-left: 15px;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cub-l-c {
    display: inline-block;
    width: 70px;
    height: 25px;
    background: red;
    margin-left: 15px;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cub-l:hover {
    opacity: 0.7;
  }

  .icons-a {
    font-size: 3rem;
    color: black;
    margin-left: 60px;
    display: flex;
  }
  .icon-a {
    margin-left: 20px;
  }

  .button {
    font-size: 2rem;
    margin-left: 900px;
    background: black;
    color: white;
    padding: 5px;
    height: 48px;
    cursor: pointer;
  }

  .button:hover {
    background: white;
    color: black;
  }
`;
