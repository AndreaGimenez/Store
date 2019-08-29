import React , {Component} from "react";

export class Header extends Component{
    render(){
/* Logo
Topnav
Buscador
Carrito
Menú/Navegador */
        return (
            <header className="header">{this.props.titulo}</header>
        )
    }
}