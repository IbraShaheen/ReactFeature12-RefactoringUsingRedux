
import { Link } from "react-router-dom";

const ShopItem = (props) => {
  const shop = props.shop;
  console.log(shop)
  return (
    <div>
      <h3>{shop.name}</h3>
      <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} style={{width:"280px",height:"280px"}} />
      </Link>
    </div>
  );
};

export default ShopItem;