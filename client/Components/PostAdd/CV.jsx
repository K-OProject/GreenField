import React from 'react';
class CV extends Component {
    constructor(){
    this.state = {
        emailValue : "",
        experience : "",
        language : "",
        diploma: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
this.handlEmailChange = this.handlEmailChange.bind(this);
this.handleExperience = this.handleExperience.bind(this);
this.handleLanguage = this.handleLanguage.bind(this);
    }

    handlEmailChange(e) {
        console.log(e);
        this.setState({ emailValue: e.target.value });
    };

handleExperience(e){
    this.setState({experience : e.target.value })
}

handleLanguage(e){
this.setState({language : e.target.value})
}

handleDiplome(e){
    this.setState({diploma : e.target.value})
}

handleSubmit(event){
    event.preventDefault();

}


    render() { 
        return (      
     <div >
        <div> 
          <form>
            <input type="email" onChange={this.handlEmailChange}>E-mail*</input>
            <input type="languages" onChange={this.handleLanguage}>Languages</input>
            <input type="text" onChange={this.handleDiplome}>Diploma*</input>
            <textarea type="description" value="experience" onChange={this.handleExperience}>Experience*</textarea>
            <button onClick={this.handleSubmit}>Post your resume</button>
          </form>
        </div>
      </div> 
      );
    }
}
 
export default CV;
