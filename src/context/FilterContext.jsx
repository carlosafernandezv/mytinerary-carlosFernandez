import { createContext, useReducer } from 'react';
export const SET_SEARCH = 'SET_SEARCH';

export const FilterStateContext = createContext("");
export const FilterDispatchContext = createContext("");

export const FilterProvider = ({ children }) => {
  const [state,dispatch] = useReducer(productReducer,initialState);

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
      {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};



const initialState = {
  products: [],
  search: "",
};


