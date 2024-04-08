import React from "react";
import Header from "../partials/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WishList() {
  const recipe = useSelector((state) => state.wishlistItem);
  
  return (
    <>
      <Header />
      <div className="flex flex-col items-center jutify-center mt-7 m-3">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          {recipe &&
            recipe.map((item, index) => (
              <Link
                to={`/recipeInformation/${item?.id}`}
                className="bg-gray-200 w-100 p-5 m-2 rounded-lg flex"
                key={index}
              >
                <img
                  src={item?.image}
                  alt="recipe-item"
                  className="w-[100px] rounded-md"
                />
                <div className="px-6 py-2">
                  <p className="font-semibold text-xl mb-2 line-clamp-1">
                    {item?.title}
                  </p>
                  <div className="text-sm title-font text-gray-500 line-clamp-1">
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </div>
                </div>
              </Link>
            ))}

            {
              recipe && recipe.length >0
              ?
              null
              :
              <div className="flex justify-center items-center">
                <p className="text-lg text-gray-500 font-500">Wishlist Empty.</p>
              </div>
            }
        </div>
      </div>
    </>
  );
}
