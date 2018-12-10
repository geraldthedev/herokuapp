import React, { Component } from 'react';
import BlockList from '../blocklist';

class Blocks extends Component{


state ={
        articles: []
}

 componentDidMount(){
       fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e222df7542f14332bbc46a3fde194820')
        .then(response => response.json())
        .then(json => this.setState({articles: json}))
    }


    render(){
        return(

<div>
            {this.state.articles[0].title}

            <BlockList />

</div>


        );
    }

}
export default Blocks;