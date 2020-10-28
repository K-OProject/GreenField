import React from "react";
import axios from "axios";
import "../style/Component/PostJob.css";

class PostJob extends React.Component {
  constructor() {
    super();
    this.state = {
      adress: "",
      contact: "",
      description: "",
      price: 0,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({ adress: e.target.value });
  }

  handleContact(e) {
    this.setState({ contact: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.description });
  }

  handlePrice(e) {
    this.setState({ price: Number(e.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {};
    obj.adress = this.state.adress;
    obj.description = this.state.description;
    obj.contact = this.state.contact;
    obj.price = this.state.price;
    axios.post("/", obj).then((res) => console.log(res.data));
    this.props.click();
  }

  // clickHandler() {
  //   let obj = {};
  //   obj.adress= this.state.adress;
  //   obj.description = this.state.description;
  //   obj.contact = this.state.contact;
  //   obj.price = this.state.price;
  //   axio.post("/", obj).then((res) => console.log(res.data));
  // }

  render() {
    return (
      <div>
        <div>
          <h2 className="t">Post your Task</h2>
          <div className="inputs">
          <form>
            <input
              className="i1"
              type="text"
              onChange={this.handleTitle}
            ></input>
            <input
              className="i2"
              type="text"
              onChange={this.handleContact}
            ></input>
            <textarea
              className="i3"
              onChange={this.handleDescription}
              placeholder={"your text"}
            ></textarea>
            <input
              className="i4"
              type="number"
              onChange={this.handlePrice}
            ></input>
            <button className="bc" onClick={this.handleSubmit}>
              Share Task
            </button>
          </form>
        </div></div>
      </div>
    );
  }
}

export default PostJob;
