import toolkit from '@reduxjs/toolkit'

const { configureStore, createSlice} = toolkit

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action){
      state.push(action.payload)
    }
  }
})

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
})
console.log('on create store', store.getState())

// subscribe
store.subscribe(() => {
  console.log('store changed', store.getState())
})

// dispatch
store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 13}))