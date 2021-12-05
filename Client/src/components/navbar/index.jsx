import StyledNavbar from "../styles/styled_navbar/styledNavbar";
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar";
import StyledButton from "../styles/styled_button/styledButton";
import { StyledUserImage } from "../styles/styled_userImage/styledUserImage";
import StyleDropdown from "../styles/styled_dropdown/styleDropdown";
import StyledModal from "../styles/styled_modal/styleModal";
import StyledDropdownWish from "../styles/styled_wish/styledWish";
import { useTransition, animated } from "react-spring";
import { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";

import { ImProfile as ProfileIcon } from "react-icons/im";
import {
  AiFillHome as HomeIcon,
  AiOutlineForm as SignInIcon,
} from "react-icons/ai";
import { FaUser as UserIcon, FaShoppingCart as CartIcon } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdOutlineAdminPanelSettings } from "react-icons/md";
import DefaultUserIcon from "../../img/user-icon.jpg";

import Login from "../Authentication/Login";
import Logout from "../Authentication/Logout";
import Cart from "../Cart/index.jsx";
import WishList from "../wishList/index.jsx";
import { closeCart, openCart } from "../../Redux/actions/cartActions";
import {
  getProductsByName,
  getProducts,
} from "../../Redux/actions/productsActions";

import logoG from "../../logoGecommerce.png";

import { Link } from "react-router-dom";

export default function Navbar({ game, setGame, price, setPrice }) {
  const refUser = useRef(null);
  const refCart = useRef(null);
  const refWish = useRef(null);

  const dispatch = useDispatch();

  const [modalUser, setModalUser] = useState(false);
  const [modalWish, setModalWish] = useState(false);
  const [valueInput, setValueInput] = useState("");
  /* const [modalCart, setModalCart] = useState(false); */
  const { isAuthenticated, user } = useAuth0();

  const userData = useSelector((state) => state.rootReducer.user);
  const modalCart = useSelector((state) => state.cartReducer.cartIsOpen);
  const wish = useSelector((state) => state.rootReducer.wish);

  console.log(wish)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (modalUser && refUser.current && !refUser.current.contains(e.target)) {
        setModalUser(false);
      }
      if (modalCart && refCart.current && !refCart.current.contains(e.target)) {
        dispatch(closeCart());
      }
      if (modalWish && refWish.current && !refWish.current.contains(e.target)) {
        setModalWish(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }; 
  }, [modalUser, modalCart, modalWish]);


  const transitionCart = useTransition(modalCart, {
    from: { opacity: 0.5, x: 200 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 200 },
    config: { duration: 300 },
  });

  const transitionUser = useTransition(modalUser, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 100 },
  });

  const transitionWish = useTransition(modalWish, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 100 },
  });

  const showUserPanel = (e) => {
    e.preventDefault();
    if (modalUser === true) {
      setModalUser(false);
    } else {
      setModalUser(true);
    }
  };

  const onHandlerChange = (e) => {
    setValueInput(e.target.value);
    if (e.target.value === "") {
      dispatch(getProducts("All Categories"));
    } else {
      dispatch(getProductsByName(valueInput));
    }
  };

  const shoWishPanel = (e) => {
    e.preventDefault();
    if (modalWish === true) {
      setModalWish(false);
    } else {
      setModalWish(true);
    }
  };

  return (
    <StyledNavbar>
      <div>
        <img src={logoG} className="logo" alt="logo" />
      </div>
      <div className="searchbar">
        <StyledSearchbar
          placeholder="Search"
          onChange={onHandlerChange}
          value={valueInput}
        />
      </div>

      <div className="icons">
        <Link to="/" className="link">
          <div>
            <HomeIcon className="icon" />
            Home
          </div>
        </Link>
        <div onClick={showUserPanel}>
          {isAuthenticated ? (
            <StyledUserImage>
              {userData.photo ? (
                <img src={userData.photo} alt="userImage" />
              ) : (
                <img src={DefaultUserIcon} alt="No user image" />
              )}
            </StyledUserImage>
          ) : (
            <UserIcon className="icon" />
          )}

          <span>{isAuthenticated ? userData.firstName : "User"}</span>
          {transitionUser((style, bool) =>
            bool ? (
              <animated.div style={style} className="user">
                <StyleDropdown name="modalUser" ref={refUser}>
                  <div className="arrow_box"></div>
                  <div>{isAuthenticated ? <Logout /> : <Login />}</div>
                  {userData && userData.roleAdmin === true ? (
                    <div>
                      <Link to="/adminPanel" className="link">
                        <StyledButton>ADMIN PANEL</StyledButton>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                  {isAuthenticated && (
                    <div>
                      <Link to="/userPanel" className="link">
                        <StyledButton>
                          <ProfileIcon />
                          Profile
                        </StyledButton>
                      </Link>
                    </div>
                  )}
                </StyleDropdown>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
        <div >
          <MdOutlineFavorite onClick={shoWishPanel} className="icon" />
          <span> Wish </span>
          {transitionWish((style, bool) =>
            bool ? (
              <animated.div style={style} className="user">
                <div className="arrow_box"></div>
                <StyledDropdownWish
                  name="modalUser"
                  ref={refUser}
                >
                  {
                    wish.length > 0 ? wish.map((wish) => <WishList
                    name = {wish.name}
                    productId={wish.productId}
                    />): <p> No tienes ningun favorito </p>
                  }
                </StyledDropdownWish>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
        <div onClick={() => dispatch(openCart())}>
          <CartIcon className="icon" />
          <span>Cart</span>
        </div>
      </div>
      {transitionCart((style, bool) =>
        bool ? (
          <StyledModal>
            <animated.div style={style} className="cart" ref={refCart}>
              <Cart
                setPrice={setPrice}
                price={price}
                game={game}
                setGame={setGame}
                modalCart={modalCart}
              />
            </animated.div>
          </StyledModal>
        ) : (
          ""
        )
      )}
    </StyledNavbar>
  );
}
