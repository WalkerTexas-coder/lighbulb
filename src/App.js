import React, { Component } from "react";
import "./App.css";
import Lightbulb from "./components/Lightbulb";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbulbs: 0,
    };
  }
  render() {
    return (
      <>
        <div id="flex">
          {Array(this.state.lightbulbs).fill("x").map(value => {
            return (
              <Lightbulb/>
            );
          })}
        </div>

        <div>
          <button
            onClick={() =>
              this.setState({ lightbulbs: this.state.lightbulbs + 1 })
            }
          >
            Add Lightbulb
          </button>

          <button
            onClick={() =>
              this.setState({ lightbulbs: this.state.lightbulbs - 1 })
            }
          >
            Remove Lightbulb
          </button>
        </div>
      </>
    );
  }
}

export default App;
