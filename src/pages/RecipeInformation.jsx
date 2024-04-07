import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import { getRecipeInfoAPI } from "../api/recipeAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistActions } from "../redux/actions";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};
export default function RecipeInformation() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isPresent, setIsPresent] = useState(false);

  const recipeWishlist = useSelector((state) => state.wishlistItem);

  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  const getRecipeInfoFunc = async (id) => {
    setLoading(true);
    try {
      const response = await getRecipeInfoAPI(id);
      if (response.status === 200) {
        setRecipeData([...recipeData, response?.data]);
        setLoading(false);
      } else {
        toast(response?.data?.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast(error);
    }
  };

  useEffect(() => {
    getRecipeInfoFunc(id);
  }, [id]);

  useEffect(() => {
    if (
      recipeWishlist &&
      recipeWishlist.length > 0 &&
      recipeData &&
      recipeData.length > 0
    ) {
      const filteredRecipes = recipeWishlist.filter(
        (item) => item?.id === recipeData[0]?.id
      );
      console.log(filteredRecipes);
      setIsPresent(filteredRecipes.length > 0);
    }
  }, [recipeWishlist, recipeData]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header />
      {loading ? (
        <div className="flex items-center justify-center w-[100%] h-[80vh]">
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
        <>
          {recipeData && recipeData.length > 0 ? (
            <div className="text-gray-700 body-font bg-white">
              <div className="px-5 py-14 lg:py-24 lg:w-4/5 mx-auto flex flex-col lg:flex-row">
                <div>
                  <img
                    alt="recipe-img"
                    className="w-full lg:w-[500px] lg:min-w-[500px]  rounded border border-gray-200"
                    src={recipeData[0]?.image}
                  />
                </div>

                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {recipeData[0]?.veryPopular ? (
                      <p>Very Popular Recipe</p>
                    ) : null}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {recipeData[0]?.title}
                  </h1>

                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill={star1 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-[#FFD700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star2 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-[#FFD700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star3 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-[#FFD700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star4 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-[#FFD700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star5 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-[#FFD700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">0 Reviews</span>
                    </span>
                    <span className="flex justify-center items-center ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      {recipeData[0]?.vegetarian ? (
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      )}
                    </span>
                  </div>

                  <h2 className="text-sm title-font text-gray-600 tracking-widest underline my-2">
                    <p>Ingrediants</p>
                  </h2>

                  <div className="pt-2 pb-2">
                    {recipeData[0]?.extendedIngredients.map((item, index) => (
                      <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        key={index}
                      >
                        {item?.name}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-sm title-font text-gray-600 tracking-widest underline my-2">
                    <p>Instructions</p>
                  </h2>

                  <ul className="pt-2 pb-2">
                    {/* bg-gray-200 rounded-md */}
                    {recipeData[0]?.analyzedInstructions[0]?.steps?.map(
                      (item, index) => (
                        <li
                          className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          key={index}
                        >
                          <span className="font-bold">&#183;</span> {item.step}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex mt-3 items-center border-b-2 border-gray-300 mb-5"></div>

                  <div className="flex justify-end">
                    <span className="flex items-center">
                      <svg
                        className="w-6 h-6 text-[#FFD700] cursor-pointer"
                        fill={star1 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setStar1(true);
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star2 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6 text-[#FFD700] cursor-pointer"
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setStar1(true);
                          setStar2(true);
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star3 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6 text-[#FFD700] cursor-pointer"
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setStar1(true);
                          setStar2(true);
                          setStar3(true);
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star4 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6 text-[#FFD700] cursor-pointer"
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setStar1(true);
                          setStar2(true);
                          setStar3(true);
                          setStar4(true);
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill={star5 ? "currentColor" : "#fff"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6 text-[#FFD700] cursor-pointer"
                        viewBox="0 0 24 24"
                        onClick={() => {
                          setStar1(true);
                          setStar2(true);
                          setStar3(true);
                          setStar4(true);
                          setStar5(true);
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </span>
                    <button
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                      disabled={isPresent ? true : false}
                      onClick={() => {
                        dispatch(
                          addWishlistActions(
                            recipeData[0]?.id,
                            recipeData[0]?.title,
                            recipeData[0]?.image,
                            recipeData[0]?.summary
                          )
                        );
                        toast("Added to wishlist!");
                      }}
                    >
                      <svg
                        fill={isPresent ? "red" : "gray"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-[100%] h-[80vh]">
              <div className="flex flex-col items-center justify-center">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 59 59"
                  style={{ enableBackground: "new 0 0 59 59", width: "100px" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#556080" }}
                        d="M54.392,19H3.608C1.616,19,0,17.384,0,15.392V3.608C0,1.616,1.616,0,3.608,0h50.783
			C56.384,0,58,1.616,58,3.608v11.783C58,17.384,56.384,19,54.392,19z"
                      />
                      <path
                        style={{ fill: "#38454F" }}
                        d="M54.392,38H3.608C1.616,38,0,36.384,0,34.392V22.608C0,20.616,1.616,19,3.608,19h50.783
			C56.384,19,58,20.616,58,22.608v11.783C58,36.384,56.384,38,54.392,38z"
                      />
                      <path
                        style={{ fill: "#556080" }}
                        d="M54.392,57H3.608C1.616,57,0,55.384,0,53.392V41.608C0,39.616,1.616,38,3.608,38h50.783
			C56.384,38,58,39.616,58,41.608v11.783C58,55.384,56.384,57,54.392,57z"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="9.5"
                        cy="9.5"
                        r="3.5"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="49"
                        cy="8"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="45"
                        cy="8"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="51"
                        cy="11"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="47"
                        cy="11"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="41"
                        cy="8"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="43"
                        cy="11"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="37"
                        cy="8"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="39"
                        cy="11"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="33"
                        cy="8"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="35"
                        cy="11"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="9.5"
                        cy="28.5"
                        r="3.5"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="49"
                        cy="27"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="45"
                        cy="27"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="51"
                        cy="30"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="47"
                        cy="30"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="41"
                        cy="27"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="43"
                        cy="30"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="37"
                        cy="27"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="39"
                        cy="30"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="33"
                        cy="27"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="35"
                        cy="30"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="9.5"
                        cy="47.5"
                        r="3.5"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="49"
                        cy="46"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="45"
                        cy="46"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="51"
                        cy="49"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="47"
                        cy="49"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="41"
                        cy="46"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="43"
                        cy="49"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="37"
                        cy="46"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="39"
                        cy="49"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="33"
                        cy="46"
                        r="1"
                      />
                      <circle
                        style={{ fill: "#8697CB" }}
                        cx="35"
                        cy="49"
                        r="1"
                      />
                    </g>
                    <g>
                      <circle
                        style={{ fill: "#ED7161" }}
                        cx="47"
                        cy="47"
                        r="12"
                      />
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M48.414,47l3.536-3.536c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L47,45.586
			l-3.536-3.536c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L45.586,47l-3.536,3.536c-0.391,0.391-0.391,1.023,0,1.414
			c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L47,48.414l3.536,3.536c0.195,0.195,0.451,0.293,0.707,0.293
			s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L48.414,47z"
                      />
                    </g>
                  </g>
                </svg>
                <p className="text-xl text-gray-500">No record found.</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
