import React, {Component} from "react";
import {hot} from "react-hot-loader";

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
        test: null
    };
  }

  componentDidMount(){
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
        <Header />
        <div id="color_palette"></div>
        {this.state.test ? <h1>{this.state.test + "  Christine"}</h1> : <h1>Loading.....</h1>}
        <Footer />
      </div>
    )
  }
}




export default hot(module)(App);