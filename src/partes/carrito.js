import React from 'react'
import imagen from '../imagenes/front-test-font-icon/fonts/front-test-font-icon.svg'

export const Carrito = (props) => {
  return(<div className="carrito">
    <span className="mi-carrito">{props.title}</span>
    <img src={imagen}/>
    glyph="&#xe900;"
  </div>)
}
