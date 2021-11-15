import { useSelector, useDispatch } from 'react-redux';

import { next as nextStep,prev as prevStep, addToList,} from '../global/global.slice';

import { cleanEpisodeData } from '../global/episodeData.slice';




export default function EpisodeCreate (props) {
  const episodeData = useSelector((state) => state.episodeData.episodeData);
  const dispatch = useDispatch();


  const episode = {
    episodeData,
  };

  const save = () => {
    console.log("=================== save ==================")
    dispatch(addToList(episode))
    dispatch(cleanEpisodeData())
    dispatch(nextStep())
  };


  return <section>
          <h1> EPISODE CREATED WITH SUCCESS </h1>
            <button onClick={() => dispatch(prevStep())} >prev</button>
            <button onClick={save} >finalizar</button>
         </section>
}
