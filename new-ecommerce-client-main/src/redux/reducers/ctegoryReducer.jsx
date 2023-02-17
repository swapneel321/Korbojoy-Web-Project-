import {
  SET_CATEGORY,
  SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
} from "../types";
const initialState = {
  category: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_CATEGORY:
      return { ...state, ...payload };
    case REMOVE_SELECTED_CATEGORY:
      return {};
    default:
      return state;
  }
};
