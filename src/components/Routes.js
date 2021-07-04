import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import FormProduct from "./FormProduct";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import ShopDetails from "./ShopDetails";
import ShopsList from "./ShopsList";

const Routes = () => {

    const  products = useSelector(state => state.movies.products)
return(
    <Switch>
      <Route  path= {["/shops/:shopId/products/new", "/products/:productSlug/edit"]} >
      {/* <Route  path="/products/:productSlug/edit" > */}
        <FormProduct />
       </Route>

      <Route  path="/products/FormProduct" >
        <FormProduct />
       </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/shops/:shopSlug">
          <ShopDetails />
        </Route>

        <Route path="/shops">
          <ShopsList/>
        </Route>
        
        <Route path="/products">
          <ProductList products={products}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
       
      </Switch>
)

}
export default Routes;