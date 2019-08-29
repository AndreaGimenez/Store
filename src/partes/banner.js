import React , {Component,Fragment} from "react";

export class Banner extends Component {
    render(){
        return(
            <div className="banner-slider">{this.props.titulo}</div>
        )
    }
}