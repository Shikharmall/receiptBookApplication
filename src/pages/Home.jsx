import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Pagination from "../components/Pagination";
import RecipeData from "../components/RecipeData";
import { getAllRecipeAPI } from "../api/recipeAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

export default function Home() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeDataCount, setRecipeDataCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [type, setType] = useState("");

  const getAllRecipeFunc = async (currentPage, type, search) => {
    setLoading(true);
    try {
      const response = await getAllRecipeAPI(currentPage, type, search);
      if (response.status === 200) {
        setLoading(false);
        setRecipeData(response?.data?.results);
        setRecipeDataCount(response?.data?.totalResults);
      } else {
        setLoading(false);
        toast(response?.data?.message);
      }
    } catch (error) {
      setLoading(false);
      toast(error);
    }
  };

  useEffect(() => {
    getAllRecipeFunc(currentPage, type, search);
  }, [currentPage, type, search]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header />

      <div className="flex flex-wrap items-center flex-col md:flex-row justify-end py-4 bg-white dark:bg-gray-800 rounded-tl-lg rounded-tr-lg mx-3 sm:mx-20">
        <div className="relative p-2 box-border w-full md:w-auto">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Categories</option>
            <option value="main_course">Main Course</option>
            <option value="side_dish">Side Dish</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="salad">Salad</option>
            <option value="bread">Bread</option>
            <option value="breakfast">Breakfast</option>
            <option value="soup">Soup</option>
            <option value="beverage">Beverage</option>
            <option value="sauce">Sauce</option>
            <option value="marinade">Marinade</option>
            <option value="fingerfood">Finger Food</option>
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </div>

        <div className="relative p-2 box-border w-full lg:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            placeholder="Search for recipe"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader
            color="gray"
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <RecipeData recipeData={recipeData} />
      )}

      <Pagination
        currentPage={currentPage}
        setPage={setPage}
        recipeDataCount={recipeDataCount}
      />
    </>
  );
}
