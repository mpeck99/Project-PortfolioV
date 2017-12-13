import React, {Component} from 'react';
import searchIcon from './assets/music-search.png';
import addIcon from './assets/126583-64.png';

var savedData=[];

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            artists:[],
            albums:[],
            tracks:[],
            playlist:[]
        };
        this.handleClick=this.handleClick.bind(this);
        this.addToList=this.addToList.bind(this);


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
            })
            .catch((ex)=>{
                alert('OOPS! Something went wrong',ex);
            });
        fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5&artist='+userInput)
            .then((Response)=>Response.json())
            .then((getResponse)=>{
                for(var i=0; i<getResponse.results.artistmatches.artist.length;i++){
                    artistsArray.push(getResponse.results.artistmatches.artist[i]);
                    this.setState({loading:false,artists:artistsArray});

                }
            })
            .catch((ex)=>{
                alert('OOPS! Something went wrong',ex);
            });
        fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5&album='+userInput)
            .then((Response)=>Response.json())
            .then((getResponse)=>{

                for(var i=0; i<getResponse.results.albummatches.album.length;i++){
                    albumsArray.push(getResponse.results.albummatches.album[i]);
                    this.setState({loading:false,albums:albumsArray});

                }
            })
            .catch((ex)=>{
                alert('OOPS! Something went wrong',ex);
            });

    }

      addToList(e){
          savedData.push(e);
          localStorage.setItem('items',JSON.stringify(savedData));
          console.log(savedData);

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
                    <input type='text' ref='searchTerm'/><button type='button'><img src={searchIcon} alt='Search' onClick={this.handleClick.bind(this)}/></button>
                </form>
                </div>
                <h2>Tracks</h2>
                <section className='tracks'>
                    {this.state.tracks.map((t)=><article className='data'><img src={t.image[3]['#text']} alt={t.name} classID='trackImg'/><div className='overlay'><button type='button' className='addButton' onClick={this.addToList.bind(this,t)}><img src={addIcon} alt='add' style={{width: '10px'}}/> </button><h3 classID='name'>{t.name}</h3></div></article>)}
                </section>
                <h2>Artists</h2>
                <section className='artists'>
                    {this.state.artists.map((i)=><article className='data'><img src={i.image[3]["#text"]} alt={i.name} classID='topImg'/><div className='overlay'><button type='button' className='addButton' onClick={this.addToList.bind(this,i)}><img src={addIcon}  alt='add' style={{width: '10px'}}/></button><h3 classID='name'>{i.name}</h3></div></article>)}
                </section>
                <h2>Albums</h2>
                <section className='albums'>
                    {this.state.albums.map((i)=><article className='data'><img src={i.image[3]["#text"]} alt={i.name} classID='topImg'/><div className='overlay'><button type='button' className='addButton' onClick={this.addToList.bind(this,i)}><img src={addIcon}  alt='add' style={{width: '10px'}}/></button><h3 classID='name'>{i.name}</h3></div></article>)}
                </section>

            </div>

        )
    }
}

export default Search;