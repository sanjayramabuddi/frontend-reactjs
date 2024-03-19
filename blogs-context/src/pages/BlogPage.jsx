import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
// import { baseUrl } from '../baseUrl';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch (error) {
      console.log("Something went wrong");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className="flex flex-col gap-y-10 my-4">
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {loading ?
        (<div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading...</p></div>) :
        blog ?
          (<div >
            <BlogDetails post={blog} />
            <h2> Related Blogs </h2>
            {relatedblogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))
            }
          </div>) :
          (<div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blog Found</p>
          </div>)
      }
    </div>
  )
}

export default BlogPage

