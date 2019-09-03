import React, {Component} from 'react'

export class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
    }
  }
  componentDidMount(){
    this.callApi().then(
      (result) => {
        this.setState({
          isLoaded: true,
          categories: result.menu.categories
        });
      }
    )
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  callApi = async () => {
    var response = await fetch("http://remote.fizzmod.com/menu.json");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render(){
    const { isLoaded, categories } = this.state;

    return(this.state.isLoaded ?
      <div className="menu">
          menu
      </div> : <div></div>)
  }
}
