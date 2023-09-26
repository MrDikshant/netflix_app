import React, { useState } from 'react'
import Row from '../Components/Row';
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import requests from '../requests';

//Import for top loading bar
import LoadingBar from 'react-top-loading-bar'

function HomePage() {

    //State for top loading bar
    const [progress, setProgress] = useState(0);

    //A function to set the progress of the top loading bar
    const LoadingProgress = (progress) => {
        setProgress(progress);
    }

    const RowData = [{
        title: 'NETFLIX ORIGINALS',
        fetchUrl: requests.fetchNetflixOriginals,
        isLargeRow: true,
    },
    {
        title: 'Trending Now',
        fetchUrl: requests.fetchTrending,
        isLargeRow: false,
    },
    {
        title: 'Top Rated',
        fetchUrl: requests.fetchTopRated,
        isLargeRow: false,
    },
    {
        title: 'Action Movies',
        fetchUrl: requests.fetchActionMovies,
        isLargeRow: false,
    },
    {
        title: 'Comedy Movies',
        fetchUrl: requests.fetchComedyMovies,
        isLargeRow: false,
    },
    {
        title: 'Horror Movies',
        fetchUrl: requests.fetchHorrorMovies,
        isLargeRow: false,
    },
    {
        title: 'Romance Movies',
        fetchUrl: requests.fetchRomanceMovies,
        isLargeRow: false,
    },
    {
        title: 'Documentaries',
        fetchUrl: requests.fetchDocumentaries,
        isLargeRow: false,
    }];
    return (
        <div className='homePage'>
            <LoadingBar color='#f44336' progress={progress} />
            <Nav />
            <Banner fetchURL={RowData[1].fetchUrl} LoadingProgress={LoadingProgress} />
            {RowData.map(row => (
                <Row Title={row.title} fetchURL={row.fetchUrl} isLargeRow={row.isLargeRow} key={row.title} LoadingProgress={LoadingProgress} />
            ))}
        </div>
    )
}

export default HomePage