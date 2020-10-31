import React from "react";

import "../../style/Component/Done.css"

import axios from "axios";


class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 5 };
    this.Submit = this.Submit.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(e) {
    this.setState({ rating: e.target.value });
  }

  Submit(e) {
    e.preventDefault();
    let obj = {
      rating: this.state.rating,
      description: this.props.data.description,
      employeeEmail: this.props.data.employeeEmail,
    };
    axios.put("/user/update", obj).then((response) => location.reload());
  }

  render() {
    console.log("hey");
    return (
      <div className="feed">
        <ul>
          <li className="feed3-list-item">
            <br></br>
            <p className="feed-list-item-description">
              {this.props.data.description}{" "}
            </p>
            <br></br>
            <span className="feed3-list-item-poster"></span>
            {this.props.data.contact}
            <br></br>
            <br></br>
            <span className="feed3-list-item-price">
              <strong> Earning : </strong>
            </span>{" "}
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }}
            >
              {this.props.data.price}DT
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed3-list-item-address">
              <strong> Location : {this.props.data.address} </strong>
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed3-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
            </span>
            <input className='s'
              type="number"
              max="10"
              min="0"
              style={{ width: "20%" }}
              onChange={this.changeRating}
            />
            <button className='p' onClick={this.Submit}>submit rating</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Done;
