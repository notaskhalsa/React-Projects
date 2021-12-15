import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './Data';
import {Reducer, ReducerDataType} from './Reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

export type AppContextType = {
  clearCart : () => void,
  remove : (id: number) => void,
  increase : (id: number) => void,
  decrease : (id: number) => void,
  toggleAmount : (id: number, type: string) => void,
};

const AppContext = React.createContext<ReducerDataType &  AppContextType>({
  ...initialState,
  clearCart : () => {},
  remove : (id) => {},
  increase : (id) => {},
  decrease : (id) => {},
  toggleAmount : (id, type) => {},
});

const AppProvider:React.FC = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id:number) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id: number) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  const toggleAmount = (id: number, type: string) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}


export { AppContext, AppProvider };