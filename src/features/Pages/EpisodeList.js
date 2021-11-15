import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import EpisodeItem from './EpisodeItem';
import Pagination from '../Pagination';


export default function EpisodeList(props) {

    const history = useHistory();

    const goTo = () => {
        history.push(`new-episode`);
    }
    

    const [episodes, setEpisodes] = useState([]);
    const [message, setMessage] = useState(null);
    const [info, setInfo] = useState(null);
    const [url, setUrl] = useState ('https://rickandmortyapi.com/api/episode/?name=');
    const [search, setSearch] = useState ("");

    
      

    useEffect(() => {

        (async () => {

            const Response = await axios.get(`${url}${search}`)
                .catch(e => {
                    setMessage("Hubo un error");
                    setEpisodes([]);
                });


            if (Response && Response.status === 200) {
                const { info, results } = Response.data;
                setInfo(info);
                setEpisodes([
                    ...results,
                ]);
            } else {

                setInfo(null);
                setEpisodes([]);
                
            }
        })();




    }, [url, search]);

    const onePagination = (newUrl) => {
        if (newUrl) {
            setUrl (newUrl);
        }
    }


    return <div className="row">
        {message && <span>{message}</span>}
        <button onClick={goTo}> New Episode </button>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <Pagination info={info} onNext={onePagination} onPrev={onePagination} />
        <input onChange={(e) => {
            setSearch(e.target.value)
        }} type= "text" />
    
        <table border={1}>
            <tr>
        <th>Nº</th><th>Episode</th><th>Detail</th>
            </tr>
            {episodes.map(e => <EpisodeItem key={e} episode={e} />)}
        </table>
       
    </div>

}



