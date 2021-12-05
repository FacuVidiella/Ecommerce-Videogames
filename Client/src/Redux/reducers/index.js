import { GETPRODUCTS, GETNAMEPRODUCTS, UPDATEPRODUCTS, SETCATEGORYTOPRODUCT, UNSETCATEGORYTOPRODUCT, DELETEPRODUCT } from "../actions/productsActions.js";
import { GETCATEGORIES } from "../actions/categoriesActions.js";
import { LOGGER } from "../actions/utilityActions.js";
import { GETDETAIL, RESET_DETAIL } from "../actions/detailActions.js";
import { FILTER_BY_NAME } from "../actions/sortByAbcActions.js";
import { SORT_BY_PRICE } from "../actions/sortByPriceActions.js";
import { GET_WISHLIST, REMOVE_WISHLIST } from "../actions/wishActions.js";
import { GET_RATINGS } from "../actions/opinionsActions.js";

const initialState = {
  games: [],
  filter: [],
  categories: [],
  user: [],
  detailProduct: [],
  orders: [],
  wish: [],
  rating: 0,
  orderSuccess: [],
  offers:[],
  rating: 0,
  users: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETPRODUCTS:
      return {
        ...state,
        games: action.payload,
        filter: action.payload,
      };
    case GETCATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GETDETAIL:
      return {
        ...state,
        detailProduct: action.payload,
      };
    case 'GETOFFERS':
      return{
        ...state,
        offers: action.payload,
      };
    case RESET_DETAIL:
      return {
        ...state,
        detailProduct: [],
        rating: 0
      }

    case GET_WISHLIST:
      return {
        ...state,
        wish: [...state.wish, action.payload]
      }

    case GET_RATINGS:
      let auxRating = 0
      let opinions = state.detailProduct.opinions ? state.detailProduct.opinions : [];
      if (opinions.length > 1) {
        auxRating = opinions.reduce((a, b) => Number(a.revRating) + Number(b.revRating)) / opinions.length
      } else if (opinions.length === 1) {
        auxRating = opinions.find(element => element.revRating > 1).revRating;
        console.log(auxRating)
      } else {
        auxRating = action.payload
      }
      return {
        ...state,
        rating: Math.floor(auxRating)
      }
      
      case 'GET_USERS': 
        return {
          ...state,
          users: action.payload
        }

    case REMOVE_WISHLIST:
      const auxWish = [...state.wish].filter(wish => wish.name !== action.payload)

      return {
        ...state,
        wish: auxWish
      }

    case GETNAMEPRODUCTS:
      return {
        ...state,
        games: action.payload
      };

    case LOGGER:
      return {
        ...state,
        user: action.payload,
      };
    case "DISLOGG":
      return {
        ...state,
        user: [],
      };
    case FILTER_BY_NAME:
      const ascDescFilter =
        action.payload === "za"
          ? state.games.sort((a, b) => {
            if (a.name?.toLowerCase() < b.name?.toLowerCase()) return 1;
            if (a.name?.toLowerCase() > b.name?.toLowerCase()) return -1;
            return 0;
          })
          : state.games.sort((a, b) => {
            if (a.name?.toLowerCase() > b.name?.toLowerCase()) return 1;
            if (a.name?.toLowerCase() < b.name?.toLowerCase()) return -1;
            return 0;
          });
      return {
        ...state,
        games: [...ascDescFilter],
      };
    case SORT_BY_PRICE:
      const priceFilter =
        action.payload === "max"
          ? [...state.filter].sort((b, a) => a.price - b.price)
          : [...state.filter].sort((b, a) => b.price - a.price);
      return {
        ...state,
        games: priceFilter,
      };
    case 'NEWORDER':
      return {
        ...state,
        orders: action.payload
      }

    case 'DELETEORDERS':
      return {
        ...state,
        orders: []
      }

    case 'GET_ORDERS_FOR_USER':
      return{
        ...state,
        orderSuccess: action.payload
      }
    


    case UPDATEPRODUCTS:
      return {
        ...state,
        games: state.games.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      };
    case DELETEPRODUCT:
      return {
        ...state,
        games: state.games.filter(p => p.id !== action.productDeleted)
      };
    case SETCATEGORYTOPRODUCT:
      return {
        ...state,
        games: state.games.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      };
    case UNSETCATEGORYTOPRODUCT:
      return {
        ...state,
        games: state.games.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      }

    default:
      return state;
  }
}
