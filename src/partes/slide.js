import React from 'react';


const Slide = (props) => {
  let image = require('../imagenes/BANNERS/' + props.imagen.imgName)
  return <div className="slide"><img src={image} className="slide" /></div>
}

export default Slide
