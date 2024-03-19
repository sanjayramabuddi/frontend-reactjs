import React, { useState } from 'react';
// import { useEffect } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif';
// import axios from 'axios';

// const key = process.env.GIPHY_API_KEY;

const SearchGif = () => {

    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState('false');
    const [tag, setTag] = useState('');
    const [gif, loading, fetchData] = useGif(tag);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`;
    //     const { data } = await axios.get(url);
    //     const imageSrc = data.data.images.downsized_large.url;
    //     setGif(imageSrc);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [0])

    return (
        <div>
            <h1>Random {tag} Gif</h1>
            {
                loading ? (<Loader />) : (<img src={gif} alt="Random Gif" />)
            }
            <input type='text'
                value={tag}
                onChange={(event) => setTag(event.target.value)}
            />
            <button onClick={() => fetchData()}>Next</button>
        </div>
    )
}

export default SearchGif