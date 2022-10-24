export const getVideos = async () => {
  try {
    const URL = 'https://6348abae0b382d796c75343e.mockapi.io/videos';
    let response = await fetch(URL);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVideoByVideoId = async (videoId) => {
  try {
    const dataVideo = await getVideos();
    let findVideo = dataVideo.find((item) => item.videoId == videoId);
    return findVideo;
  } catch (error) {
    return error;
  }
};

export const createCard = (dataVideo) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = "";
  // create card youtube
  dataVideo.map((item) => {
    cardContainer.innerHTML += `<div id="${item.videoId}" class="card m-3 hoveryt" style="width: 14rem">
    <img src="https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg">
    <div class="card-body">
      <h6 class="card-title">${item.title}</h6>
    </div>
  </div>`;
  });

  const allCard = document.getElementsByClassName('card');

  for (const item of allCard) {
    item.addEventListener('click', (event) => {
      location.href = `./detail-video.html?videoId=${event.currentTarget.id}`;
    });
  }
};

export const getVideoBySearch = async (search) => {
  try {
    const URL = 'https://6348abae0b382d796c75343e.mockapi.io/videos';
    let response = await fetch(URL);
    let result = await response.json();
    result = result.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVideoByCategory = async (category) => {
  try {
    const URL = `https://6348abae0b382d796c75343e.mockapi.io/videos?category=${category}`;
    let response = await fetch(URL);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
