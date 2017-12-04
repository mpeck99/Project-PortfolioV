import React, {Component} from 'react';

const loadData="ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&format=json";


class Home extends Component{

    render(){
     console.log(loadData);
        return(

            <div>
                <h1>Home</h1>
            </div>
        )
    }


}


export default Home;