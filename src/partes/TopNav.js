import React, {Component} from 'react'

const topnav_items = [
  "Mi cuenta","Mis pedidos","Ayuda"
]

export class TopNav extends Component{
    render(){
        return(
            <div className="topnav">
              {topnav_items.map((item) => (
                renderItem(item)
              ))}
            </div>
        )
    }
}

const renderItem = (item) =><a href="#" className="topnav-items"><span className="topnav_item">{item}</span></a>
