import { Logout } from './controllers/Auth.js';
import { getVideoByVideoId } from './controllers/videos.js';
import { verifyUser } from './middleware/authUser.js';

// verify user
if (verifyUser()) {
  //panggil function verify user
  location.href = './login.html';
  alert(verifyUser());
}

// logout
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  Logout()
});

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
window.onYouTubeIframeAPIReady = function () {
  onYouTubeIframeAPIReady();
};

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
deskripsi.innerText = detailVideo.description;

// //-----------------rekomendasi---------------

// let dataRec = await getVideos();
// console.log(dataRec);
// const createRec = (dataRec) => {
//   let rec= document.getElementById("list-d-video")
//   // card rekomen
//   dataRec.map((item) => {
//     rec.innerHTML += `<div id="${item.videoId}" class="card m-3 hoveryt" style="width: 14rem">
//     <img src="https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg">
//     <div class="card-body">
//       <h6 class="card-title">${item.title}</h6>
//     </div>
//   </div>`;
//   });
