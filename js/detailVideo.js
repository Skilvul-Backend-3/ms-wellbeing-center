import { getVideoByVideoId } from './controllers/videos.js';

const params = new URLSearchParams(window.location.search);
const videoId = params.get('videoId');
// ! youtube
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: videoId,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}
window.onYouTubeIframeAPIReady = function() {
  onYouTubeIframeAPIReady()
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// ! judul and description

let detailVideo = await getVideoByVideoId(videoId);

const title = document.getElementById('title');
const deskripsi = document.getElementById('deskripsi');
title.innerText = detailVideo.title;
deskripsi.innerText = detailVideo.description
