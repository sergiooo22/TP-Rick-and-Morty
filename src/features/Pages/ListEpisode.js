import { useSelector, useDispatch } from 'react-redux';
import {start}  from  '../global/global.slice';
import ItemEpisode from './ItemEpisode'


export default function ListEpisode(props) {
  const episodeList = useSelector((state) => state.global.episodeList);
  const dispatch = useDispatch();
  console.log({episodeList});

  return <div>
            <table border={1}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Episode</th>
              </tr>
              </thead>
              <tbody>
              {episodeList.map( episode => <ItemEpisode key={episode} data={episode} /> )}
              </tbody>
            </table>
            <button onClick={() => dispatch(start()) } >New Episode</button>
          </div>
}
