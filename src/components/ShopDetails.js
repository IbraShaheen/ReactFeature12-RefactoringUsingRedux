// import { useParams, Redirect } from "react-router";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import ShopItem from "../components/ShopItem";
// import ProductList from "../components/ProductList";
// //import { getProductById } from "../../store/utils";
// import { Button } from "bootstrap";

// const ShopDetails = () => {
//   const shopSlug = useParams().shopSlug;
//   const shops = useSelector((state) => state.shops.shops);
//   const products = useSelector((state) => state.movies.products);
//   const shop = shops.find((b) => b.slug === shopSlug);
//   console.log(shop)
//   if (!shop) return <Redirect to="/" />;
    
// const getProductById = (productId, products) =>
// products.find((product) => product.id === productId);

//   const listOfProducts = shop.movies.map((product) => getProductById(product.id, products));

//   return (
//     <div>
//       {" "}
//       <div>
//         <h3>{shop.name}</h3>
//         <img src={shop.img} />

//         <Link to={`/shops/${shop.id}/products/new`}>
//           <Button>Add Product</Button>
//         </Link>
//       </div>
//       <ProductList products={listOfProducts} />
//     </div>
//   );
// };

// export default ShopDetails;

import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
// import { getProductById } from "../store/utlis";

const ShopDetails = () => {
  const shops = useSelector((state)=> state.shops.shops)
  const products= useSelector((state)=>state.movies.products)
  const  shopSlug  = useParams().shopSlug;
  const shop = shops.find((shop) => shop.slug === shopSlug);

  if (!shop) return <Redirect to="/shops" />;
  

  const getProductById = (productId, products) =>
products.find((product) => product.id === productId);
  const listOfProducts =shop.movies.map((movie)=>getProductById(movie.id,products))
  // console.log(listOfProducts)
 
  
  
  return (
    <DetailWrapper>
      <Link to="/shops">Back to Shops</Link>
      <Link to={`/shops/${shop.id}/products/new`}  >Add Product</Link>
      <h1>{shop.name}</h1>
      <img src={shop.image} alt={shop.name} />
      
      
      {/* <DeleteButton shopId={shop.id} /> */}
      <ProductList products ={listOfProducts} />
    </DetailWrapper>
  );
};

export default ShopDetails;