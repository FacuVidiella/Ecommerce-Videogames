import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/actions/detailActions";
import { removeWishList } from "../../Redux/actions/wishActions";
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";
import StyledWishCard from "../styles/styled_wish/styledWishCard";

export default function WishCard({ name,productId }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeWishList(name));
  };

  return (
    <StyledWishCard>
      <Link to={`/details/${productId}`}>
        <h2> {name} </h2>
      </Link>
      <StyledCloseButton onClick={handleClick}> x </StyledCloseButton>
    </StyledWishCard>
  );
}
