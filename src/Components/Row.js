import movieTrailer from 'movie-trailer'
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import '../Styles/row.css'

function Row({ Title, fetchURL, isLargeRow, LoadingProgress }) {
    const [movies, setMovies] = useState([])
    //A state variable to store the trailerURL
    const [trailerURL, setTrailerURL] = useState('')

    const baseURL = 'https://image.tmdb.org/t/p/original/'

    //A Block of code that runs every time Row component is rendered or fetchURL is changed ,
    //Used to fetch movies from the API
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            LoadingProgress(80)
            // console.log(request.data.results)
            setMovies(request.data.results)
            LoadingProgress(100)
            return request;
        }
        fetchData();
    }, [fetchURL])

    //A function to handle trailer on click
    const handleTrailer = (movie) => {
        if (trailerURL) {
            setTrailerURL('')
        }
        else {
            movieTrailer(movie.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerURL(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }
    //youtube opts code
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <div className='row'>
            <h2>{Title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
                        (
                            <img key={movie.id} onClick={() => handleTrailer(movie)} className={`row__poster ${isLargeRow && "largerow__poster"}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        )
                    ))
                }
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row;