import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import StyledSearchbar from "../../styles/styled_searchbar/styledSearchbar";
import StyledButton from "../../styles/styled_button/styledButton";
import StyledOrders from "../../styles/styled_genres/styledGenres";
import { StyledUserProduct } from "../../styles/styled_userProduct/styledUserProduct";

export default function UserOrders() {
  const products = useSelector((state) => state.adminReducer.orders);
  const games = useSelector((state) => state.rootReducer.games);
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState("");
  const [finalProducts, setFinalProducts] = useState(products.map((e) => e));
  const [newId, setNewId] = useState();

  const handleClick = () => {
    if (newValue === "") {
      return finalProducts;
    } /* else if( typeof newValue === Number) {
            setFinalProducts(products.filter(e => e.id === newValue))
            console.log(finalProducts) */ else {
      setFinalProducts(
        products.filter((e) => e.userEmail === newValue.toLowerCase())
      );
      console.log(typeof finalProducts);
      console.log(finalProducts);
    }
  };
  const resetClick = () => {
    setFinalProducts(products.map((e) => e));
  };

  return (
    <StyledUserProduct>
      <div className = "bar">
        <div className = "input">
          <StyledSearchbar
            type="email"
            placeholder="email..."
            onChange={(e) => setNewValue(e.target.value)}
          />
        </div>
        {/*  <div>
                    <input type='number' min='1' placeholder='order id...' onChange={(e) => setNewValue(e.target.value)}/>
                </div> */}
        <div className="search">
          <StyledButton type="submit" onClick={() => handleClick()}>
            Search
          </StyledButton>
        </div>
        <div className="button">
          <StyledButton onClick={() => resetClick()}>All orders</StyledButton>
        </div>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Id de la orden</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {finalProducts.length
            ? finalProducts.map((e) => (
                <Tr>
                  <Td>{e.userEmail}</Td>
                  <Td>{e.id}</Td>
                  <Td>{e.price}</Td>
                </Tr>
              ))
            : "Not found"}
        </Tbody>
      </Table>
    </StyledUserProduct>
  );
}

