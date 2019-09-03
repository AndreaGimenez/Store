import React, {Component} from 'react'

export class Buscador extends Component{
    render(){
        return(
            <div className="buscador">
              <input placeholder="Buscar un producto..." className="buscador-position">
              </input>
            </div>
        )
    }
}
