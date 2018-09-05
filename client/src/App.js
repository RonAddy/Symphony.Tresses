import React, {Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  componentDidMount(){
    console.log('mounted');
    fetch('/api')
    .then( resp => resp.json())
    .then( resp => {
      this.setState({
        test: resp.test
      })
    })
  }


  render() {
    return (
      <div>
        {this.state.test ? <h1>{this.state.test}</h1> : <h1>Loading.....</h1>}
      </div>
    )
  }
}




export default hot(module)(App);