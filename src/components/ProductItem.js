// Components
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// Styling
import { ProductWrapper } from "../styles";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <center>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} />

        <Link to={`/products/${product.slug}/edit`}>
        <button className="btn" > Update </button>
        </Link>
        </center>
      
    </ProductWrapper>
  );
};

export default ProductItem;
