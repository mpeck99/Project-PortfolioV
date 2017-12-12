import React, {Component} from 'react';

class Playlist extends Component{

    componentDidMount(){


    }
    render(){


        var parsedData=localStorage.getItem('items');
        var data=JSON.parse(parsedData);
        console.log(data);
        return(
            <div className='search'>
                <h1>Playlist</h1>
                <section>
                    <article className='data'>
                        <img src={data[0].image[3]['#text']} alt='img'/>
                        <div className='overlay'>
                            <h2>Track: {data[0].name}</h2>
                            <h2>Artist: {data[0].artist}</h2>
                            <a href={data[0].url}>Listen</a>
                        </div>
                    </article>

                </section>
            </div>
        )
    }
}

export default Playlist;
