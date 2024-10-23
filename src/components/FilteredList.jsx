import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilteredList = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = searchParams.get('search') || '';
      
      try {
        const response = await fetch(`http://localhost:8080/api/cities/all?search=${query}`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
      
      setLoading(false);
    };

    fetchData();
  }, [searchParams]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="city-list">
      {cities.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        cities.map((city) => (
          <div key={city.id} className="city-card">
            <h3>{city.name}</h3>
            <p>{city.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FilteredList;
