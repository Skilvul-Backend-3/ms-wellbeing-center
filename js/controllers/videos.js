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
    let findVideo = dataVideo.find((item) => item.videoId == videoId)
    return findVideo;
  } catch (error) {
    return error;
  }
};
