import React, { Component } from 'react';
import Blocks from './containers/blocks/index';
import 'whatwg-fetch';
import './App.css';
import './data.js';
import Material from './data.js';


class Ano extends Component{

    render(){

        return(
            <div className="Ano">
        <Material message= "This will load asteroid data" />



        <Blocks message="asteroid data will load here" />

      </div>


        );

    }


}

export default Ano;
