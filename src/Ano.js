import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import './data.js';
import Material from './data.js';


class Ano extends Component{

state ={
    rocks: []
}
    componentDidMount(){
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=2Xw4TZUvSRVnbbtbZ6QFQtthuZujXPBWdv1tIKbM')
        .then(response => response.json())
        .then(json => console.log(json))
        //.then(json => this.setRocks({ rocks: json }))
    }
    render(){
        return(
            <div className="Ano">
        <Material message= "This will load asteroid data" />
        {this.state.rocks.length}
      </div>


        );

    }


}

export default Ano;