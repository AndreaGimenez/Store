import React , {Component} from "react"
import {Logo} from "./logo.js"
import {TopNav} from "./TopNav.js"
import {Buscador} from "./buscador.js"
import {Carrito} from "./carrito.js"
import {Menu} from "./menu.js"
export class Header extends Component{
    render(){
/* Logo
Topnav
Buscador
Carrito
Menú/Navegador */
        return (
            <div className="header">
                <Logo />
                <TopNav />
                <Buscador />
                <Carrito />
                <Menu />
                <header>{this.props.titulo}</header>
            </div>

        )
    }
}
