import { createContext, useContext, useReducer } from "react"

interface ITotalPriceContext {
  total: number
}
const TotalPriceContext = createContext({} as ITotalPriceContext)
const TotalPriceDispatchContext = createContext(null)

function TotalPriceReducer (state, action) {
  switch(action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total
      }
    }
    default: {
      throw Error("Unkown action: " + action.type)
    }
  }
}

function TotalPriceProvider ({children}) {
  const [totalPrice, dispatch] = useReducer(TotalPriceReducer, { total: 0 })
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  )
}

function useTotalPrice () {
  return useContext(TotalPriceContext)
}

function useTotalPriceDispatch () {
  return useContext(TotalPriceDispatchContext)
}

export { TotalPriceProvider, useTotalPrice, useTotalPriceDispatch }