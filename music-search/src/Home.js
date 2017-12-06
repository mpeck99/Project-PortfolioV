import React, {Component} from 'react';




class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            artists:[],
        };

    }
    componentWillMount() {
        var array=[]
        fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json&limit=4')
            .then((Response)=>Response.json())
            .then((getResponse)=>{
            for(var i=0; i<getResponse.artists.artist.length;i++){
                    array.push(getResponse.artists.artist[i])
                    this.setState({loading:false,artists:array});


            }

        });


    }

    render(){
        console.log(this.state.artists)

        if(this.state.loading){
            return <h3>Loading...</h3>
        }
            return(<div>
                <h1>Top Artists</h1>
                <div className='topArtists'>
                    {this.state.artists.map((i)=><img src={i.image[3]["#text"]} alt={i.name} />)}{this.state.artists.map((elem)=><h1>{elem.name}</h1>)}

                </div>

            </div>);

    }


}


export default Home;