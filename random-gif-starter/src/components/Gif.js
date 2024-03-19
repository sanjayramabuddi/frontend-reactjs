// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import Loader from './Loader';
import useGif from '../hooks/useGif';

// const key = process.env.GIPHY_API_KEY;

const Gif = () => {

    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false);
    const [gif, loading, fetchData] = useGif();

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    //     const { data } = await axios.get(url);
    //     const imageSrc = data.data.images.downsized_large.url;
    //     setGif(imageSrc);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <div>
            <h1>Random Gif</h1>
            {
                loading ? (<Loader />) : (<img src={gif} alt="Random Gif" />)
            }
            <button onClick={() => fetchData()}>Next</button>
        </div>
    )
}

export default Gif