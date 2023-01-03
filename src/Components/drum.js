import React from "react";
import "./style.css";
export default class drum extends React.Component {
  constructor(props) {
    super(props);
    this.audio1 = this.audio1.bind("this");
    this.audio2 = this.audio2.bind("this");
    this.audio3 = this.audio3.bind("this");
    this.audio4 = this.audio4.bind("this");
    this.audio5 = this.audio5.bind("this");
    this.audio6 = this.audio6.bind("this");
    this.audio7 = this.audio7.bind("this");
    this.audio8 = this.audio8.bind("this");
    this.audio9 = this.audio9.bind("this");
  }

  audio1() {
    const a1 = new Audio();
    a1.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
    a1.play();
  }
  audio2() {
    const a2 = new Audio();
    a2.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
    a2.play();
  }
  audio3() {
    const a3 = new Audio();
    a3.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
    a3.play();
  }
  audio4() {
    const a4 = new Audio();
    a4.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
    a4.play();
  }
  audio5() {
    const a5 = new Audio();
    a5.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
    a5.play();
  }
  audio6() {
    const a6 = new Audio();
    a6.src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
    a6.play();
  }
  audio7() {
    const a7 = new Audio();
    a7.src = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
    a7.play();
  }
  audio8() {
    const a8 = new Audio();
    a8.src = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
    a8.play();
  }
  audio9() {
    const a9 = new Audio();
    a9.src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
    a9.play();
  }

  render() {
    return (
      <div className="body">
        <h1>DRUM</h1>

        <div className="area1">
          <button className="btn btn1" onClick={this.audio1}>
            Q
          </button>
          <button className="btn btn2" onClick={this.audio2}>
            W
          </button>
          <button className="btn btn3" onClick={this.audio3}>
            E
          </button>
        </div>
        <div className="area2">
          <button className="btn btn4" onClick={this.audio4}>
            A
          </button>
          <button className="btn btn5" onClick={this.audio5}>
            S
          </button>
          <button className="btn btn6" onClick={this.audio6}>
            D
          </button>
        </div>
        <div className="area3">
          <button className="btn btn7" onClick={this.audio7}>
            Z
          </button>
          <button className="btn btn8" onClick={this.audio8}>
            X
          </button>
          <button className="btn btn9" onClick={this.audio9}>
            C
          </button>
        </div>
      </div>
    );
  }
}
