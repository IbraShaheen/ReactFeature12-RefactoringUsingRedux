
import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Styling
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import FormProduct from "./components/FormProduct";
import ShopsList from "./components/ShopsList";
import { useSelector } from "react-redux";
import ShopDetails from "./components/ShopDetails";
// Data
import Routes from "./components/Routes";


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  // const [products, setProducts] = useState(productsData);
  // const  products = useSelector(state => state.movies.products)

  // const deleteProduct = (productId) => {
  //   const updatedProducts = products.filter(
  //     (product) => product.id !== productId
  //   );
  //   setProducts(updatedProducts);
  // };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Routes/>
    </ThemeProvider>
  );
}

export default App;