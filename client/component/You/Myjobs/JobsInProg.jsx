import React from "react";
import axios from "axios";
import "../../style/Component/JobInProg.css"
// import "../style/Component/Adds.css";

class JobsInProg extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let obj = { description: this.props.data.description };
    console.log(obj);
    axios
      .post("/Task/done", obj)
      .then((res) => {
        alert("thanks for completing the job");
        location.reload();
      })
      .catch((err) => console.log(err));
  }

  //querry data

  render() {
    return (
      <div className="feed">
        <ul>
          <li className="feed4-list-item">
            <br></br>
            <p className="feed4-list-item-description">
              {this.props.data.description}{" "}
            </p>
            <br></br>
            <span className="feed4-list-item-poster"></span>
            {this.props.data.contact}
            <br></br>
            <br></br>
            <span className="feed4-list-item-price">
              <strong> Earning : </strong>
            </span>{" "}
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }}
            >
              {this.props.data.price}DT
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed4-list-item-address">
              <strong> Location : {this.props.data.address} </strong>
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed4-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
              <button className='gm' onClick={this.clickHandler}>Done</button>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default JobsInProg;
