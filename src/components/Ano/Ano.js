import React, { Component } from 'react';
import Blocks from ''
import 'whatwg-fetch';
import '.App/App.css';
import Material from '../Material/index';


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