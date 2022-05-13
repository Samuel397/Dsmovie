import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    /* React Hook useState (Manter o estado)
    const[pagenumber, setPageNumber] = useState(0);
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response =>{
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });
        */
        const[pagenumber, setPageNumber] = useState(0);

        useEffect(() =>{
            axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response =>{
                const data = response.data as MoviePage;
                setPageNumber(data.number);
            });
        },[]);
        // useEffect so executa a função quando carrega o componente

    return (
        <>
            <p>{pagenumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>
    );
}
export default Listing;