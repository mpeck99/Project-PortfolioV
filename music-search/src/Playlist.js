import React, {Component} from 'react';

class Playlist extends Component{

    componentDidMount(){

        console.log(localStorage.getItem('playlistItem'));

    }
    render(){
        return(
            <div className='search'>
                <h1>Playlist</h1>
            </div>
        )
    }
}

export default Playlist;
