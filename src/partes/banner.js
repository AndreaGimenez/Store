import React , {Component,Fragment} from "react";


export class Banner extends Component {
    constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      isLoaded: false,
      };


    }

    componentDidMount(){
      this.callApi()
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            slides: result.slides
          });
        }
      )
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
    }

    callApi = async () => {
      var response = await fetch("http://remote.fizzmod.com/body.json");
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    }


    render(){
      var loading = (<div id="posicion-spinner"><i className="fa fa-spinner fa-spin fa-10x"></i></div>);
      const { currentImageIndex, error, isLoaded, slides } = this.state;

      return(this.state.isLoaded ?
        <div>
          <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <ImageSlide url={ slides[currentImageIndex]} />

          <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
        </div> : loading)

    }
}

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  let image = require('../imagenes/BANNERS/' + url.imgName)
  return (
    <img src={image} className="banner-slider"/>
  );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);
