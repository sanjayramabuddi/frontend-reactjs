import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProductData() {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log('Error fetching data', error);
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {
                loading ?
                    (<div>Loading...</div>) :
                    (posts.length > 0) ?
                        (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                            {posts.map((post) =>
                            (<Product key={post.id} post={post} />
                            ))}
                        </div>) :
                        (<div className="flex justify-center items-center">
                            No data found
                        </div>)
            }
        </div>
    )
};

export default Home;