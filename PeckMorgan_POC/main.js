
var apiTrack="http://ws.audioscrobbler.com/2.0/?method=track.search&track=";
var apiKey="&api_key=41adbd33ca5a768aa7ba9a51e3f747f6&limit=4&format=json";
var apiAlbum="http://ws.audioscrobbler.com/2.0/?method=album.search&album=";
var apiArtist="http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=";
var searchKey=document.querySelector('.searchInput');
var musicData=document.querySelector('.songData');
var buttonClick=document.querySelector('.searchButton');
var artistData=document.querySelector('.artistData');
var albumData=document.querySelector('.albumData');
function getData(){

    //creating the specific urls for tracks, artists, and albums
    var trackUrl=apiTrack+searchKey.value+apiKey;
    var albumUrl=apiAlbum+searchKey.value+apiKey;
    var artistUrl=apiArtist+searchKey.value+apiKey;
    //getting the data from the track url
    fetch(trackUrl)
    .then(response=>response.json())
    .then(responseAsJson=> {
        //resetting the data so that it is cleared on each search
        musicData.innerHTML='';
        //looping through all of the json data for the tracks
        for(var i=0; i<responseAsJson.results.trackmatches.track.length; i++){
            //setting the inner html of the song data div
            musicData.innerHTML+='<img alt="trackImg" src="'+responseAsJson.results.trackmatches.track[i].image[2]['#text'].replace('"','')+'"/><br>'+responseAsJson.results.trackmatches.track[i].name+'<br>';
        }

    });
    //getting the data from the artists url
    fetch(artistUrl)
        .then(response=>response.json())
        .then(artistResponse=>{
            //resetting the artist div
            artistData.innerHTML='';
            //looping through all the artist data
            for(var i=0; i<artistResponse.results.artistmatches.artist.length; i++){
                //setting the inner html of the artist data div
                artistData.innerHTML+='<img alt="artistImg" src='+artistResponse.results.artistmatches.artist[i].image[2]['#text']+'/><br>'+artistResponse.results.artistmatches.artist[i].name+'<br>';
            }
        });
    //getting the data from the albums url
    fetch(albumUrl)
        .then(response=>response.json())
        .then(albumResponse=>{
            //resetting the album inner html div
            albumData.innerHTML='';
            //looping through all the album data
            for(var i=0; i<albumResponse.results.albummatches.album.length; i++){
    //setting the inner html for the album data div
                albumData.innerHTML+='<img alt="albumImage" src='+albumResponse.results.albummatches.album[i].image[2]['#text']+'/><br>'+albumResponse.results.albummatches.album[i].name+'<br>';
            }
        });
    //clearing the input box so that it is ready for the next input
    searchKey.value='';
}
//searching for the music data on the buttons click
buttonClick.addEventListener('click',getData,false);