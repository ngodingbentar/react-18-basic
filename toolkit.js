import toolkit from '@reduxjs/toolkit'

const { configureStore, createAction, createReducer } = toolkit

// const initialState = {
//   cart: []
// }


// reducer
// const cartReducer = createReducer(initialState, (builder) => {
const addToCart = createAction("ADD_TO_CART")
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
      // state.cart = [...state.cart, action.payload]
      state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION")
const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  })
})

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  }
})
console.log('on create store', store.getState())

// subscribe
store.subscribe(() => {
  console.log('store changed', store.getState())
})

// dispatch
// const actionAdd = addToCart({
//   id: 1,
//   qty: 14
// })
store.dispatch(addToCart({ id: 1, qty: 14 }))
store.dispatch(addToCart({ id: 2, qty: 5 }))
store.dispatch(login())