import React from "react";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/categorySlice";
import Categories from "./CategoriesButton";
import "../Home.css"; // Import the CSS for styling

function Home() {
  const { data: products } = useSelector((state) => state.product);
  const categories = ["all", ...new Set(products.map((product) => product.category))];
  const dispatch = useDispatch();

  const filterItems = (category) => {
    dispatch(setCategory(category === "all" ? "all" : category));
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to the E-Comm Store</h1>
      </header>

      {/* Categories Section */}
      <div className="categories-container">
        <Categories categories={categories} filterItems={filterItems} />
      </div>

      {/* Products Section */}
      <section className="products-section">
        <h2>Products</h2>
        <Products />
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Debasismishra. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
