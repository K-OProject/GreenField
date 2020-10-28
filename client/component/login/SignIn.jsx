import React from "react";
import "../style/Component/SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      email: "",
      password: "",
    };
  }
  postUser(e) {
    e.preventDefault();
    const users = {
      email: this.state.email,
      password: this.state.password,
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            className="i1"
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <br></br>
          <input
            className="i2"
            type="password"
            name="password"
            placeholder="password"
            required
            value={this.state.pasword}
            onChange={(e) => {
              this.setState({ pasword: e.target.value });
            }}
          />
          <br></br>
          <div className="btn0">
            <span onClick={this.props.handleOnClick}>
              No Korfi Account/Create Account
            </span>
          </div>
          <button className="bl" type="submit" name="SignIn">
            SignIn{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default SignIn;
