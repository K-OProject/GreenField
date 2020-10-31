import React from "react";
import SignIn from "./SignIn.jsx";
import SignUP from "./SignUp.jsx";
import "../style/Component/Login.css";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ view: true });
  }
  render() {
    return (
      <div>
        {this.state.view === false ? (
          <SignIn handleOnClick={this.handleOnClick} login={this.props.login} />
        ) : (
          <SignUP login={this.props.login} />
        )}
      </div>
    );
  }
}
export default LogIn;
