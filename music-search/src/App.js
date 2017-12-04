import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
class App extends Component {
render() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul className='navigation'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Search'}>Search</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Search' component={Search}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
