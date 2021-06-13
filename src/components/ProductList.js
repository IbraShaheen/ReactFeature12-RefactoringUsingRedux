// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {

  const products = useSelector((state)=> state.products)

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}

      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
        <center>
      <Link to="/products/FormProduct">
      <button type="button" class="btn btn-success">Add a Product</button>
        </Link>
        </center>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;