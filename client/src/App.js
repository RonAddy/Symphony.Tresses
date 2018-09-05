import React, {Component} from "react";
import {hot} from "react-hot-loader";

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

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
        <Nav />
        {this.state.test ? <h1>{this.state.test}</h1> : <h1>Loading.....</h1>}
        <Footer />
      </div>
    )
  }
}




export default hot(module)(App);