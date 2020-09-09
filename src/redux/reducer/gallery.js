import { GET_GALLERY, GETTING_GALLERY } from "../../constants/index";

const initialState = {
  gallery: [],
};

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY:
      return { ...state, galleryItems: action.payload };
    case GETTING_GALLERY:
      return { ...state, galleryStatus: action.status };
    default:
      return state;
  }
}

export default galleryReducer;
