import React , {Component} from "react"
import {FooterLink} from "./footerLink"

export class Footer extends Component{
    render(){
        /* Bloque footer (solo texto y fondo) */
        return(
            <footer className="footer fontColor">
              {this.props.titulo}
              <FooterLink />
              <FooterLink />
              <FooterLink />
            </footer>
        )
    }
}
