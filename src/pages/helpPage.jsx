import React, { Component } from "react";
import styled from "styled-components";

import pic1 from "../Images/info/slika1.png";
import pic2 from "../Images/info/slika2.png";
import pic3 from "../Images/info/slika3.png";
import pic4 from "../Images/info/slika4.png";
import pic5 from "../Images/info/slika5.png";

export default class helpPage extends Component {
  render() {
    return (
      <HelpWarpper>
        <div className="slike">
          {" "}
          <img src={pic1}></img>
          <img src={pic2}></img>
          <img src={pic3}></img>
          <img src={pic4}></img>
          <img src={pic5}></img>
        </div>
      </HelpWarpper>
    );
  }
}

const HelpWarpper = styled.div`
  img {
    width: 1000px;
    height: 500px;
    border: 4px solid red;
    margin: 40px 100px;
  }
  .slike {
    margin-top: 50px;
  }
`;
