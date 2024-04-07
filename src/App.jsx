import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import RecipeInformation from "./pages/RecipeInformation";
import WishList from "./pages/WishList";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/wishlist" element={<WishList />} />
      <Route exact path="/recipeInformation/:id" element={<RecipeInformation />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
