import React from "react";
import ReactDom from "react-dom";
import Home from "./component/Home.jsx";
import PostAdd from "./component/PostAdd/PostAdd.jsx";
import Adds from "./component/adds/Adds.jsx";
import LogIn from "./component/login/Login.jsx";
import "./style.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }

  render() {
    return (
      <div>
        <div className="header">
          <ul>
         < img className="logo" src="img/korfi.png"/>
            <li>
              <a onClick={this.onClick}>Home</a>
            </li>
            <li>
              <a onClick={this.onClick}>PostAdd</a>
            </li>
            <li>
              <a onClick={this.onClick}>Adds</a>
            </li>
            <li>
              <a onClick={this.onClick}>Your offers</a>
            </li>
            <li>
              <a onClick={this.onClick}>Login</a>
            </li>
          </ul>
        </div>
        <div>
          {this.state.view === "Home" ? (
            <Home />
          ) : this.state.view === "PostAdd" ? (
            <PostAdd />
          ) : this.state.view === "Adds" ? (
            <Adds />
          ) : this.state.view === "Login" ? (
            <LogIn />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById("app"));
