import React from 'react';



const BlockList = (props) => {
    return(
        <div>
        <ul>
        {props.list.map(rocks=>(
        <li>{rocks.show.name}</li>
        ))}
        </ul>
        </div>
    )
}

export default BlockList;