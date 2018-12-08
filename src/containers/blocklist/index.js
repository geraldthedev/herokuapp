import React from 'react';




const BlockList = (props) => {
    return(
        <div>
        <ul>
        {props.list.map(near_earth_objects => (
        <li>
        {near_earth_objects.neo_reference_id}</li>
        ))}
        </ul>
        </div>
    )

}

export default BlockList;