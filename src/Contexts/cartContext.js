import { createContext, useContext, useEffect, useReducer } from "react";
  
export const cartContext = createContext();
export const useShoppingCart = () => useContext(cartContext);
  
const sortCartItems = (shoppingCartArray) => {
  const sorted =  shoppingCartArray.sort(function(x, y){
    console.log({x, y});
    console.log({xTimestamp: x.timestamp});

    console.log('number: ', y.timestamp - x.timestamp)

    return y.timestamp - x.timestamp;
  })

  console.log({shoppingCartArray, sorted })

  return sorted;
}

const getShoppingCartTotal = (shoppingCart) => {
  const total = shoppingCart.reduce(
    (accumulator, item, index, array) => {
      return accumulator + (item.price * item.quantity)
    }, 0);

  return total;
}

const addToCartActionCreator = ({
  id,
  title,
  price,
  image,
}) => {
  console.log('product id: ', id)
  return {
    type: "ADD_TO_CART",
    payload: {
      id,
      title,
      price,
      image,
    }
}};

const removeToCartActionCreator = (itemId) => {
  return ({
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemId
    }
  })
}

  // Hey I am the state reducer I get called everythime an action is dispatched.
  // The arguments react calls me with are the currentstate and the action that was just dispatched.
  // Whatever I return is the new state
const reducer = (oldState, action) => {

  if(action.type === "EMPTY_CART"){
    return [];
  }
  
  if(action.type === "ADD_TO_CART"){
    const { payload: { id, title, price, image } }= action;

    const itemFound = oldState.find(item => item.id === action.payload.id);


    if(itemFound){
      return sortCartItems([
        ...oldState.filter(item => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity + 1,
        }
      ]);
    }
    
    return sortCartItems([
      ...oldState,
      {
        id,
        title,
        price,
        image,
        quantity: 1,
        timestamp: Date.now(),
      }
    ])
  }

  if(action.type === "REMOVE_FROM_CART"){

    const itemFound = oldState.find(item => item.id === action.payload.id);

    if(itemFound){
      if(itemFound.quantity === 1){
       return  sortCartItems(oldState.filter(item => item.id !== action.payload.id))
      }

      return sortCartItems([
        ...oldState.filter(item => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity - 1,
        }
      ]);
    }
  }
};

export const CartContextProvider = (props) => {

  const { children } = props;

  const cartInLocalStorage = window.localStorage.getItem('shoppingCart');

  const initialShoppingCart =
    cartInLocalStorage
      ? JSON.parse(cartInLocalStorage)
      : []
    ;

  const [shoppingCart, dispatch] = useReducer(reducer, initialShoppingCart);

  useEffect(() => {
      window.localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  }, [shoppingCart])

  const addItemToCart = ({
    id,
    title,
    price,
    image,
  }) => {
    dispatch(
      addToCartActionCreator({
        id,
        title,
        price,
        image,
      })
    )
  }

  const removeFromCart = (id) => {
    dispatch(
      removeToCartActionCreator(id)
    )
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" })
  }

  return (
    <cartContext.Provider
      value={{
        shoppingCart,
        addItemToCart,
        removeFromCart,
        emptyCart,
        total: getShoppingCartTotal(shoppingCart),
      }}
    >
      {children}
    </cartContext.Provider>
  )
};