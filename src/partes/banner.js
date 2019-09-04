import React , {Component,Fragment} from "react";
import Slide from "./slide.js"
import Arrow from './arrow';

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

        <div className="slide">
	        <Slide imagen={slides[currentImageIndex]}/>
          <Arrow direction="right" glyph="&#9654;" move={()=>{this.setState({currentImageIndex: currentImageIndex + 1})}}/>
          <Arrow  direction="left" glyph="&#9664;" move={()=>{this.setState({currentImageIndex: currentImageIndex - 1})}}/>
      </div>
        : loading)

    }
}
