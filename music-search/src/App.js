import React, { Component } from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Playlist from './Playlist';
import Logo from './assets/logo.png';

class App extends Component {
render() {
    return (
        <BrowserRouter>
            <div className="App">
                <img src={Logo} alt='Logo' classID='Logo'/>
                <ul className='navigation'>
                    <li><NavLink to={'/'} activeClassName='active' style={{textDecoration:'none'}}>Home</NavLink></li>
                    <li><NavLink to={'/Search'} style={{textDecoration:'none'}}>Search</NavLink></li>
                    <li><NavLink to={'/Playlist'} style={{textDecoration:'none'}}>Playlist</NavLink></li>
                </ul>

                <Switch>
                    <Route exact path='/'  component={Home}/>
                    <Route path='/Search'  component={Search}/>
                    <Route path='/Playlist' component={Playlist}/>
                </Switch>

            </div>
        </BrowserRouter>


    );

    }

}

export default App;
