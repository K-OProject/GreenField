import React from 'react';

class PostJob extends Component {
    constructor(){
        super()
    this.state = { 
        title : "",
        genre :"",
        description: "",
        price: 0
     }
this.handleTitle = this.handleTitle.bind(this);
this.handleDescription = this.handleDescription.bind(this);
this.handleGenre = this.handleGenre.bind(this);
this.handlePrice = this.handlePrice.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
}

handleTitle(e){
    this.setState({title : e.target.value});
}

handleGenre(e){
    this.setState({ genre : e.target.value})
}

handleDescription(e){
    this.setState({ description : e.target.description})
}

handlePrice(e){
    this.setState({ price : e.target.value})
}

handleSubmit(event){
    event.preventDefault();

}

render (){
    return (
  <div>
    <div>
      <h2>Post your Task</h2>
      <form>
        <input type="text" onChange={this.handleTitle}>Task title</input>
        <input type="text" onChange={this.handleGenre}>genre</input>
        <textarea onChange={this.handleDescription}>Task description</textarea>
        <input type="number" onChange={this.handlePrice}>Price</input>
        <button onClick={this.handleSubmit}>Share Task</button>
      </form>
    </div>
  </div>
  )
    }
}
 
export default PostJob;