import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";
const API = import.meta.env.VITE_API;

// API for getting all recipe list with pagination and filter

export const getAllRecipeAPI = async (
  currentPage,
  type,
  search
) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/recipes/complexSearch?apiKey=${API}&number=12&offset=${
        (currentPage - 1) * 12
      }&query=${search}&type=${type}`,
      {
        method: "GET",
      }
    );
    return result;
  } catch (error) {
    return error.response;
  }
};

// API for getting particular recipe information

export const getRecipeInfoAPI = async (recipeid) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/recipes/${recipeid}/information?apiKey=${API}`,
      {
        method: "GET",
      }
    );
    return result;
  } catch (error) {
    return error.response;
  }
};
