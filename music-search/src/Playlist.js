import React, {Component} from 'react';
var pData=[];
var playlistData=[];
class Playlist extends Component{
    constructor(){
        super()
        this.state={
            //array to hold the playlist data
            listData:[]
        };

    }
    componentWillMount(){
        //clearing the states list data
        this.setState({listData:[]});
        //looping through the saved data to populate the playlist
        var data=JSON.parse(localStorage.getItem('items'));
        if(localStorage.length>0){
            for(var i=0;i<data.length; i++){
                playlistData.pop();
                playlistData.push(data[i]);
                this.setState({listData:playlistData});
            }
        }
        else{

        }
        //console.log(playlistData);
    }
    render(){
        //checking to see if the data is null if it is does nothing
        if(this.state.listData===null){

        }
        //loads data if the local storage is not emply
        else{
            for(var i=0; i<this.state.listData.length; i++){
                console.log(this.state.listData[i]);
                var info=this.state.listData[i];
                pData.push(info);
            }
            //console.log(pData);

        }
    //loading the data
        return(
            <div className='playlistData'>
                <h1>Playlist</h1>
                <section className='musicData'>
                    {pData.map(i=><article className='data'><img src={i.image[3]["#text"]} alt={i.name} classID='topImg'/><div className='overlay'><h3 className='name'>{i.name}</h3><a href={i.url}>Listen</a></div></article>)}
                </section>
            </div>
        )
    }
}

export default Playlist;
