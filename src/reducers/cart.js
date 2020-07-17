import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  addedNames: []
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
      //I'm going to need to add a button that links back to REMOVE_FROM_CART. further investigation is needed...
    case REMOVE_FROM_CART:
        console.log("removed from cart");

        return state.filter(id => id !== action.productId);
      //return [ ...state.slice(0,state.indexOf(action.productId),
        //  ...state.slice(state.indexOf(action.productId)+1))
    //  ];
    default:
      return state
  }
}

//I wrote this function so that I could grab the names of each item and log into the cart once it gets selected
const addedNames = (state = initialState.addedNames, action) => {
  console.log("initialstate", initialState)
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1 ) {
        console.log("state ", state)
        return state
      }
      return [ ...state, action.productTitle]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    //temporarily turning this off to test
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return { ...state, [action.productId]: state[action.productId] - 1 }; //
     /* 
      --- tried putting this down earlier, but this didn't work --- 
      return { ...state.slice(0,state.indexOf(action.productId),
          ...state.slice(state.indexOf(action.productId)+1)) }
          */
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getAddedNames = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        //addedNames: addedNames(state.addedNames, action)
      }
  }
}

export default cart
