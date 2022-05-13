import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {


    //React Hook useState (Manter o estado)
    /*const[pagenumber, setPageNumber] = useState(0);
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response =>{
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });
        */
    const [pagenumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pagenumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pagenumber]); //nesse momento o useEffect depende do pagenumber
    //sempre que mudar o pageNumber ele refaz a requisição e atualizar a pagina.
    // useEffect so executa a função quando carrega o componente
    //a execução é controlada pela requisição 

    /* const movie = {
         id: 1,
         image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
         title: "The Witcher",
         count: 2,
         score: 4.5
     };
     */

     //o atributo key é uma exigencia do React qunando se vai fazer uma renderizção dinamica de coleção
    
    
    const handlePageChange = (newPageNumber : number ) =>{
        setPageNumber(newPageNumber);
    }
    
     return (
        <>
            <Pagination page={page} onChange ={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                )}
                </div>
            </div>

        </>
    );
}
export default Listing;