import React, {Component} from 'react';
import {Banner} from "./banner.js"
import {ProductosLista} from "./ProductosLista.js"
export class BodyContent extends Component{
    render(){
/* Banner Slider
Listado de producto con titulo y filtros */
        return(
            <div className="body">
                {this.props.titulo}
                <Banner titulo= "BANNER"/>
                <ProductosLista titulo="PRODUCTOS LISTA"/>
            </div>
        )
    }
}