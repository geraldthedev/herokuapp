import React, { Component } from 'react';
import BlockList from '../blocklist/index';

class Blocks extends Component{

    state ={
    totalResults: []
}
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e222df7542f14332bbc46a3fde194820')
        .then(response => response.json())
        .then(json => this.setState({ totalResults: json }));

    }

    render(){
        return(

            <div>

            <BlockList list={this.totalResults} />
          The length of the array is -  {this.state.totalResults.length}
            </div>

        )
    }

}
export default Blocks;
