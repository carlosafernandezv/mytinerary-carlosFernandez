import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SET_SEARCH,FilterStateContext,FilterDispatchContext } from '../context/FilterContext';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/actions/productActions';


const FilterSearch = () => {
  const {search} = useSelector((state) => state.productsStore);
  const dispatch = useDispatch();

  

  return (
    <form>
      <input
        type="text"
        value={search}
        onChange={(e)=>dispatch(setSearch(e.target.value))}
        placeholder="Buscar ciudad..."
      />
      {/* <button type="submit">Buscar</button> */}
    </form>
  );
};

export default FilterSearch;
