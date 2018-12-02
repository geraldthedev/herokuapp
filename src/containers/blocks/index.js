import React, { Component } from 'react';
import BlockList from '../blocklist';

class Blocks extends Component{

    state ={
    rocks: []
}
    componentDidMount(){
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=2Xw4TZUvSRVnbbtbZ6QFQtthuZujXPBWdv1tIKbM')
        .then(response => response.json())
        .then(json => console.log(json))
        .then(json => this.setRocks({ rocks: json }));
    }

    render(){
        return(
            <div>
            {this.state.rocks.length}
            <BlockList list={this.state.rocks} />
            </div>
        )
    }

}
export default Blocks;