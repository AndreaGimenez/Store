import React, {Component} from 'react';
import {Banner} from "./banner.js"
import {ProductosLista} from "./ProductosLista.js"
export class BodyContent extends Component{
    render(){
/* Banner Slider
Listado de producto con titulo y filtros */
        return(
            <div className="body">
                <Banner title= "BANNER"/>
                <ProductosLista title="PRODUCTOS LISTA"/>
            </div>
        )
    }
}
