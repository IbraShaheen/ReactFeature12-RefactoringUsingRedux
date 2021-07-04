import ShopItem from "./ShopItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const ShopsList = () => {
  const [query, setQuery] = useState("");
  const shopsData = useSelector((state) => state.shops.shops);
  console.log(shopsData)
  let shops = shopsData
    .filter((shop) =>
      shop.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <center>
      <SearchBar setQuery={setQuery} />
      {shops}
    </center>
  );
};

export default ShopsList;