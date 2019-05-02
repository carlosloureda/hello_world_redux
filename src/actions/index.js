export const SET_NAME = "SET_NAME";
export const setName = text => ({ type: SET_NAME, name: text });

export const ADD_PHOTO = "ADD_PHOTO";

export const addPhoto = apiData => ({ type: ADD_PHOTO, photo_url: apiData });

const PEXELS_CLIENT_ID = "SET YOUR PEXEL ID";

// THe second function is the thunk (the dispatch), this does scale, it is splitted from the set_name, easier to test
export const fetchPhotoFromAPI = query => dispatch => {
  const options = {
    headers: {
      Authorization: PEXELS_CLIENT_ID
    }
  };
  const queryUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1`;
  fetch(queryUrl, options)
    .then(response => response.json())
    .then(response => {
      let photo_url = "";
      if (response.total_results && response.photos && response.photos.length) {
        photo_url = response.photos[0].src.small;
      }
      dispatch(addPhoto(photo_url));
    });
};
