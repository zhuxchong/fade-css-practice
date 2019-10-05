import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageOne from "./image1.jpg";
import ImageTwo from "./image2.png";
import ImageThree from "./image3.jpg";
let imgStyle = {
  0: ["fade-in"],
  1: ["non-display"],
  2: ["non-display"]
};
let template = {
  0: ["non-display"],
  1: ["non-display"],
  2: ["non-display"]
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    const styleController = next => {
      if (next) {
        if (this.state.index !== 2) {
          let temp = { ...template };
          temp[this.state.index] = ["fade-out"];
          temp[this.state.index + 1] = ["fade-in"];
          imgStyle = temp;
          this.setState({ index: this.state.index + 1 });
        }
      } else {
        if (this.state.index !== 0) {
          let temp = { ...template };
          temp[this.state.index] = ["fade-out"];
          temp[this.state.index - 1] = ["fade-in"];
          imgStyle = temp;
          this.setState({ index: this.state.index - 1 });
        }
      }
    };
    return (
      <div className="App">
        <div className={"image-container"}>
          <div className={`${imgStyle[0].join(" ")} basic-style`}>
            {" "}
            <img src={ImageOne} width={1000} height={800}></img>
          </div>
          <div className={`${imgStyle[1].join(" ")} basic-style`}>
            {" "}
            <img src={ImageTwo} width={1000} height={800}></img>
          </div>
          <div className={`${imgStyle[2].join(" ")} basic-style`}>
            {" "}
            <img src={ImageThree} width={1000} height={800}></img>
          </div>
        </div>
        <button
          onClick={() => styleController(true)}
          style={{ marginTop: 900 }}
        >
          Next
        </button>
        <button onClick={() => styleController(false)}>Previous</button>
        <p>{this.state.index + 1}/3</p>
      </div>
    );
  }
}

export default App;
