import React from 'react';
import "./style/Component/Home.css"

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
       <div className="heading">
          <h2 className="title">Professionals You Need, From People You Know.</h2><br>
          </br>
          <p className="subheading">From Dog Walkers and Babysitters to Hairstylists and Personal Trainers, to...</p>
        </div>
        <div className="container">
        
        <button className="btn btn4">More Information</button>
      </div>
      </div>
      )
     
      
    }
}
 
export default Home;