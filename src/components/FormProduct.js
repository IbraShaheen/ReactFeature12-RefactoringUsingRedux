import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { useHistory } from "react-router";

//import { useParams } from "react-router";


const FormProduct = () => {
  const [product, setProduct] = useState(
      {
    name: "",
    price: 1,
    description: "",
    image: "",
  });


  const dispatch = useDispatch();
  const history = useHistory();

  const resetForm = () => {
    setProduct({
      name: "",
      price: 1,
      description: "",
      image: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addProduct(product));
    history.push("/products");

    resetForm();
  };
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <center>
      <form onSubmit={handleSubmit} style={{ width: "40%" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the product name"
            onChange={handleChange}
            name="name"
            value={product.name}
            required
          />
        </div>
        <div className="form-group">
          <label for="theprice">The product price (KD) </label>
          <input
            type="number"
            className="form-control"
            id="theprice"
            placeholder="Enter the product price"
            onChange={handleChange}
            name="price"
            value={product.price}
            min={1}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the product description"
            onChange={handleChange}
            name="description"
            value={product.description}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the product Image URL"
            onChange={handleChange}
            name="image"
            value={product.image}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </center>
  );
};

export default FormProduct;
