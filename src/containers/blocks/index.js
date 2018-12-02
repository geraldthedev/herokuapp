import React, { Component } from 'react';
import BlockList from '../blocklist';

class Blocks extends Component{

    state ={
    rocks: []
}
    componentDidMount(){
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=kUogpAAKJUl6Lu846gUCxaIrP18vgmPvDkPyfMDO')
        .then(response => response.json())
        .then(json => console.log(json))
        .then(json => this.setState({ rocks: json }));

    }

    render(){
        return(

            <div>

            <BlockList list={this.state.rocks} />
            </div>

        )
    }

}
export default Blocks;