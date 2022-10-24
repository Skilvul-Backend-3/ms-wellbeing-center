import { Me } from './controllers/Auth.js';
import {
  createCard,
  getVideoByCategory,
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

// get all data video
let dataVideo = await getVideos();
createCard(dataVideo);

const formSearch = document.getElementsByTagName('form')[0];
const carouselImg = document.getElementById('carousel-img');
formSearch.addEventListener('keyup', async (e) => {
  e.preventDefault();
  carouselImg.style.display = 'none';
  let searchTerm = document.getElementById('search').value;
  console.log(searchTerm);
  if (!searchTerm) {
    dataVideo = await getVideos();
    carouselImg.style.display = '';
    createCard(dataVideo);
  } else {
    dataVideo = await getVideoBySearch(searchTerm);
    console.log(dataVideo);
    createCard(dataVideo);
  }
});

let dataKategori = await getVideos();
let findKategori = dataKategori.filter(
  (schema, index, self) =>
    index === self.findIndex((obj) => obj.category === schema.category)
);
let kategori = document.getElementById('ul-category');
await findKategori.map((item) => {
  kategori.innerHTML += `<li class="nav-item">
  <a class="nav-link" href="#">${item.category}</a>
</li>`;
});

const navLink = document.getElementsByClassName('nav-link');

for (const item of navLink) {
  item.addEventListener('click', async (e) => {
    e.preventDefault();
    if (item.innerText.toLowerCase() == 'semua') {
      carouselImg.style.display = '';
      dataKategori = await getVideos();
    } else {
      carouselImg.style.display = 'none';
      dataKategori = await getVideoByCategory(item.innerText.toLowerCase());
    }
    createCard(dataKategori);
  });
}

if (
  !dataKategori ||
  dataKategori == null ||
  dataKategori == '' ||
  dataKategori == []
) {
  cardContainer.innerHTML = '';
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = `
  <h1 class="d-flex justify-content-center align-items-center">Data Tidak Ditemukan :(</h1>
  `;
}
