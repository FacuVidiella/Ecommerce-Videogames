import StyledCartCard from "../styles/styled_cartCard/styledCartCard";
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";
import { useState } from "react";

import { AiOutlinePlusCircle as Plus, AiOutlineMinusCircle as Minus } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";
import { addCant, lessCant, removeCartProduct } from "../../Redux/actions/cartActions";

export default function CartCards({ name, price, id, setTotalPrice, totalPrice, discount }) {


  if(discount){

    price = price - (price * (discount/100));
  }


  const dispatch = useDispatch()
  const total = useSelector(state => state.cartReducer.total)

  const [contador, setContador] = useState(1)

  const filterGamesCart = (e, totalPrice) => {
    e.preventDefault()
    dispatch(lessCant(totalPrice))
    dispatch(removeCartProduct(id))
  }

  const addGame = (e) => {
    e.preventDefault();
    setContador(contador + 1)
    dispatch(addCant(price))

  }

  const lessGame = (e) => {
    e.preventDefault();
    setContador(contador - 1)
    if (contador < 2) {
      filterGamesCart(e, price)
    } else {
      dispatch(lessCant(price))
    }

  }

  return (
    <StyledCartCard>
      <div className="Close">
        <h3>{name}</h3>
        <StyledCloseButton onClick={(e) => filterGamesCart(e, (price * contador))} id={id} />
      </div>
      <div className="details">
        <p>{(price * contador).toFixed(2)}</p>
        <div >
          {/* <p>{contador}</p> */}
          {/* <Plus onClick={addGame} className="counters"> + </Plus>
          <Minus onClick={lessGame} className="counters" id={id}> - </Minus> */}
        </div>
      </div>
    </StyledCartCard>
  );
}
