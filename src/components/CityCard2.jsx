import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../store/actions/productActions';


const CityDetail = () => {
    const { products, search, loading, error } = useSelector((state) => state.productsStore);
    const dispatch = useDispatch();

    if (loading) {
        return <div>Cargando...</div>
    }

    const items = products

    const filteredItems = items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesSearch;
      });

    return (
        <>

            <div className="w-full relative overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
                <img
                    src={city.photo}
                    alt={city.cityName}
                    className="w-full h-full object-cover absolute object-center brightness-[.65] shadow-lg animate-zoom"
                />
                <div className="flex flex-col gap-4 items-center h-screen">
                    <div className="h-screen flex flex-col justify-center items-center text-neutral-100 text-center max-w-2xl gap-4 z-10">
                        <h1 className="text-5xl font-bold">{city.cityName}</h1>
                        <p className="text-2xl italic font-light">{city.description}</p>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 active:scale-95 disabled:active:scale-100 transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center text-xl px-8"
                            >
                                Back to Cities
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


};

export default CityCard2;