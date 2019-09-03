import React , {Component} from "react"
import {Logo} from "./logo.js"
import {TopNav} from "./TopNav.js"
import {Buscador} from "./buscador.js"
import {Menu} from "./menu.js"
import {Carrito} from "./carrito.js"
export class Header extends Component{
    render(){
/* Logo
Topnav
Buscador
Carrito
Menú/Navegador */
        return (
            <div className="header">
                <div className="header-superior">
                  <Logo />
                  <div className="superior-derecho">
                    <TopNav />
                    <div className="busquedas">
                      <Buscador title="BUSCADOR"/>
                      <Carrito title="MI CARRITO"/>
                    </div>
                  </div>

                </div>
                <Menu />
                <header>{this.props.titulo}</header>
            </div>

        )
    }
}
