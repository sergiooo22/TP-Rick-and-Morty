import React from "react";
import { useHistory } from "react-router-dom";


export default function EpisodeItem({episode}) {

const history = useHistory();

const goTo = () => {
    history.push (`detail/${episode.id}`);
}


    return <tr>
            
            <td>{episode.episode}</td>
            <td>{episode.name}</td>
            <td><button onClick= {goTo}> Ver </button></td>
        </tr>
    
}



