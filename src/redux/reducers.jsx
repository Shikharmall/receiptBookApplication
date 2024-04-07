import { addWishlist } from "./types";

const initialState = {
  wishlistItem: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case addWishlist:
      return {
        ...state,
        wishlistItem: [...state.wishlistItem, action.payload],
      };
    default:
      return state;
  }
};

export default recipeReducer;
