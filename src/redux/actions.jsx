import { addWishlist } from "./types";

export const addWishlistActions = (id, title, image, description) => {
  return {
    type: addWishlist,
    payload: {
      id: id,
      title: title,
      image: image,
      description: description,
      timestamp: new Date().toLocaleString(),
    },
  };
};
