import React from 'react'
import imagen from '../imagenes/front-test-font-icon/fonts/front-test-font-icon.svg'

export const Carrito = (props) => {
  return(<div className="carrito">
    <span>{props.title}</span>
    <img src={imagen}/>
  </div>)
}
