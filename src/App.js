import React , {Component,Fragment} from "react";
import './App.css';
import {Header} from "./partes/header.js"
import {Footer} from "./partes/footer.js"
import {BodyContent} from "./partes/body.js"

class App extends Component {
  render(){
    return(
      <div className="contenedor-principal">
        <Header titulo= "HEADER"/>
        <BodyContent titulo="BODY CONTENT"/>
        <Footer titulo="FOOTER"/>
    </div>
    )
  }
}

export default App;
