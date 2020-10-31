import React from "react";
import Done from "./MyOffers/Done.jsx";
import Pending from "./MyOffers/Pending.jsx";
import JobsInProg from "./MyOffers/JobInProg.jsx";
import axios from "axios";
import "../style/Component/MyOffers.css";

class MyOffers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      dataPending: [],
      dataDone: [],
      dataInProgress: [],
    };
    this.getJobiProg = this.getJobiProg.bind(this);
    this.queryPending = this.queryPending.bind(this);
    this.queryDone = this.queryDone.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({ view: "home" });
  }

  getJobiProg() {
    let obj = {
      providerEmail: localStorage.getItem("currentUser"),
    };
    axios.post("/Task/findProg", obj).then((response) => {
      if (this.state.dataInProgress.length !== response.data.length) {
        this.setState({ dataInProgress: response.data });
      }
    });
  }

  queryPending() {
    let obj = { providerEmail: localStorage.getItem("currentUser") };
    axios.post("/Task/jobApplication/giver", obj).then((response) => {
      if (this.state.dataPending.length !== response.data.length) {
        this.setState({ dataPending: response.data });
      }
      return;
    });
  }

  queryDone() {
    let obj = { providerEmail: localStorage.getItem("currentUser") };
    axios.post("/Task/ratingProcess", obj).then((response) => {
      if (this.state.dataDone.length !== response.data.length) {
        this.setState({ dataDone: response.data });
      }
      return;
    });
  }

  clickHandler() {
    this.setState({ view: !this.state.view });
  }

  render() {
    this.queryDone();
    this.getJobiProg();
    console.log("data", this.state.dataDone);
    this.queryPending();
    return (
      <div>
        <button className="k" onClick={this.props.goBack}>
          {" "}
          Go Back
        </button>{" "}
        <div>
          {this.state.dataPending.map((data, index) => (
            <Pending data={data} key={index} />
          ))}
          {this.state.dataInProgress.map((data, index) => (
            <JobsInProg data={data} key={index} />
          ))}
          <>
            <button className="j" onClick={this.props.goBack}>
              {" "}
              Go Back
            </button>
          </>
        </div>
        <div>
          {this.state.dataDone !== [] ? (
            <Done data={this.state.dataDone} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default MyOffers;
