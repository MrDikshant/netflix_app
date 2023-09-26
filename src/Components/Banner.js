import React, { useState, useEffect } from 'react'
import axios from '../axios'
import '../Styles/banner.css'

function Banner({ fetchURL, LoadingProgress }) {
    const [movie, setMovie] = useState([])

    //A function to truncate the description
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            LoadingProgress(10)
            let randomBanner = Math.floor(Math.random() * (request.data.results.length - 1))
            setMovie(request.data.results[randomBanner])
            LoadingProgress(40)
        }
        fetchData();
    }, [])

    return (
        <div
            className='banner'
            style={{
                backgroundSize: 'cover', backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
                , backgroundPosition: 'center center'
            }}>
            <div className="banner__contents">
                <div className="banner__title">
                    <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                </div>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {
                        truncate(movie?.overview, 200)
                    }
                </h1>
            </div>
            <div className="banner--fadebottom"></div>
        </div>
    )
}

export default Banner