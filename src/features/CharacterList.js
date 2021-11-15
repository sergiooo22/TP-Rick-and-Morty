import React from 'react'

import { useHistory } from 'react-router';

export default function CharacterList({ characters = [] }) {

const history = useHistory();
const goTo = () => {
    history.push(`character/${Image}`)
};

    return <div>

        <h4>Characters: </h4>
        <ul>
            {characters.map((c, index )=> <li key={index} onClick= {goTo} >{c}</li>)}
        </ul>

    </div>
}
