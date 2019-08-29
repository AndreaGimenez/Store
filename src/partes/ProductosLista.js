import React, {Component} from 'react'

export class ProductosLista extends Component {
    render(){
        return(
            <div className="listado-productos">{this.props.titulo}</div>
        )
    }
}