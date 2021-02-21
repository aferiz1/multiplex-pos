import React, { Component } from "react";
import styled from "styled-components";

import { dataDrinks } from "../data/dataDrinks";
import { dataMovies } from "../data/dataMovies";
import { dataFood } from "../data/dataFood";
import { dataSpecial } from "../data/dataSpecial";

import { BsFillTrash2Fill } from "react-icons/bs";
import { AiTwotonePrinter } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { RiSave3Line } from "react-icons/ri";
import { GrLinkPrevious } from "react-icons/gr";

import { Link } from "react-router-dom";

import Header from "./Header";

export default class Page1 extends Component {
  state = {
    drinks: dataDrinks,
    movies: dataMovies,
    food: dataFood,
    specials: dataSpecial,
    articles: [],
    sum: 0,
    id: 0,
  };
  poruka = () => {
    let upit =
      "Da li ste sigurni da ste odabrali sve artikle i da želite račun?";
    if (window.confirm(upit)) {
      this.deleteAll();
    }
  };
  poruka2 = () => {
    let upit = "Da li ste sigurni da želite obrisati sve artikle?";
    if (window.confirm(upit)) {
      this.deleteAll();
    }
  };
  //   dodajemo, brišemo piće

  addDrink = (id) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.drinks.map((drink) => {
      if (drink.id === id) {
        drink.quantity++;
        tempArticle.push({
          id: this.state.id,
          title: drink.title,
          price: drink.price,
        });
        this.state.id++;
        tempSum += drink.price;
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };

  removeDrink = (id, title) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.drinks.map((drink) => {
      if (drink.title === title) {
        if (drink.quantity !== 0) {
          drink.quantity--;
          let foundIndex = tempArticle.findIndex(
            (element) => element.title === drink.title
          );
          tempSum -= drink.price;
          console.log(foundIndex);
          tempArticle.splice(foundIndex, 1);
        }
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };
  removeArticle = (id, title) => {
    var tempSum = 0;
    var filteredArticle = this.state.articles.filter(
      (article) => article.id !== id
    );
    filteredArticle.map((article) => {
      tempSum += article.price;
    });

    this.setState({
      articles: filteredArticle,
      sum: tempSum,
    });
    this.state.drinks.map((drink) => {
      if (drink.title === title) {
        drink.quantity--;
        return;
      }
    });

    this.state.food.map((f) => {
      if (f.title === title) {
        f.quantity--;
        return;
      }
    });
  };

  //   dodajemo/brišemo hranu

  addFood = (id) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.food.map((f) => {
      if (f.id === id) {
        f.quantity++;
        tempArticle.push({
          id: this.state.id,
          title: f.title,
          price: f.price,
        });
        this.state.id++;
        tempSum += f.price;
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };

  removeFood = (id, title) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.food.map((f) => {
      if (f.id === id) {
        if (f.quantity != 0) {
          f.quantity--;
          let foundIndex = tempArticle.findIndex(
            (element) => element.title == f.title
          );
          tempSum -= f.price;
          console.log(foundIndex);
          tempArticle.splice(foundIndex, 1);
        }
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };

  //dodajemo/brišemo special
  addSpecial = (id) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.specials.map((f) => {
      if (f.id === id) {
        f.quantity++;
        tempArticle.push({
          id: this.state.id,
          title: f.title,
          price: f.price,
        });
        this.state.id++;
        tempSum += f.price;
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };

  removeSpecial = (id, title) => {
    var tempArticle = this.state.articles;
    var tempSum = this.state.sum;
    this.state.specials.map((f) => {
      if (f.id === id) {
        if (f.quantity != 0) {
          f.quantity--;
          let foundIndex = tempArticle.findIndex(
            (element) => element.title == f.title
          );
          tempSum -= f.price;
          console.log(foundIndex);
          tempArticle.splice(foundIndex, 1);
        }
      }
    });
    this.setState({
      articles: tempArticle,
      sum: tempSum,
    });
  };
  // brišemo sve sa računa

  deleteAll = () => {
    this.state.drinks.map((drink) => {
      drink.quantity = 0;
    });
    this.state.food.map((f) => {
      f.quantity = 0;
    });
    this.state.specials.map((f) => {
      f.quantity = 0;
    });
    var tempArticles = [];
    this.setState({
      sum: 0,
      articles: tempArticles,
    });
  };

  switchTab = (newTab) => {
    document.getElementById("hrana").classList.remove("selected");
    document.getElementById("pice").classList.remove("selected");
    document.getElementById("special").classList.remove("selected");

    document.getElementById(newTab).classList.add("selected");

    document.getElementById("hrana-k").classList.remove("selected-k");
    document.getElementById("pice-k").classList.remove("selected-k");
    document.getElementById("special-k").classList.remove("selected-k");

    document.getElementById(`${newTab}-k`).classList.add("selected-k");
  };
  render() {
    return (
      <Page1Warpper>
        <div className="track">
          {this.state.movies.map((movie) => (
            <div
              className="movie-frame"
              style={{ backgroundColor: `${movie.col}` }}
            >
              <div className="movie-img">
                <img src={movie.url} alt="movie" width="70px" height="100px" />
              </div>
            </div>
          ))}
        </div>
        <div className="items">
          <div className="cart-component">
            <p
              id="hrana"
              onClick={() => this.switchTab("hrana")}
              className="cart"
            >
              Hrana
            </p>
            <p
              id="pice"
              onClick={() => this.switchTab("pice")}
              className="cart selected"
            >
              Piće
            </p>
            <p
              id="special"
              onClick={() => this.switchTab("special")}
              className="cart"
            >
              Specijalne ponude
            </p>
          </div>
          <div id="pice-k" className="item selected-k">
            <p className="title">Piće</p>

            {this.state.drinks.map((drink) => (
              <div className="frame">
                <div className="image">
                  <img src={drink.url} alt="drink" width="70px" height="70px" />
                </div>

                <p className="price">{drink.price} KM</p>
                <div className="quantity">
                  <p
                    className="button"
                    onClick={() => this.removeDrink(drink.id, drink.title)}
                  >
                    -{" "}
                  </p>
                  <p id="quantity">{drink.quantity}</p>
                  <p className="button" onClick={() => this.addDrink(drink.id)}>
                    {" "}
                    +
                  </p>
                </div>
              </div>
            ))}
            <div>
              <GrLinkPrevious className="lijeva" />
              <GrLinkNext className="desna" />
            </div>
          </div>
          <div id="hrana-k" className="item">
            <p className="title">Hrana</p>

            {this.state.food.map((f) => (
              <div className="frame">
                <div className="image">
                  <img src={f.url} alt="food" width="70px" height="70px" />
                </div>

                <p className="price">{f.price} KM</p>
                <div className="quantity">
                  <p
                    className="button"
                    onClick={() => this.removeFood(f.id, f.title)}
                  >
                    -{" "}
                  </p>
                  <p id="quantity">{f.quantity}</p>
                  <p className="button" onClick={() => this.addFood(f.id)}>
                    {" "}
                    +
                  </p>
                </div>
              </div>
            ))}
            <div>
              <GrLinkPrevious className="lijeva" />
              <GrLinkNext className="desna" />
            </div>
          </div>
          <div id="special-k" className="item">
            <p className="title">Spacijalne ponude</p>
            {this.state.specials.map((f) => (
              <div className="frame">
                <div className="image">
                  <img src={f.url} alt="food" width="80px" height="50px" />
                </div>

                <p className="price">{f.price} KM</p>
                <div className="quantity">
                  <p
                    className="button"
                    onClick={() => this.removeSpecial(f.id, f.title)}
                  >
                    -{" "}
                  </p>
                  <p id="quantity">{f.quantity}</p>
                  <p className="button" onClick={() => this.addSpecial(f.id)}>
                    {" "}
                    +
                  </p>
                </div>
              </div>
            ))}{" "}
            <div>
              <GrLinkPrevious className="lijeva" />
              <GrLinkNext className="desna" />
            </div>
          </div>
        </div>
        <div className="bill-frame">
          <p className="title">Račun</p>
          <div className="articles">
            {this.state.articles.map((articl) => (
              <div className="article-d">
                <p className="article-p">{articl.title}</p>
                <div className="a">
                  <p className="b">{articl.price} KM </p>
                  <BsFillTrash2Fill
                    className="b"
                    onClick={() => this.removeArticle(articl.id, articl.title)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="bill-footer">
            <p className="bill-p">Ukupno: </p>
            <p className="bill-p">{this.state.sum} KM</p>
            <BsFillTrash2Fill
              className="bill-p icon"
              onClick={() => this.poruka2()}
            />
            <AiTwotonePrinter
              className="bill-p icon"
              onClick={() => this.poruka()}
            />
          </div>
        </div>
      </Page1Warpper>
    );
  }
}

const Page1Warpper = styled.div`
  .track {
    margin-top: 80px;
    width: 100%;
    height: 130px;
    display: flex;
    margin-bottom: 10px;
  }
  .movie-frame {
    width: 15%;
    display: inline-block;
    clear: both;
    margin-right: 20px;
    margin-left: 10px;
    border-radius: 5%;
  }
  .info {
    margin-top: 15px;
    float: right;
    width: 50%;
    display: absolute;
    font-size: 0.8rem;
    text-align: left;
    margin-left: 0;
    margin-right: 5px;
  }
  .movie-img {
    margin: 15px 55px;
  }
  .items {
    margin-left: 50px;
    width: 60%;
    height: 50%;
    clear: both;
    display: inline-block;
    padding: 10px;
    border-radius: 5%;
    margin-top: 5px;
  }

  .cart-component {
    float: left;
    clear: both;
  }
  .cart {
    width: 220px;
    height: 40px;
    background: var(--mainGrey);
    padding-top: 3px;
    padding-left: 15px;
    border-radius: 5%;
    box-sizing: border-box;
    font-size: 1.5rem;
    vertical-align: middle;
    margin-top: 10px;
    cursor: pointer;
  }

  .selected {
    background-color: #c07e7e;
  }
  .cart:hover {
    opacity: 0.9;
  }

  .img {
    margin: auto;
  }

  .item {
    float: right;
    width: 400px;
    height: 350px;
    background: var(--mainGrey);
    border-radius: 5%;
    display: none;
  }
  .selected-k {
    display: block;
    float: right;
    width: 400px;
    height: 350px;
    background: var(--mainGrey);
    border-radius: 5%;
    margin-right: 50px;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }

  .frame {
    width: 22%;
    background: var(--lightGrey);
    display: inline-block;
    padding: 10px;
    text-align: center;
    margin-left: 18px;
    border-radius: 5%;
    margin-top: 5px;
  }

  .image {
    width: 80px;
    height: 70px;
  }
  .price {
    text-align: center;
  }
  .quantity {
    display: flex;
    padding: 0;
    vertical-align: middle;
  }
  .button {
    background: var(--mainGrey);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding-bottom: 3px;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.9s opacity;
  }
  .button:hover {
    opacity: 0.6;
  }
  p,
  .button {
    margin: auto;
  }
  .bill-frame {
    width: 25%;
    height: 350px;
    background: var(--mainGrey);
    float: right;
    margin-right: 100px;
    border-radius: 5%;
    margin-top: 17px;
  }

  .bill-footer {
    display: flex;
    width: 100%auto;
    margin-right: 10px;
  }
  .articles {
    width: 90%;
    height: 270px;
    margin-left: 17px;
  }

  .article-d {
    display: flex;
    background: var(--lightGrey);
    margin-bottom: 2px;
  }

  .article-p {
    display: inline-block;
    width: 70%;
  }
  .a {
    width: 40%;
    display: inline-block;
  }
  .b {
    cursor: pointer;
    width: 50%;
    display: inline-block;
  }

  .icons-a {
    margin-top: 270px;
    font-size: 3rem;
  }
  .icon-a {
    margin-left: 20px;
  }

  .bill-p {
    display: inline-block;
    font-size: 1.3rem;
  }

  .icon {
    font-size: 2.5rem;
    cursor: pointer;
  }

  .icon:hover {
    color: var(--lightGrey);
  }
  .selected-k {
    display: block;
  }

  .lijeva {
    margin: 5px 20px 20px 30px;
    cursor: pointer;
  }

  .desna {
    margin: 5px 20px 20px 280px;
    cursor: pointer;
  }
`;
