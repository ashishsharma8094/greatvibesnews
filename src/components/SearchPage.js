import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./Search";
import Stories from "./Stories";

const SearchPage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Stories />
      <Footer />
    </div>
  );
};

export default SearchPage;
