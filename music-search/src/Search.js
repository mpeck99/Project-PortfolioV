import React, {Component} from 'react';
import searchIcon from './assets/music-search.png';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            artists:[],
            albums:[],
            tracks:[],
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        var artistsArray=[];
        var albumsArray=[];
        var tracksArray=[];
        var userInput=this.refs.searchTerm.value;

       console.log(userInput);
        fetch('http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5&track='+userInput)
            .then((Response)=>Response.json())
            .then((getResponse)=>{
                for(var i=0; i<getResponse.results.trackmatches.track.length;i++){
                    tracksArray.push(getResponse.results.trackmatches.track[i]);
                    this.setState({loading:false,tracks:tracksArray});
                }
            });
        fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5&artist='+userInput)
            .then((Response)=>Response.json())
            .then((getResponse)=>{
                for(var i=0; i<getResponse.results.artistmatches.artist.length;i++){
                    artistsArray.push(getResponse.results.artistmatches.artist[i]);
                    this.setState({loading:false,artists:artistsArray});
                }
            });
    }
    render(){
        var input=document.querySelector('.searchTerm');
        if(this.state.loading){
            return <h3>Loading...</h3>
        }
        return(

            <div className='searchData'>
            <h1>Search for songs, artists and albums!</h1>
                <div>
                <form className='search'>
                    <input type='text' ref='searchTerm'/><button type='button'><img src={searchIcon} onClick={this.handleClick}/></button>
                </form>
                </div>
                <h2>Tracks</h2>
                <section className='tracks'>
                    {this.state.tracks.map((t)=><article><img src={t.image[3]['#text']} alt={t.name} classID='trackImg'/> <h3 classID='name'>{t.name}</h3></article>)}
                </section>
                <h2>Artists</h2>
                <section className='artists'>
                    {this.state.artists.map((i)=><article><img src={i.image[3]["#text"]} alt={i.name} classID='topImg'/><h3 classID='name'>{i.name}</h3></article>)}
                </section>

            </div>

        )
    }
}

export default Search;