import React , {Component,Fragment} from "react";
import logo from './logo.svg';
import './App.css';
import {Header} from "./partes/header.js"
import {Footer} from "./partes/footer.js"
import {BodyContent} from "./partes/body.js"

class App extends Component {
  render(){
    return(
      <div>
        <Header titulo= "HEADER"/>
        <BodyContent titulo="BODY CONTENT"/>
        <Footer />
    </div>
    )
  } 
}

export default App;
