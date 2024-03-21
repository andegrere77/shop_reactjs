import { useState, useEffect } from "react";
import Product from "./Product";
function Shop() {
  // Hooks de estado para almacenar la información de los productos y categorías

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");

  //Hook de efecto para solicitar los datos hasta que se hayan obtenido todos los productos
  useEffect(() => {
    getProducts(category);
    getCategories();
    console.log(products);
    console.log(categories);
  }, [products.length, categories.length, category]);

  async function getProducts(cat) {
    let url = "https://dummyjson.com/products?limit=100";
    if (cat !== "All") {
      url = "https://dummyjson.com/products/category/" + cat;
    }
    const data = await fetch(url);
    const dataProducts = await data.json();
    setProducts(dataProducts.products);
  }

  async function getCategories() {
    const url = "https://dummyjson.com/products/categories";
    const data = await fetch(url);
    const dataCategories = await data.json();
    setCategories(dataCategories);
  }

  function handleSelect(category) {
    setCategory(category);
  }

  return (
    <div className="container mt-5">
      <select
        className="form-control select-categories"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="all">All</option>

        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
      <h5 className="text-center">{category}</h5>
      {products.length > 0 ? (
        <div className="row row-col-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mt-5">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      ) : (
        <h1 className="mt-5">Loading products...</h1>
      )}
    </div>
  );
}

export default Shop;
