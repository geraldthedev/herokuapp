import React, { Component } from 'react';
import BlockList from '../blocklist';

class Blocks extends Component{

state ={
        news: []
}

 componentDidMount(){
       fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e222df7542f14332bbc46a3fde194820')
        .then(response => response.json())
        .then(json => this.setState({ news: json }))
    }


    render(){
        return(

<div>

            The length of the array is- {this.state.articles.length}
            <BlockList list={this.state.articles}/>

</div>


        );
    }

}
export default Blocks;