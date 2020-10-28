import React from "react";
import CV from "./CV.jsx";
import PostJob from "./PostJob.jsx";
import "../style/Component/PostAdd.css"

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "main" };

    this.showCVform = this.showCVform.bind(this);
    this.showTaskform = this.showTaskform.bind(this);
    this.click = this.click.bind(this);
  }

  showCVform() {
    this.setState({ view: "C.V" });
  }


  showTaskform() {
    this.setState({ view: "" });
  }
click(){
    this.setState({ view: "main" });
}

  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <button className="b1" onClick={this.showTaskform}> Add a task</button>
          <button className="b2" onClick={this.showCVform}>Add your C.V</button>
        </div>
      );
    } else if (this.state.view === "C.V") {
      return <CV click={this.click}/>;
    } else {
      return <PostJob click={this.click}/>;
    }
  }
}

export default PostAdd;
