import {
  SET_CATEGORY,
  SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
} from "../types";

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const selectedCategory = (category) => {
  return {
    type: SELECTED_CATEGORY,
    payload: category,
  };
};
export const removeSelectedCategory = () => {
  return {
    type: REMOVE_SELECTED_CATEGORY,
  };
};
