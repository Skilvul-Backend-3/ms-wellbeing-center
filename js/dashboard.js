import { Me } from './controllers/Auth.js';
import { getCategory, getVideos } from './controllers/videos.js';
import { verifyUser } from './middleware/authUser.js';

// verify user
if (verifyUser()) { //panggil function verify user
  location.href = './login.html';
  alert(verifyUser());
}

// mengambil data diri
let data = async () => {
  let result = await Me();
  return result;
};
let my = await data();
// console.log(my.data);

const welcome = document.getElementById('welcome');
welcome.innerText = `Welcome ${my.data.fullname}`;

// get all data video
let dataVideo = await getVideos();
function clickCard(id) {
  // console.log(id);
}

const cardContainer = document.getElementById('card-container');
dataVideo.map((item) => {
  cardContainer.innerHTML += `<div id="${item.videoId}" class="card m-3 hoveryt" style="width: 14rem">
  <img src="https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg">
  <div class="card-body">
    <h6 class="card-title">${item.title}</h6>
  </div>
</div>`;
  // console.log(item);
});

const allCard = document.getElementsByClassName('card');
// console.log(allCard);

for (const item of allCard) {
  // console.log(item);
  item.addEventListener('click', (event) => {
    location.href = `./detail-video.html?videoId=${event.currentTarget.id}`;
  });
}

//--------------------------Kategori----------------------
let dataKategori= await getVideos();
let findKategori = dataKategori.filter((schema, index, self) => index === self.findIndex((obj) => (obj.category === schema.category)))
let kategori= document.getElementById("kategori")
findKategori.map((item) => {
  kategori.innerHTML += `<li onclick="getCategory('${item.category}')" class="nav-item">
  <a class="nav-link" href="#">${item.category}</a>
</li>`;
});
console.log(await getCategory("fakta unik"))


