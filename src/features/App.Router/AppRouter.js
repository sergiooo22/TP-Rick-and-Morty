import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Detail from '../Pages/Detail';
import EpisodeList from '../Pages/EpisodeList';
import Home from '../Pages/Home';
import NewEpisode from '../Pages/NewEpisode';
import NotFound from '../Pages/NotFound';

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/episodes" component={EpisodeList} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/new-episode" component={NewEpisode} />
                <Route exact path="/*" component={NotFound} />
            </Switch>
        </Router>

    )
}
