import React, { Component } from 'react';
import BlockList from '../blocklist/index';

class Blocks extends Component{

<<<<<<< HEAD
    state ={
    totalResults: []
}
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e222df7542f14332bbc46a3fde194820')
        .then(response => response.json())
        .then(json => this.setState({ totalResults: json }));
=======

state ={
        articles: []
}
>>>>>>> f55bb1cf4a7a71761c071a8affe119265395ef53

 componentDidMount(){
       fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e222df7542f14332bbc46a3fde194820')
        .then(response => response.json())
        .then(json => this.setState({articles: json}))
    }


    render(){
        return(

<<<<<<< HEAD
            <div>

            <BlockList list={this.totalResults} />
          The length of the array is -  {this.state.totalResults.length}
            </div>
=======
<div>
            {this.state.articles[0].title}

            <BlockList />

</div>

>>>>>>> f55bb1cf4a7a71761c071a8affe119265395ef53

        );
    }

}
export default Blocks;
