/* 
import React, { useState, useEffect } from 'react';
import CityCard2 from '../components/CityCard2.jsx';
import SearchBar from '../components/SearchingBar.jsx';

const Cities = () => {
    const [searchValue, setSearchValue] = useState('');
    const [cities, setCities] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/cities/all?cityName=' + searchValue);
                if (response.status === 404) {
                    setNotFound(true);
                    setCities([]);
                    return;
                }

                const data = await response.json();
                setCities(data.response || []);
                setNotFound(false);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, [searchValue]);

    return (
        <div className="max-w-max mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Cities</h1>
            <div className="max-w-md mx-auto w-full sm:w-3/4 lg:w-3/4 mb-10">
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {notFound ? (
                    <div className="max-w-max col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
                        <div className="flex flex-col text-center gap-2 text-neutral-500 dark:text-neutral-300 bg-slate-300 dark:bg-slate-700 shadow-lg rounded-md p-4 w-full">
                            <i className="text-9xl undefined"></i>
                            <h2 className="text-4xl font-semibold">No Results Found</h2>
                            <p className="text-2xl">We couldn't find any cities with the provided name.</p>
                        </div>
                    </div>
                ) : (
                    cities.map((city) => (
                        <div key={city._id} className="flex justify-center">
                            <CityCard2 city={city} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );    
};

export default Cities;
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../store/actions/productActions';


const Cities2 = () => {
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

export default Cities2;