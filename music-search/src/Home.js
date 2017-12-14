import React, {Component} from 'react';
import addIcon from './assets/126583-64.png';

var savedData=[];
//Home Page Component that renders an api link to load the top tracks and the top artists
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            artists:[],
            tracks:[]
        };
        this.addToList=this.addToList.bind(this);
    }
    addToList(e){
        savedData.push(e);
        localStorage.setItem('items',JSON.stringify(savedData));


    }
    componentWillMount() {
        var artistArray=[];
        var trackArray=[];
        fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5')
            .then((Response)=>Response.json())
            .then((getResponse)=>{
            for(var i=0; i<getResponse.artists.artist.length;i++){
                    artistArray.push(getResponse.artists.artist[i])
                    this.setState({loading:false,artists:artistArray});

            }

        })
            .catch((ex)=>{
            alert('OOPS! Something went wrong',ex);
        });
        fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=5')
            .then((Response)=>Response.json())
            .then((getResponse)=>{
                for(var i=0; i<getResponse.tracks.track.length;i++){
                   trackArray.push(getResponse.tracks.track[i]);
                    this.setState({loading:false,tracks:trackArray});

                }
            })
            .catch((ex)=>{
                alert('OOPS! Something went wrong',ex);
            });
    }

    render(){


        if(this.state.loading){
            return <h3>Loading...</h3>
        }
            return(

                <div className='homeData'>

                    <h1>Top Tracks</h1>
                <section>

                    {this.state.tracks.map((t)=><article className='data'><img src={t.image[3]['#text']} alt={t.name} classID='topImg'/><div className='overlay'><button type='button' className='addButton' onClick={this.addToList.bind(this,t)}><img src={addIcon} alt='add' style={{width: '10px'}}/> </button><h3 classID='name'>Track: {t.name}</h3><h4>Artist: {t.artist.name}</h4></div></article>)}
                </section>
                    <h1>Top Artists</h1>
                    <section className='topArtists'>
                        {this.state.artists.map((i)=><article className='data'><img src={i.image[3]["#text"]} alt={i.name} classID='topImg'/><div className='overlay'><button type='button' className='addButton' onClick={this.addToList.bind(this,i)}><img src={addIcon} alt='add' style={{width: '10px'}}/> </button><h3 classID='name'>{i.name}</h3><h4><a href={i.url}>Listen</a> </h4></div></article>)}
                    </section>
                </div>

            );

    }


}


export default Home;