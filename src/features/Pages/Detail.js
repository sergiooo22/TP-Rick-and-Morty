import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import CharacterList from '../CharacterList';


export default function Detail(props) {

    const { id } = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        (async () => {

            const Response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                .catch(e => {

                });


            if (Response && Response.status === 200) {
                const  episodeInfo  = Response.data;
                setEpisode(episodeInfo);
            } else {
                setEpisode(null);
            }
        })();




    }, [id]);

    return <div>
        
        <h2>Detail Episode {id}</h2>
        {episode && <React.Fragment>
            <h3>Nombre: {episode.name}</h3>
            <h3>Air Date: {episode.air_date}</h3>
            <h3>Episode: {episode.episode}</h3>
            <CharacterList characters= {episode.characters}/>
        </React.Fragment>
        }
       
    </div>
}

