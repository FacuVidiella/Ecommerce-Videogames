import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions/detailActions";
import { removeReview } from "../../Redux/actions/opinionsActions";
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";
import { StyledRatingView } from "../styles/styled_rating/styledRating";
import StyledDeleteReview from "../styles/styled_reviewCard/styledDeleteCard";
import StyledAllReview from "../styles/styled_reviewCard/styledReviewCard";

export default function Review({
  name,
  rating,
  content,
  id,
  isActive,
  userEmail,
  productId
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.rootReducer.user);
  const [body, setBody] = useState({
    request: "",
    idOpinion: 0,
    descriptionHistory: ""
  });

  useEffect(() => {
    console.log(name);
    console.log(body)
    dispatch(getDetail(productId))
  }, [name,isActive,body]);

  const onHandleClick = (e) => {
    e.preventDefault();
    console.log(e)
    if(e.target.id === "1"){
      setBody({
      request: "REMOVE_OPINION",
      idOpinion: id,
      descriptionHistory: "This comment breaks our communication rules",
    });
    dispatch(removeReview(userEmail, body));
    }else{
      setBody({
        request: "ACTIVATE_OPINION",
        idOpinion: id,
        descriptionHistory: "This comment was enabled",
      });
      dispatch(removeReview(userEmail, body));
    }
    
  };

  return (
    <>
      {isActive ? (
        <StyledAllReview>
          <hr />
          <div>
            <p>{name}</p>
            <StyledRatingView ratingValue={rating} />
            {user.roleAdmin === true || user.superAdmin === true ? (
              <StyledCloseButton onClick={onHandleClick} id={1} />
            ) : (
              ""
            )}
          </div>
          <p> {content}</p>
          <hr />
        </StyledAllReview>
      ) : (
        <div>
          <StyledDeleteReview>
            <hr />
            <div className="data">
              <p>{name}</p>
              <StyledRatingView ratingValue={rating} />
            </div>
            <p className="content"> {content}</p>
            <hr />
            <div className="message">
              <p> This comment breaks our communication rules </p>
              {user.roleAdmin === true || user.superAdmin === true ? (
              <StyledCloseButton onClick={onHandleClick} id={2} />
            ) : (
              ""
            )}
            </div>
          </StyledDeleteReview>
        </div>
      )}
    </>
  );
}
