export const setName = (text) => ({ type: "SET_NAME", name: text });

export const fetchPhotoFromAPI = (query) => (dispatch) => {
  const options = {
    headers: { Authorization: "SET YOUR PEXEL ID" },
  };
  fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let photo_url = "";
      if (response.total_results && response.photos && response.photos.length) {
        photo_url = response.photos[0].src.small;
      }
      dispatch(addPhoto(photo_url));
    });
};

export const ADD_PHOTO = "ADD_PHOTO";
export const addPhoto = (photo_url) => ({
  type: ADD_PHOTO,
  photo_url: photo_url,
});
