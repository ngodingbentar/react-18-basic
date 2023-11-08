import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

console.log('init store', store.getState())

store.subscribe(() => {
  console.log('store updated', store.getState())
})

export default store