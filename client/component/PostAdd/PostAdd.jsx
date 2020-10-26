import React from 'react';
import CV from './CV.jsx';
import PostJob from './PostJob.jsx';


class PostAdd extends React.Component {
    constructor(){
        super();
    this.state = { view : "main"  }

this.showCVform = this.showCVform.bind(this);
this.showTaskform = this.showTaskform.bind(this);
    }



   
showCVform(){
    this.setState({view : "C.V"});
}

showTaskform(){
    this.setState({view : ""});
}


    render() {
        if (this.state.view === 'main') {
            return (
             <div>
            <button onClick={this.showTaskform}> Add a task</button>
            <button onClick={this.showCVform}>Add your C.V</button>
            </div>  
            )                 
          }
        else if(this.state.view === "C.V"){
        return <CV/>
        } else {
            return <PostJob/>
        }
    }
}
 
export default PostAdd;
 
