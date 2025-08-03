import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../components/UI/Card.jsx";

export const Movie = () => {
    const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=c4509d88&s=batman';

    const [data, setData] = useState([]); 

    const getMoviesData = async () => {
        try {
            const response = await axios.get(API);
            console.log(response.data.Search);
            setData(response.data.Search);
        }catch (error){
            console.log(error);
        }
    }


    useEffect(() => {
        getMoviesData();
    }, []);

    return (
        <ul>
            {data && data.map((movies) => (
                <Card key={movies.imdbID} MoviesData={movies} />
            ))}
        </ul>
    );
};

export default Movie;
