import { Me } from './controllers/Auth.js';
import {
  createCard,
  getVideoBySearch,
  getVideos,
} from './controllers/videos.js';
import { verifyUser } from './middleware/authUser.js';

// verify user
if (verifyUser()) {
  //panggil function verify user
  location.href = './login.html';
  alert(verifyUser());
}

// mengambil data diri
let data = async () => {
  let result = await Me();
  return result;
};
let my = await data();

const welcome = document.getElementById('welcome');
welcome.innerText = `Welcome ${my.data.fullname}`;

// get all data video
let dataVideo = await getVideos();
console.log(dataVideo);
createCard(dataVideo);

const cardContainer = document.getElementById('card-container');
dataVideo.map((item) => {
  cardContainer.innerHTML += `<div id="${item.videoId}" class="card m-3 hoveryt" style="width: 14rem">
  <img src="https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg">
  <div class="card-body">
    <p class="card-title">${item.title}</p>
  </div>
</div>`;
  console.log(item);
});

const formSearch = document.getElementsByTagName('form')[0];
formSearch.addEventListener('keyup', async (e) => {
  e.preventDefault();
  let searchTerm = document.getElementById('search').value;
  console.log(searchTerm);
  if (!searchTerm) {
    dataVideo = await getVideos();
    createCard(dataVideo);
  } else {
    dataVideo = await getVideoBySearch(searchTerm);
    createCard(dataVideo)
  }
});
