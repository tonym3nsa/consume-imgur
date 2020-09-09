import { GET_GALLERY, HOT, DAY, TOP, GETTING_GALLERY } from "../../constants";

export const getGallery = (filter) => {
  const apiURL = process.env.REACT_APP_API_ENDPOINT;
  const auth = process.env.REACT_APP_AUTHORIZATION;
  let headers = new Headers();
  headers.append("Authorization", auth);
  const section = filter && filter.section ? filter.section : HOT;
  const sort = filter && filter.sort ? filter.sort : TOP;
  const window = filter && filter.window ? filter.window : DAY;

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  return (dispatch) => {
    dispatch({
      type: GETTING_GALLERY,
      status: true,
    });
    return fetch(
      `${apiURL}gallery/${section}/${sort}/${window}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const payload = JSON.parse(result);

        dispatch({
          type: GET_GALLERY,
          payload: payload.data,
        });
        dispatch({
          type: GETTING_GALLERY,
          status: false,
        });
      })
      .catch((error) => {
        alert(`There was an error: ${error}`);
      });
  };
};

export default {
  getGallery,
};
