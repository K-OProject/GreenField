import React from "react";
import axios from "axios";
import "../style/Component/PostJob.css";

class PostJob extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
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
    this.setState({ title: e.target.value });
  }

  handleContact(e) {
    this.setState({ contact: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: Number(e.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userEmail = localStorage.getItem("currentUser");
    if (userEmail === undefined || userEmail === null) {
      alert("must login to be able to post thanks ");
      location.reload();
      return;
    }
    let obj = {};
    obj.title = this.state.title;
    obj.providerEmail = userEmail;
    obj.description = this.state.description;
    obj.contact = this.state.contact;
    obj.price = this.state.price;
    axios.post("/Task/create", obj).then((res) => console.log(res.data));
    this.props.click();
    console.log(obj, "here client");
  }

  render() {
    return (
      <div>

        

        <form>
          <h2 className="t">Post your Task</h2>
    
              <input
                className="is1"
                type="text"
                placeholder="task title"
                onChange={this.handleTitle}
              ></input>
            
              <input
                className="is2"
                type="text"
                placeholder="contact"
                onChange={this.handleContact}
              ></input>
              <textarea
                className="is3"
                onChange={this.handleDescription}
                placeholder={"your text"}
              ></textarea>
              <input
                className="is4"
                type="number"
                placeholder="price"
                onChange={this.handlePrice}
              ></input>
            </form>
            <div>
              <button className="bc" onClick={this.handleSubmit}>
                Share Task
              </button>
            </div>
          </div>
          
     
   
    );
  }
}

export default PostJob;
