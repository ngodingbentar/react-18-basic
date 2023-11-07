import { legacy_createStore } from "redux"

// reducer
const cartReducer = (state = {
  login: false,
  cart: [
    {
      id: 2,
      qty: 12,
    }
  ],
}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default: 
      return state
  }
}


// store
const store = legacy_createStore(cartReducer)
console.log('on create store', store.getState())


// subscribe
store.subscribe(() => {
  console.log('subscribe', store.getState())
})


// dispatch
const actionAdd = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 1
  }
}

store.dispatch(actionAdd)