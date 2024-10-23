import { useState } from "react";
import { useQuery } from "react-query";
import CityCard from "./CityCard.jsx";

const CardsList = () => {

    const [page, setPage] = useState(1);

    const getCities = async ({ queryKey }) => {
        const response = await fetch(`http://localhost:8080/api/cities/all?page=${queryKey[1]}`);
        return response.json();
    }

    const { data, status } = useQuery(['cities', page], getCities);

    if (status === 'loading') {
        return <p>Recuperando los productos...</p>;
    }

    if (status === 'error') {
        return <p>Error</p>;
    }

    return <div>
        <h2>Lista de productos</h2>
        <div>
            <button onClick={() => setPage(page - 1)}>Anterior</button>
            <button onClick={() => setPage(page + 1)}>Siguiente</button>
        </div>
        <div className="cites">
            {data.results.map(city => (
                <CityCard city={city} key={city.id} />
            ))}
        </div>
    </div>
}

export default CardsList;