import React from "react";

export default function Pagination({ currentPage, setPage, recipeDataCount }) {
  return (
    <>
      <div className="flex justify-end px-3 sm:px-20 my-6">
        {recipeDataCount > 0 ? (
          <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {currentPage} of {Math.ceil(recipeDataCount / 12)}
          </a>
        ) : (
          <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            0 of 0
          </a>
        )}

        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              {recipeDataCount > 0 ? (
                <>
                  {currentPage === 1 ? (
                    <a
                      className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                      onClick={() => setPage(Math.ceil(recipeDataCount / 12))}
                    >
                      Previous
                    </a>
                  ) : (
                    <a
                      className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                      onClick={() => setPage(currentPage - 1)}
                    >
                      Previous
                    </a>
                  )}
                </>
              ) : (
                <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer">
                  Previous
                </a>
              )}
            </li>

            <li>
              {recipeDataCount > 0 ? (
                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white">
                  {currentPage}
                </a>
              ) : (
                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white">
                  0
                </a>
              )}
            </li>

            <li>
              {recipeDataCount > 0 ? (
                <>
                  {currentPage === Math.ceil(recipeDataCount / 12) ? (
                    <a
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                      onClick={() => setPage(1)}
                    >
                      Next
                    </a>
                  ) : (
                    <a
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                      onClick={() => setPage(currentPage + 1)}
                    >
                      Next
                    </a>
                  )}
                </>
              ) : (
                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer">
                  Next
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
