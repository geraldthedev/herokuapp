import React from 'react';




const BlockList = (props) => {
    return(
        <div>
           <ul>
            {props.list.map(news =>(
            <li>{news.articles.content}</li>
            ))}
            </ul>
        </div>
    );

}

export default BlockList;