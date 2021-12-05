import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  editProduct,
} from "../../../Redux/actions/productsActions";
import { useNavigate } from "react-router";
import { getCategories } from "../../../Redux/actions/categoriesActions";
import { StyledFormProduct } from "../../styles/styled_formProduct/styledFormProduct";

//control errores
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.price) {
    errors.price = "Price is required ";
  } else if (!input.stock) {
    errors.stock = "Stock is required";
  } else if (!input.description) {
    errors.description = "Description es required";
  } else if (!input.image) {
    errors.image = "Image es required";
  } else if (input.category.length === 0) {
    errors.category = "Category es required";
  }
  return errors;
}
export default function FormProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categ = useSelector((state) => state.rootReducer.categories);
  const email = useSelector((state) => state.adminReducer.admin.email);
  const [errors, setErrors] = useState({});
  const Swal = require("sweetalert2");

  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: [],
    discount: null,
  });
  /* useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]); */

  function hangleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("errors");
    if (!Object.keys(errors).length) {
      if (errors.category) {
        Swal.fire({
          icon: "error",
          title: "Oops something went wrong",
          text: "There are no categories",
        });
      } else {
        dispatch(postProduct(input, email));
        let inputs = document.querySelectorAll("input[type=checkbox]");
        inputs.forEach((item) => {
          item.checked = false;
        });
        Swal.fire({
          icon: "Success",
          title: "GG",
          text: `${input.name} has been created`,
          background: "#fff url(/images/trees.png)",
          backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
        });
        navigate("/");
        setInput({
          name: "",
          price: "",
          stock: "",
          description: "",
          image: "",
          category: [],
          discount: null,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops something went wrong",
        text: "Complete all the fields",
      });
    }
  }

  function handleSelect(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      setInput({
        ...input,
        category: [...input.category, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          category: e.target.value,
        })
      );
    } else {
      setInput({
        ...input,
        category: input.category.filter(
          (category) => category !== e.target.value
        ),
      });
      setErrors(
        validate({
          ...input,
          category: input.category.filter(
            (category) => category !== e.target.value
          ),
        })
      );
    }
  }

  return (
    <StyledFormProduct>
      <h3>Productos</h3>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input__box">
          <div className="input">
            <div>
              <h5>Crear producto</h5>
            </div>
            <div className="input__labels">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  placeholder="Name..."
                  required
                  onChange={(e) => hangleChange(e)}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <label>Price</label>
              <div>
                <input
                  type="number"
                  value={input.price}
                  name="price"
                  placeholder="Price..."
                  required
                  onChange={(e) => hangleChange(e)}
                />
                {errors.price && <p>{errors.price}</p>}
              </div>
              <label>Discount</label>
              <div>
                <input
                  type="text"
                  value={input.discount}
                  name="discount"
                  placeholder="Discount..."
                  onChange={(e) => hangleChange(e)}
                />
              </div>
              <label>Stock</label>
              <div>
                <input
                  type="number"
                  value={input.stock}
                  name="stock"
                  placeholder="Stock"
                  required
                  onChange={(e) => hangleChange(e)}
                />
                {errors.stock && <p>{errors.stock}</p>}
              </div>

              <label>Image</label>
              <div>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  placeholder="Image.."
                  required
                  onChange={(e) => hangleChange(e)}
                />
                {errors.image && <p>{errors.image}</p>}
              </div>
              <label>Description</label>
              <div>
                <textarea
                  type="text"
                  value={input.description}
                  name="description"
                  placeholder="Description.."
                  required
                  onChange={(e) => hangleChange(e)}
                />
                {errors.description && <p>{errors.description}</p>}
              </div>
            </div>
          </div>

          <div className="categories">
            <h5>Categorias</h5>
            <div>
              {categ &&
                categ.map((c) => {
                  return (
                    <div className="category_card" key={c.name}>
                      <label>{c.name}</label>
                      <input
                        type="checkbox"
                        value={c.name}
                        onChange={(e) => handleSelect(e)}
                      />
                    </div>
                  );
                })}
              <br />
              {errors.category && <p>{errors.category}</p>}
            </div>
          </div>
        </div>

        <button type="submit">Crear</button>
      </form>
    </StyledFormProduct>
  );
}
