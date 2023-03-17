// URL-bő kihozza
const urlParams = new URLSearchParams(window.location.search);
const createParam = urlParams.get('create');
const nameParam = urlParams.get('name');
const codeParam = urlParams.get('code');
const playerType = "youtube";
const switchtype = "";
//const socket = io('ws://localhost:8080');
console.log(createParam)
console.log(codeParam)
console.log(nameParam)

let player;
// API faszság
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = function(){
  console.log(codeParam)
  document.getElementById('dacode').innerHTML = codeParam;
};

//socket.on('message', text => {

//  const el = document.createElement('li');
//  el.innerHTML = text;
//  document.querySelector('ul').appendChild(el)

//});

//document.querySelector('button').onclick = () => {

//  const text = document.querySelector('input').value;
//  socket.emit('message', text)
  
//}

// Lejátszó
if (createParam == 'true') {
  if (playerType == 'youtube') {
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: '',
    });
  }
}//else if (playerType == 'spotify') {
//    
//  
//  }
}

//Lejátszás
function searchVideos() {
  const inputValue = document.querySelector("#myList li:first-child").textContent;
  console.log(inputValue);
  const apiKey = 'AIzaSyDX9fI0iXQ4GXXMmkig3RcQfKW135meLgA';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const videoId = data.items[0].id.videoId;
      player.loadVideoById(videoId);
      player.playVideo();
      myList.removeChild(myList.firstElementChild);
    });
//  }else if (playerType == 'spotify') {
//    window.onSpotifyWebPlaybackSDKReady = () => {
//      const token = 'BQAW3LajxHmIXuab0u5IcMa12r7wGjE7LGcOyuIZZbFHA1kD1s8VWqZoMRM816FPHqr-0BIV-zfpWRWGbJ6BQbB2KYVlTYsuf6otLoxHYpShMpINFPHjN-1A5-XxsXXDPV8WCEDgiSrJGHhY9_PY5vrb0EbNOCg9MYmPkkfPdH1WkjzLb_PcskpehNbYEmkLRdU';
//      const player = new Spotify.Player({
 //       name: 'Web Playback SDK Quick Start Player',
//        getOAuthToken: cb => { cb(token); },
//        volume: 0.5
//      });
//    }
}

function addItem() {
  var input = document.getElementById("inputText").value;
  var list = document.getElementById("myList");
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(input));
  list.appendChild(item);
}