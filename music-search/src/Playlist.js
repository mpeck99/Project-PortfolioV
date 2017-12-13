import React, {Component} from 'react';


var playlistData=[];
class Playlist extends Component{
    constructor(){
        super()
        this.state={
            listData:[]
        };

    }
    componentWillMount(){
        var data=JSON.parse(localStorage.getItem('items'));
        playlistData.push(data);
        console.log(playlistData);
       this.setState({listData:playlistData});

    }
    render(){

        return(
            <div className='search'>
                <h1>Playlist</h1>
                <section className='musicData'>
                    {this.state.listData.map((i)=><article className='data'><img src={i[0].image[3]["#text"]} alt={i.name} classID='topImg'/><div className='overlay'><h3 className='name'>{i[0].name}</h3></div></article>)}
                </section>
            </div>
        )
    }
}

export default Playlist;
