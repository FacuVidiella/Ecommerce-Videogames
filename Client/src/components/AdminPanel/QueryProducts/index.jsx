import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  editProduct,
  addCategoryToProduct,
  removeCategoryToProduct
} from "../../../Redux/actions/productsActions";

import { StyledEditProduct } from "../../styles/styled_edit_product/styledEditProduct";

function QueryProducts(props) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.rootReducer.games);
  const dataCategories = useSelector((state) => state.rootReducer.categories);

  //Prductos
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  // Add and Remove Categories
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [removeCategoryModal, setRemoveCategoryModal] = useState(false);

  const [error, setError] = useState({});

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: "",
    name: "",
    price: "",
    discount: null,
    stock: "",
    description: "",
    images: "",
    categories: []
  });

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
    id: "",
    name: "",
  });

  //Productos
  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name) setProductoSeleccionado({
      ...productoSeleccionado,
      images: [value]
    });
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setError(validate({
      ...productoSeleccionado,
      [e.target.name]: [e.target.value]
    }));
  };

  const validate = (input) => {
    const error = {};

    if (!Number(input.price)) {
      error.price = "Please, input a valid price.";
    } else if (
      String(input.price).charAt(String(input.price).length - 3) !== "."
    ) {
      error.price = "Price format must have 2 digits after the decimal point.";
    }
    if (Number(input.stock) < 0) {
      error.stock = "Please, input a valid amount.";
    }
    return error;
  };

  //Categorias
  const handleChangeCategory = (e) => {
    const { name, value } = e.target;
    if (!value) return;

    setCategoriaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Productos
  const editar = () => {

    dispatch(editProduct(productoSeleccionado.id, productoSeleccionado));

    setModalEditar(false);
  };

  const eliminar = (e) => {
    dispatch(removeProduct(productoSeleccionado.id));
    setModalEliminar(false);
  };

  const addCategoryToProductModal = (p) => {
    setProductoSeleccionado(p);
    setCategoriaSeleccionada(null);
    setAddCategoryModal(true);
  };

  const removeCategoryToProductModal = (p) => {
    setProductoSeleccionado(p);
    setCategoriaSeleccionada(null);
    setRemoveCategoryModal(true);
  };

  const setCategoryToProduct = () => {
    if (!categoriaSeleccionada) return;
    dispatch(
      addCategoryToProduct(
        productoSeleccionado.id,
        categoriaSeleccionada.categoryId
      )
    );
    setAddCategoryModal(false);
  };

  const unsetCategoryToProduct = () => {
    if (!categoriaSeleccionada) return;
    dispatch(
      removeCategoryToProduct(
        productoSeleccionado.id,
        categoriaSeleccionada.categoryId
      )
    );
    setRemoveCategoryModal(false);
  };

  return (
    <div className="App">
      <h2
        style={{ margin: "auto", display: "flex", justifyContent: "center"}}
        id="prodList"
        class="alert alert-secondary"
      >
        PRODUCTS LIST
      </h2>
      <StyledEditProduct>
        {products.map((e) => (
          <div className="content_cards">
            <p>{e.name}</p>
            <img style={{borderRadius:'10px'}} src={e.image} alt="Hola mundo" />
            <div className="buttons">
              <div className="blue">
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarProducto(e, "Editar")}
                >
                  Edit Product
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => addCategoryToProductModal(e)}
                >
                  Add Category
                </button>
              </div>
              <div className="blue">
                <button
                  className="btn btn-danger"
                  onClick={() => seleccionarProducto(e, 'Eliminar')}
                >
                  Delete Product
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCategoryToProductModal(e)}
                >
                  Remove Category
                </button>
              </div>
            </div>
          </div>
        ))}
      </StyledEditProduct>

      <Modal isOpen={addCategoryModal}>
        <ModalHeader>
          <div>
            <h3>Add category to product</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Category</label>
            <select
              className="custom-select"
              name="categoryId"
              onChange={handleChangeCategory}
            >
              <option selected value="" name="category">
                Select a category
              </option>
              {dataCategories.map((e, i) => (
                <option value={e.id} name="category" key={i}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </ModalBody>

        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => setCategoryToProduct()}
          >
            Add
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setAddCategoryModal(false)}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>

      {removeCategoryModal && (
        <Modal isOpen={removeCategoryModal}>
          <ModalHeader>
            <div>
              <h3>Remove category from product</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Category</label>
              <select
                className="custom-select"
                name="categoryId"
                onChange={handleChangeCategory}
              >
                <option selected value="" name="category">
                  Select a category
                </option>
                {productoSeleccionado.categories.map((e) => (
                  <option value={e.id} name="category">
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-primary"
              onClick={() => unsetCategoryToProduct()}
            >
              Remove
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setRemoveCategoryModal(false)}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      )}

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Edit Product</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              id="idNum"
              type="text"
              name="id"
              value={productoSeleccionado && productoSeleccionado.id}
            />
            <br />

            <label>Product</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={productoSeleccionado && productoSeleccionado.name}
              onChange={handleChange}
              maxLength="200"
            />
            <br />
            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSeleccionado && productoSeleccionado.price}
              onChange={handleChange}
              maxLength="8"
            />
            {error.price && <span className="text-danger">{error.price}</span>}
            <br />

            <label>Discount</label>
            <input
              className="form-control"
              type="text"
              name="discount"
              value={productoSeleccionado && productoSeleccionado.discount}
              onChange={handleChange}
              pattern="\d*" 
              maxlength="3"
            />
            <br />

            <label>Stock</label>
            <input
              className="form-control"
              type="number"
              name="stock"
              value={productoSeleccionado && productoSeleccionado.stock}
              onChange={handleChange}
              step="1"
              min="0"
              max="9999"
              required
            />
            {error.stock && <span className="text-danger">{error.stock}</span>}
            <br />

            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSeleccionado && productoSeleccionado.description}
              onChange={handleChange}
              maxLength="2000"
            />
            <br />

            <label>Image</label>
            <input
              className="form-control"
              type="text"
              name="image"
              value={productoSeleccionado && productoSeleccionado.image}
              onChange={handleChange}
              maxLength="5000"
            />
            <br />
          </div>
        </ModalBody>

        <ModalFooter>
          <button
            disabled={error.price || error.stock}
            className="btn btn-primary"
            onClick={() => editar()}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Are you sure you want to delete this product from the database? {productoSeleccionado && productoSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}>
            No
          </button>
        </ModalFooter>
      </Modal>

    </div>
  );
}
export default QueryProducts


