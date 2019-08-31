import React,{Component} from 'react'
import LogoFizzmod from "./logo_fizzmod.svg"
//https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

export class Logo extends Component{
    render(){
        return(
          <div id="logo">
          <img src= {LogoFizzmod} alt="logo de la empresa" className="imagen-logo" />
          </div>

        )
    }
}
