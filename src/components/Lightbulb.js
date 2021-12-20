import React, { Component } from "react";
import on from "../assets/on.jpeg";
import off from "../assets/off.jpeg";
import lightBulbOn from "../assets/lightbulbON.jpeg";
import lightBulbOff from "../assets/lightbulbOFF.jpeg";

export default class Lightbulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }
  render() {
    return (
      <div>
        <div
          onClick={() => this.setState({ isOn: !this.state.isOn })}
          className="lightbulb-box"
        >
          {this.state.isOn ? (
            <>
              <img src={on} alt="an on light switch" />
              <img src={lightBulbOn} alt="of an illuminated lighbulb" />
            </>
          ) : (
            <>
              <img src={off} alt="an off light switch" />
              <img src={lightBulbOff} alt="of an off lighbulb" />
            </>
          )}
        </div>
      </div>
    );
  }
}
