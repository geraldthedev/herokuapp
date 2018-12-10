import React, { Component } from 'react';
import Material from '../Material';
import Blocks from '../../containers/blocks/index';
import 'whatwg-fetch';
import '../App';



class Ano extends Component{

    render(){

        return(
            <div className="Ano">
        <Material message= "This will load news data" />


      <Blocks />


      </div>
        );
    }

}

export default Ano;