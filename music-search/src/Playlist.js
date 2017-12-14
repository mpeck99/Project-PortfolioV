import React, {Component} from 'react';
var pData=[];
var playlistData=[];
class Playlist extends Component{
    constructor(){
        super()
        this.state={
            listData:[]
        };

    }
    componentWillMount(){
        this.setState({listData:[]});

        var data=JSON.parse(localStorage.getItem('items'));
        for(var i=0;i<data.length; i++){
            playlistData.pop();
            playlistData.push(data[i]);
            this.setState({listData:playlistData});
        }
        //console.log(playlistData);
    }
    render(){
        if(this.state.listData===null){

        }
        else{
            for(var i=0; i<this.state.listData.length; i++){
                console.log(this.state.listData[i]);
                var info=this.state.listData[i];
                pData.push(info);
            }
            //console.log(pData);

        }
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
